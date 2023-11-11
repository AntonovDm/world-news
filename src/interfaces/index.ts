export interface INews {
  author: string
  category: TypeCategories[]
  description: string
  id: string
  image: string
  language: string
  published: string
  title: string
  url: string
}

export interface INewsApiResponse {
  news: INews[]
  page: number
  status: string
}

export interface ICategoriesApiResponse {
  categories: TypeCategories[]
  description: string
  status: string
}

export interface IFilters {
  page_number: number
  page_size: number
  category: TypeCategories | null
  keywords: string
}

export interface IPaginationProps {
  currentPage: number
  totalPages: number
  handleNextPage: () => void
  handlePrevPage: () => void
  handlePageClick: (page: number) => void
}

export type TypeSteleton = 'banner' | 'item'
export type TypeDirection = 'row' | 'column'

export type TypeParams = Partial<IFilters>

export type TypeCategories =
  | 'regional'
  | 'technology'
  | 'lifestyle'
  | 'business'
  | 'general'
  | 'programming'
  | 'science'
  | 'entertainment'
  | 'world'
  | 'sports'
  | 'finance'
  | 'academia'
  | 'politics'
  | 'health'
  | 'opinion'
  | 'food'
  | 'game'
  | 'fashion'
  | 'academic'
  | 'crap'
  | 'travel'
  | 'culture'
  | 'economy'
  | 'environment'
  | 'art'
  | 'music'
  | 'notsure'
  | 'CS'
  | 'education'
  | 'redundant'
  | 'television'
  | 'commodity'
  | 'movie'
  | 'entrepreneur'
  | 'review'
  | 'auto'
  | 'energy'
  | 'celebrity'
  | 'medical'
  | 'gadgets'
  | 'design'
  | 'EE'
  | 'security'
  | 'mobile'
  | 'estate'
  | 'funny'
