import { useRef } from 'react'
import { opsQuizDeck } from '../../content/opsQuizDeck'
import { useShuffle } from '../../hooks/useShuffle'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { QuizLayout } from './Quiz.layout'

export const OpsQuiz = () => {
  const quizContent = useShuffle(opsQuizDeck)
  const containerRef = useRef<HTMLDivElement>(null)
  const quizRefs = useRef<HTMLDivElement[] | null[]>([])

  const { contextSafe } = useGSAP(
    () => {
      if (!quizRefs.current) return

      gsap.set(quizRefs.current, {
        position: 'absolute',
        autoAlpha: 0,
        yPercent: 25,
      })

      gsap.set(quizRefs.current[0], {
        autoAlpha: 1,
        yPercent: 0,
      })
    },
    { scope: containerRef }
  )

  const nextQuestion = contextSafe((i: number, k: number) => {
    const currentQuestion = quizRefs.current[i]
    const nextQuestion = quizRefs.current[k]

    gsap.to(currentQuestion, {
      autoAlpha: 0,
      yPercent: -25,
    })

    if (!nextQuestion) return

    gsap.to(nextQuestion, {
      autoAlpha: 1,
      yPercent: 0,
    })
  })

  return (
    <div
      className="relative flex h-dvh flex-col gap-10 overflow-hidden"
      ref={containerRef}
    >
      {quizContent.map((content, i) => (
        <QuizLayout
          quizData={content}
          number={i + 1}
          onAnswered={() => {
            const nextNum: number = i + 1
            nextQuestion(i, nextNum)
          }}
          ref={(el) => {
            quizRefs.current[i] = el
          }}
        />
      ))}
    </div>
  )
}

/*-------- original code -------*/

// import { useMemo, useRef, useState } from 'react'
// import { opsQuizDeck } from '../../content/opsQuizDeck'
// import { useShuffle } from '../../hooks/useShuffle'
// import type { MultipleType } from '../../type/quizType'

// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'

// // create a set of color that paint the answer options
// type ColorSetType = Record<string, string>
// const COLORSET: ColorSetType = {
//   base: '#bfdbfe', // tailwind blue-200
//   correct: '#22c55e', // green-500
//   incorrect: '#ef4444', // red-500
// }

// export const OpsQuiz = () => {
//   const quizContent = useShuffle(opsQuizDeck)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const quizRefs = useRef<HTMLDivElement[]>([])
//   const optionsRefs = useRef<HTMLButtonElement[][]>([])
//   // <Record<number, number>>({}) creates an object where the first value(i) is the key and the second value(k) is the value.
//   // in this case, the key is the question number and the value is the selected answer
//   const [answers, setAnswers] = useState<Record<number, number>>({})
//   const [currentQuizNum, setCurrentQuizNum] = useState<number>(0)

//   // const quizzes = useMemo(
//   //   () =>
//   //     quizContent.map((q) => ({
//   //       ...q,
//   //       options: shuffleArray(q.options),
//   //     })),
//   //   [quizContent]
//   // )

//   // function to that gets the background color depending on the answer state
//   const getBgColor = (key: number, value: number, isCorrect: boolean) => {
//     const base = 'bg-blue-200'
//     const isSelected = answers[key] === value

//     if (answers[key] === undefined) return base
//     if (isCorrect) return 'bg-green-500'
//     if (isSelected) return 'bg-red-500'
//     return base
//   }

//   const { contextSafe } = useGSAP(
//     () => {
//       gsap.set(containerRef.current, {
//         height: '100dvh',
//         width: '100vw',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       })
//       gsap.set(quizRefs.current, {
//         position: 'absolute',
//         autoAlpha: 0,
//       })
//       gsap.set(quizRefs.current[0], { autoAlpha: 1 })
//       gsap.set(optionsRefs.current.flat().filter(Boolean), {
//         backgroundColor: COLORSET.base,
//       })
//     },
//     { scope: containerRef }
//   )

//   const setNextQuestion = contextSafe((from: number, to: number) => {
//     if (!quizRefs.current[to]) return // last questionf, hence nothing left to set
//     const tl = gsap.timeline({
//       onComplete: () => setCurrentQuizNum(to),
//     })
//     tl.to(quizRefs.current[from], { autoAlpha: 0, duration: 0.6 })
//     tl.to(quizRefs.current[to], { autoAlpha: 1, duration: 0.6 })
//   })

//   const handleAnswer = (i: number, k: number) => {
//     if (answers[i] !== undefined) return
//     setAnswers((prev) => ({ ...prev, [i]: k }))

//     const optionEls = optionsRefs.current[i]
//     const options = quizContent[i].options

//     options.forEach((option, i) => {
//       const el = optionEls[i]
//       if (!el) return

//       const isSelected = i === k
//       const isCorrect = option.isCorrect

//       if (isCorrect) {
//         gsap.to(el, {
//           backgroundColor: COLORSET.correct,
//           duration: 0.4,
//           ease: 'power2.out',
//           ...(isSelected && { scale: 1.04, yoyo: true, repeat: 1 }),
//         })
//       } else if (isSelected) {
//         gsap.to(el, {
//           backgroundColor: COLORSET.incorrect,
//           duration: 0.4,
//           ease: 'Power2.out',
//           x: -6,
//           yoyo: true,
//           repeat: 3,
//         })
//       }
//     })

//     // swap the question with a new one
//     gsap.delayedCall(0.6, () => setNextQuestion(i, i + 1))
//   }

//   const generateQuiz = (el: MultipleType, i: number) => {
//     // const options = useShuffle(el.options)

//     return (
//       <div
//         key={el.question}
//         className="flex flex-col items-center gap-4"
//         ref={(el) => {
//           if (!el) return
//           quizRefs.current[i] = el
//         }}
//       >
//         <h2 className="px-4 text-2xl font-bold">
//           {i + 1}. {el.question}
//         </h2>

//         <div
//           className={`grid w-[80%] gap-4 px-10 ${el.isLong ? 'grid-cols-1' : 'grid-cols-2'}`}
//         >
//           {el.options.map((option, k) => {
//             const bgColor = getBgColor(i, k, option.isCorrect)

//             return (
//               <button
//                 // this key is not stable with variable values
//                 key={Number(`${i}${k}`)}
//                 ref={(el) => {
//                   if (!el) return
//                   if (!optionsRefs.current[i]) optionsRefs.current[i] = []
//                   if (i === 12)
//                     console.log(
//                       '[OpsQuiz] this is how it looks inside the el inside options: ',
//                       el,
//                       'and the optionsRef.current[i][k]: ',
//                       optionsRefs.current[i][k]
//                     )
//                   optionsRefs.current[i][k] = el
//                 }}
//                 onClick={() => handleAnswer(i, k)}
//                 // style={{
//                 //   background:
//                 //     'linear-gradient(white, var(--white)) padding-box, linear-gradient(-45deg, #12cf1b, #851c1b, #12cf1b) border-box',
//                 //   border: 'transparent solid 2px',
//                 // }}
//                 className={`${bgColor} w-full rounded-3xl px-4 py-2 text-left text-xl`}
//               >
//                 <div>{option.text}</div>
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col gap-10" ref={containerRef}>
//       {quizContent.map((el, i) => generateQuiz(el, i))}
//     </div>
//   )
// }
