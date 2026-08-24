import type { MultipleType } from '@/type/quizType'
import { useEffect, useRef, useState } from 'react'

export function useQuizEngine(quizContent: MultipleType[]) {
  const [score, setScore] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [elapsedMs, setElapsedMs] = useState<number>(0)

  const startTimeRef = useRef<number>(0)
  const pausedAtRef = useRef<number>(0)
  const quizRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (isPaused || isFinished) return

    const interval = setInterval(() => {
      setElapsedMs(performance.now() - startTimeRef.current)
    }, 10)

    return () => clearInterval(interval)
  })

  const answer = (
    i: number,
    isCorrect: boolean,
    onTransition: (
      current: HTMLDivElement | null,
      next: HTMLDivElement | null
    ) => void
  ) => {
    if (isCorrect) setScore((s) => s + 1)

    const currentQuestion = quizRefs.current[i]
    const nextQuestion = quizRefs.current[i + 1]
    const isLast = i + 1 >= quizContent.length

    if (isLast) {
      setElapsedMs(performance.now() - startTimeRef.current)
      setIsFinished(true)
    }

    onTransition(currentQuestion, nextQuestion ?? null)
  }

  const start = () => {
    startTimeRef.current = performance.now()
  }

  const pause = () => {
    pausedAtRef.current = performance.now()
    setIsPaused(true)
  }

  const resume = () => {
    const pausedDuration = performance.now() - pausedAtRef.current
    startTimeRef.current += pausedDuration
    setIsPaused(false)
  }

  const reset = () => {
    setScore(0)
    setElapsedMs(0)
    setIsFinished(false)
    quizRefs.current = []
  }

  return {
    score,
    isFinished,
    elapsedMs,
    quizRefs,
    answer,
    start,
    pause,
    resume,
    reset,
  }
}
