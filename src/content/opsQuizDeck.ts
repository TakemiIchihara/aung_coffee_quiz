import type { MultipleType } from '../type/quizType'

const opsQuizMaterial = [
  {
    question: 'アイスコーヒーの容器は何色？',
    options: [{ text: 'ベージュ', isCorrect: true }, { text: '黄色' }],
    needReview: false,
  },
  {
    question: 'コールドブリュー使用時に気をつけるべきことは？',
    options: [
      { text: '残量が少なくなったら廃棄する', isCorrect: true },
      { text: '使用前に容器を優しく振って撹拌させる' },
      { text: '先に氷を入れてか注ぎ入れる' },
      { text: '注いだ後に軽く混ぜる' },
    ],
    needReview: false,
  },
  {
    question: 'エスプレッソは抽出から何秒後までに使う？',
    options: [
      { text: '10秒', isCorrect: true },
      { text: '8秒' },
      { text: '5秒' },
      { text: '15秒' },
    ],
    needReview: false,
  },
  {
    question: 'Rモカのチョコレートの量は？',
    options: [
      { text: '15g', isCorrect: true },
      { text: '20g' },
      { text: '10g' },
      { text: '25g' },
    ],
    needReview: false,
  },
  {
    question: 'Lモカのチョコレートの量は？',
    options: [
      { text: '25g', isCorrect: true },
      { text: '20g' },
      { text: '15g' },
      { text: '30g' },
    ],
    needReview: false,
  },
  {
    question: 'Rメイミョーのコンデンスミルクの量は？',
    options: [
      { text: '20g', isCorrect: true },
      { text: '15g' },
      { text: '25g' },
      { text: '30g' },
    ],
    needReview: false,
  },
  {
    question: 'Lメイミョーのコンデンスミルクの量は？',
    options: [
      { text: '30g', isCorrect: true },
      { text: '25g' },
      { text: '35g' },
      { text: '20g' },
    ],
    needReview: false,
  },
  {
    question: 'アメリカーノを作る時の最初の工程は？',
    options: [
      { text: '氷をコップにすりきりまで入れる', isCorrect: true },
      { text: '水をコップに適量入れる' },
      { text: 'エスプレッソをコップに入れる' },
      { text: '氷すりきりまでと水を先に入れる' },
    ],
    needReview: false,
  },
  {
    question: 'Rココアのチョコレートの分量は？',
    options: [
      { text: '25g', isCorrect: true },
      { text: '20g' },
      { text: '30g' },
      { text: '35g' },
    ],
    needReview: false,
  },
  {
    question: 'Lココアのチョコレートの分量は？',
    options: [
      { text: '35g', isCorrect: true },
      { text: '30g' },
      { text: '25g' },
      { text: '20g' },
    ],
    needReview: false,
  },
  {
    question: 'アイスココアの工程で他のアイスのドリンクと違うことは？',
    options: [
      { text: '最後にフォームをのせる', isCorrect: true },
      { text: '氷を多めに入れる' },
      { text: '最初に温かいミルクを入れる' },
      { text: '渡す時にスプーンをあげる' },
    ],
    needReview: false,
  },
  {
    question: '中深煎りのハンドリに使う豆の量は？',
    options: [
      { text: '17g', isCorrect: true },
      { text: '16g' },
      { text: '18g' },
      { text: '20g' },
    ],
    needReview: false,
  },
  {
    question: '浅煎りのハンドリに使う豆の量は？',
    options: [
      { text: '20g', isCorrect: true },
      { text: '17g' },
      { text: '18g' },
      { text: '16g' },
    ],
    needReview: false,
  },
  {
    question: '中深煎りのハンドリに使う豆の挽き目は？',
    options: [
      { text: '15', isCorrect: true },
      { text: '13.5' },
      { text: '15.5' },
      { text: '13' },
    ],
    needReview: false,
  },
  {
    question: '浅煎りのハンドリに使う豆の挽き目は？',
    options: [
      { text: '13.5', isCorrect: true },
      { text: '15' },
      { text: '15.5' },
      { text: '13' },
    ],
    needReview: false,
  },
  {
    question: 'ハンドリの一投目のお湯の量は',
    options: [
      { text: '50ml', isCorrect: true },
      { text: '70ml' },
      { text: '90ml' },
      { text: '100ml' },
    ],
    needReview: false,
  },
  {
    question: 'ハンドリの二投目のお湯の量は',
    options: [
      { text: '70ml', isCorrect: true },
      { text: '50ml' },
      { text: '90ml' },
      { text: '100ml' },
    ],
    needReview: false,
  },
  {
    question: 'ハンドリの三/四投目のお湯の量は',
    options: [
      { text: '90ml', isCorrect: true },
      { text: '50ml' },
      { text: '70ml' },
      { text: '100ml' },
    ],
    needReview: false,
  },
  {
    question: 'アイスハンドリの一投目のお湯の量は',
    options: [
      { text: '50ml', isCorrect: true },
      { text: '70ml' },
      { text: '90ml' },
      { text: '40ml' },
    ],
    needReview: false,
  },
  {
    question: 'アイスハンドリの二投目のお湯の量は',
    options: [
      { text: '70ml', isCorrect: true },
      { text: '50ml' },
      { text: '90ml' },
      { text: '40ml' },
    ],
    needReview: false,
  },
  {
    question: 'アイスハンドリの三/四投目のお湯の量は',
    options: [
      { text: '40ml', isCorrect: true },
      { text: '50ml' },
      { text: '70ml' },
      { text: '90ml' },
    ],
    needReview: false,
  },
  {
    question: 'アイスハンドリの豆の量は？',
    options: [
      { text: '20g', isCorrect: true },
      { text: '17g' },
      { text: '16g' },
      { text: '15g' },
    ],
    needReview: false,
  },
  {
    question: 'アイスハンドリの豆の挽き目は？',
    options: [
      { text: '11.5', isCorrect: true },
      { text: '13.5' },
      { text: '15' },
      { text: '11' },
    ],
    needReview: false,
  },
  {
    question: 'アイスコーヒーの消費期限は？',
    options: [
      { text: '3日', isCorrect: true },
      { text: '5日' },
      { text: '4日' },
      { text: '6日' },
    ],
    needReview: false,
  },
  {
    question: 'コールドブリューの消費期限は？',
    options: [
      { text: '5日', isCorrect: true },
      { text: '3日' },
      { text: '4日' },
      { text: '6日' },
    ],
    needReview: false,
  },
  {
    question: 'ジュースの消費期限は？',
    options: [
      { text: '6日', isCorrect: true },
      { text: '5日' },
      { text: '4日' },
      { text: '3日' },
    ],
    needReview: false,
  },
  {
    question: '豆乳の消費期限は？',
    options: [
      { text: '4日', isCorrect: true },
      { text: '5日' },
      { text: '3日' },
      { text: '6日' },
    ],
    needReview: false,
  },
  {
    question: 'お客さんに聞かなくてもいいことは？',
    options: [
      { text: 'アイスココアのフォーム', isCorrect: true },
      { text: 'マキアートのシナモン' },
      { text: 'スムージーのクリーム' },
      { text: '店内利用時のドリップマグ' },
    ],
    needReview: false,
  },
]

export const opsQuizDeck: MultipleType[] = opsQuizMaterial.map((el, i) => ({
  ...el,
  isLong: el.options.some((el) => el.text.length > 6),
  options: el.options.map((opt, k) => ({
    ...opt,
    id: Number(`${i}${k}${k}${i + k}`),
    isCorrect: opt.isCorrect ?? false,
  })),
}))
