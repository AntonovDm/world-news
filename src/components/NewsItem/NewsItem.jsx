import NewsInfo from '../NewsInfo/NewsInfo'
import styles from './NewsItem.module.scss'

const NewsItem = ({ item }) => {
  const imgStyle = item.image !== 'None' && `url(${item.image})`

  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: imgStyle }}
      ></div>
      <div className={styles.info}>
        <NewsInfo
          item={item}
          type="item"
        />
      </div>
    </li>
  )
}

export default NewsItem
