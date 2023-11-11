import {
  ICategoriesApiResponse,
  INewsApiResponse,
  TypeParams,
} from '../interfaces'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

enum Status {
  Error = 'error',
  Ok = 'ok',
}

export const getNews = async (
  params?: TypeParams
): Promise<INewsApiResponse> => {
  const { page_number = 1, page_size = 10, category, keywords } = params || {}

  const url = `${BASE_URL}search?apiKey=${API_KEY}&page_number=${page_number}&page_size=${page_size}&category=${category}&keywords=${keywords}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    const data: INewsApiResponse = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return { news: [], page: 1, status: Status.Error }
  }
}

export const getCategories = async (): Promise<ICategoriesApiResponse> => {
  const url = `${BASE_URL}available/categories?apiKey=${API_KEY}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    const data: ICategoriesApiResponse = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return { categories: [], description: '', status: Status.Error }
  }
}

export const getLatestNews = async (): Promise<INewsApiResponse> => {
  const url = `${BASE_URL}latest-news?apiKey=${API_KEY}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    const data: INewsApiResponse = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return { news: [], page: 1, status: Status.Error }
  }
}
