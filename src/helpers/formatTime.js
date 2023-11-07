export const formatTime = (date) => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const formattedTime = date.toLocaleTimeString('ru-RU', options)
  const hour = date.getHours()

  let greeting = 'Good morning!'

  if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon!'
  } else if (hour >= 18 || hour < 5) {
    greeting = 'Good evening!'
  }

  return {
    time: formattedTime,
    greeting,
  }
}
