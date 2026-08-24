import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { createResultAnimation } from './Quiz.results.animation'
import { useRef } from 'react'

type QuizResultType = {
  elapsedMs: number
  score: number
  total: number
  quizTitle?: string
  onRetry: () => void
}
export const QuizResults = ({
  elapsedMs,
  score,
  total,
  quizTitle,
  onRetry,
}: QuizResultType) => {
  const seconds = Math.floor(elapsedMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const remSeconds = seconds % 60
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      createResultAnimation(containerRef.current!)
    },
    { dependencies: [containerRef] }
  )

  return (
    <div
      className="flex h-dvh w-screen flex-col items-center justify-center gap-4"
      data-container
      ref={containerRef}
    >
      <h1 className="text-3xl">{quizTitle}</h1>
      <p className="text-md font-bold">結果</p>
      <p className="text-xl">
        {score} / {total} 問正解
      </p>
      <p className="text-lg">
        所要時間: {minutes}分{remSeconds}秒
      </p>

      <Link to={'/'} className="button-main">
        最初の画面に戻る
      </Link>
      <button onClick={onRetry} className="button-main">
        もう一度クイズを受ける
      </button>
    </div>
  )
}
