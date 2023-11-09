import withSkeleton from '../../helpers/HOCs/withSkeleton'

import NewsBanner from '../NewsBanner/NewsBanner'

import styles from './BannersList.module.scss'

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return (
          <NewsBanner
            key={banner.id}
            item={banner}
          />
        )
      })}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton
