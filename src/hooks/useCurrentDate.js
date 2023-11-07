import { useEffect, useState } from 'react'

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      const updateDate = new Date()
      setCurrentDate(updateDate)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentDate])

  return {
    currentDate,
  }
}

export { useCurrentDate }
