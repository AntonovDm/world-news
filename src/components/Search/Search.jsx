import styles from './Search.module.scss'

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search"
      />
    </div>
  )
}

export default Search
