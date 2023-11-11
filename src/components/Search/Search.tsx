import styles from './Search.module.scss'

interface Props {
  keywords: string
  setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
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
