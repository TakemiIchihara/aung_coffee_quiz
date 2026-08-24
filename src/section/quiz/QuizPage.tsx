import { quizRegistry } from '@/content/quizRegistry'
import { Link, useParams } from 'react-router-dom'
import { QuizRunner } from './QuizRunner'

export const QuizPage = () => {
  const { quizId } = useParams()
  const quiz = quizRegistry.find((q) => q.id === quizId)

  if (!quiz) {
    return (
      <div className="flex h-dvh w-screen flex-col items-center justify-center gap-4">
        <p className="text-xl">Quiz not found</p>
        <Link to="/" className="underline">
          Back to home
        </Link>
      </div>
    )
  }

  return <QuizRunner deck={quiz.deck} quizTitle={quiz.label} />
}
