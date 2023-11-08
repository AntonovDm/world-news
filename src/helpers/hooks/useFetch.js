import { useEffect, useState } from 'react'

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null)

  const stringParams = params ? new URLSearchParams(params).toString() : ''

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true)
        const result = await fetchFunction(params)
        setData(result)
      } catch (error) {
        setIsError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [fetchFunction, stringParams])

  return { data, isLoading, isError }
}
