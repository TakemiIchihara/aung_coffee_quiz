import { opsQuizDeck } from './Decks/operation'
import type { MultipleType } from '@/type/quizType'

type QuizRegistryEntry = {
  id: string
  label: string
  deck: MultipleType[]
  color: string
}

export const quizRegistry: QuizRegistryEntry[] = [
  { id: 'operation', label: '基本業務', deck: opsQuizDeck, color: 'D9B18E' },
  { id: 'prep', label: '仕込み', deck: opsQuizDeck, color: 'A67564' },
  { id: 'open', label: 'オープン作業', deck: opsQuizDeck, color: '723E31' },
  { id: 'close', label: '締め作業', deck: opsQuizDeck, color: 'F2F1EF' },
]
