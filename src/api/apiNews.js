const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
}) => {
  const url = `${BASE_URL}search?apiKey=${API_KEY}&page_number=${page_number}&page_size=${page_size}&category=${category}`

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

export const getCategories = async () => {
  const url = `${BASE_URL}available/categories?apiKey=${API_KEY}`

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
