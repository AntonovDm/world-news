import { useCallback, useEffect, useState } from 'react'
import { getCategories, getNews } from '../../api/apiNews'
import { pageSize, totalPages } from '../../utils/const'
import { useDebounce } from '../../helpers/hooks/useDebounce'

import Pagination from '../../components/Pagination/Pagination'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import Categories from '../../components/Categories/Categories'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Search from '../../components/Search/Search'

import styles from './Main.module.scss'

const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState([])
  const [keywords, setKeywords] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const debouncedKeywords = useDebounce(keywords, 1500)

  const fetchNews = useCallback(
    async (currentPage) => {
      try {
        setIsLoading(true)
        const response = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategory === 'All' ? null : selectedCategory,
          keywords: debouncedKeywords,
        })
        setNews(response.news)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    [selectedCategory, debouncedKeywords]
  )

  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      setCategories(['All', ...response.categories])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory, fetchNews, debouncedKeywords])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search
        keywords={keywords}
        setKeywords={setKeywords}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton
          type={'banner'}
          count={1}
        />
      )}
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton
          type={'item'}
          count={10}
        />
      )}

      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </main>
  )
}

export default Main
