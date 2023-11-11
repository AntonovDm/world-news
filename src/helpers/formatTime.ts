import { Greeting } from '../utils/const'

export const formatTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const formattedTime: string = date.toLocaleTimeString('ru-RU', options)
  const hour: number = date.getHours()

  let greeting: string = Greeting.Morning

  if (hour >= 12 && hour < 18) {
    greeting = Greeting.Afternoon
  } else if (hour >= 18 || hour < 5) {
    greeting = Greeting.Evening
  }

  return {
    time: formattedTime,
    greeting,
  }
}
