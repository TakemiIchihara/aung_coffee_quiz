import { useMemo } from "react"

// <T,> defines that this array could be any types (the comma to tell typescript that its not a JSX el)
export const useShuffle = <T,>(array: T[]) => {

  return useMemo(() => {
    const newArr = [...array]
    // Fisher–Yates algorythm to shuffle
    for(let i = newArr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
  }, [array])
}