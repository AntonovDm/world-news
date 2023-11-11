import NewsInfo from '../NewsInfo/NewsInfo'
import Image from '../Image/Image'
import { INews } from '../../interfaces'

import styles from './NewsBanner.module.scss'

interface Props {
  item: INews
}

const NewsBanner = ({ item }: Props) => {
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
