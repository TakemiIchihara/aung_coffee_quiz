export type MultipleType = {
  question: string
  options: Options[]
  needReview: boolean
  isLong: boolean
}

export type Options = {
  text: string
  id: number
  isCorrect: boolean
}
