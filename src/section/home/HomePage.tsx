import { Link } from 'react-router-dom'
import { quizRegistry } from '@/content/quizRegistry'

export const HomePage = () => {
  return (
    <div className="flex h-dvh w-screen flex-col justify-end bg-[#D9D2CC] pb-10">
      <div className="grid grid-cols-2 items-center justify-center gap-x-2 gap-y-3 px-4">
        <h3 className="col-span-full justify-self-center">
          練習したい項目を選んでね
        </h3>
        {quizRegistry.map((quiz) => (
          <Link
            key={quiz.id}
            to={quiz.id === 'operation' ? `/quiz/${quiz.id}` : '/'}
            className="flex h-25 items-end justify-end rounded-2xl pr-2 pb-2 text-2xl font-light tracking-wider shadow-inner"
            style={{ backgroundColor: '#' + quiz.color }}
          >
            {quiz.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
