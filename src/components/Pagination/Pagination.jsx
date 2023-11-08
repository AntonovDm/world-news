import styles from './Pagination.module.scss'

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => handlePageClick(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
