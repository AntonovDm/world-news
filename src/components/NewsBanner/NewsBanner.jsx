import NewsInfo from '../NewsInfo/NewsInfo'
import Image from '../Image/Image'

import styles from './NewsBanner.module.scss'

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <NewsInfo
        item={item}
        type="banner"
      />
    </div>
  )
}

export default NewsBanner
