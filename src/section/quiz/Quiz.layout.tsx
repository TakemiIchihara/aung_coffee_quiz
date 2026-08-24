import type { MultipleType } from '../../type/quizType'
import { QuizButtons } from './Quiz.button'

type QuizLayoutProps = {
  quizData: MultipleType
  number: number
  onAnswered: (isCorrect: boolean) => void
  ref: React.Ref<HTMLDivElement | null>
}

export const QuizLayout = ({
  quizData,
  number,
  onAnswered,
  ref,
}: QuizLayoutProps) => {
  return (
    <div
      className="grid h-dvh w-screen grid-rows-[0.4fr_0.6fr] items-center"
      ref={ref}
    >
      <div className="flex h-full flex-col items-center justify-end gap-2">
        <p className="text-xl font-medium">第{number}問</p>
        <h3 className="w-[80%] px-4 text-center text-2xl leading-6.5 font-bold tracking-wider">
          {quizData.question}
        </h3>
      </div>
      <div className="flex h-full flex-col items-center justify-end px-4">
        <QuizButtons
          isLong={quizData.isLong}
          options={quizData.options}
          onAnswered={onAnswered}
        />
      </div>
    </div>
  )
}
