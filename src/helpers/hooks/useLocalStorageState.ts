import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface ILocalStorageState<T> {
  initialState: T
  key: string
}

export const useLocalStorageState = <T>({
  initialState,
  key,
}: ILocalStorageState<T>): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(function () {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
