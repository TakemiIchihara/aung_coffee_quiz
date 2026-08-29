import type { MultipleType } from '@/type/quizType'
import { useRef, useState } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useShuffle } from '../../hooks/useShuffle'
import { useQuizEngine } from '@/hooks/useQuizEngine'

import { QuizLayout } from './Quiz.layout'
import { QuizResults } from './Quiz.results'

type QuizRunnerProps = {
  deck: MultipleType[]
  quizTitle: string
}

export const QuizRunner = ({ deck, quizTitle }: QuizRunnerProps) => {
  const [runKey, setRunKey] = useState(0)
  const quizContent = useShuffle(deck, 15, runKey)
  const containerRef = useRef<HTMLDivElement>(null)
  const engine = useQuizEngine(quizContent)

  const {
    quizRefs,
    score,
    elapsedMs,
    isFinished,
    start,
    pause,
    resume,
    answer,
    reset,
  } = engine

  const { contextSafe } = useGSAP(
    () => {
      if (!quizRefs.current) return

      gsap.set(quizRefs.current, {
        position: 'absolute',
        autoAlpha: 0,
        yPercent: 25,
      })
      gsap.set(quizRefs.current[0], { autoAlpha: 1, yPercent: 0 })
      start()
    },
    { scope: containerRef, dependencies: [runKey] }
  )

  const nextQuestion = contextSafe((i: number, isCorrect: boolean) => {
    answer(i, isCorrect, (current, next) => {
      pause()

      const tl = gsap.timeline({ onComplete: resume })
      tl.to(current, { autoAlpha: 0, yPercent: -25 })
      if (next) tl.to(next, { autoAlpha: 1, yPercent: 0 })
    })
  })

  if (isFinished) {
    return (
      <QuizResults
        elapsedMs={elapsedMs}
        score={score}
        total={quizContent.length}
        quizTitle={quizTitle}
        onRetry={() => {
          reset()
          setRunKey((k) => k + 1)
        }}
      />
    )
  }

  return (
    <div
      key={runKey}
      className="relative flex h-dvh flex-col items-center gap-10 overflow-hidden"
      ref={containerRef}
    >
      <h1>{quizTitle}</h1>
      <h2 className="w-full text-center text-4xl tabular-nums">
        {formatTime(elapsedMs)}
      </h2>
      {/* tabular-nums will give the numbers fixed width preventing the horizontal shifts */}
      {quizContent.map((content, i) => (
        <QuizLayout
          quizData={content}
          number={i + 1}
          onAnswered={(isCorrect) => nextQuestion(i, isCorrect)}
          ref={(el) => {
            quizRefs.current[i] = el
          }}
        />
      ))}
    </div>
  )
}

const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const centiseconds = Math.floor((ms % 1000) / 10)
  return `${minutes} : ${seconds.toString().padStart(2, '0')} . ${centiseconds.toString().padStart(2, '0')}`
}
