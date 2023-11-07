const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async () => {
  const url = `${BASE_URL}latest-news?apiKey=${API_KEY}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
