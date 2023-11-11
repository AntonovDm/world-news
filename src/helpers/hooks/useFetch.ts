import { useEffect, useState } from 'react'

interface IFetchFunction<T, P> {
  (params?: P): Promise<T>
}

interface IUseFetchResult<T> {
  data: T | null | undefined
  isLoading: boolean
  error: Error | null
}

export const useFetch = <T, P>(
  fetchFunction: IFetchFunction<T, P>,
  params?: P
): IUseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const stringParams = params ? new URLSearchParams(params).toString() : ''

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const result = await fetchFunction(params)
        setData(result)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [fetchFunction, stringParams])

  return { data, isLoading, error }
}
