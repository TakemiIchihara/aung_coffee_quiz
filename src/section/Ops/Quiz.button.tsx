import { useState } from 'react'
import type { Options } from '../../type/quizType'
import { quizAnswer } from './Quiz.answer'
import { useShuffle } from '../../hooks/useShuffle'

type QuizButtonsType = {
  isLong: boolean
  options: Options[]
  onAnswered: () => void
}

export const QuizButtons = ({
  isLong,
  options,
  onAnswered,
}: QuizButtonsType) => {
  options = useShuffle(options)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const hasSelected = selectedId !== null

  return (
    <div
      className={`grid w-full pb-6 ${!isLong ? 'grid-cols-2' : 'grid-cols-1'} gap-x-1 gap-y-3`}
    >
      {options.map((el) => {
        const isSelected = selectedId === el.id
        const bgColor = !hasSelected
          ? 'bg-amber-100'
          : el.isCorrect
            ? 'bg-green-400'
            : isSelected
              ? 'bg-red-500'
              : 'bg-amber-100'

        return (
          <div
            className={`flex h-18 w-full cursor-pointer items-center justify-center rounded-full ${bgColor} text-lg font-semibold`}
            onClick={() => {
              if (selectedId !== null) return
              setSelectedId(el.id)
              if (!el.isCorrect) {
              }
              setTimeout(onAnswered, 200)
            }}
          >
            {el.text}
          </div>
        )
      })}
    </div>
  )
}
