import { INews } from '../../interfaces'

import NewsInfo from '../NewsInfo/NewsInfo'

import styles from './NewsItem.module.scss'

interface Props {
  item: INews
}

const NewsItem = ({ item }: Props) => {
  const imgStyle: string | undefined =
    item.image !== 'None' ? `url(${item.image})` : undefined

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
