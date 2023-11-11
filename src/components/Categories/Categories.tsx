import { ForwardedRef, forwardRef } from 'react'
import { TypeCategories } from '../../interfaces'

import styles from './Categories.module.scss'

interface Props {
  categories: TypeCategories[]
  selectedCategory: TypeCategories | null
  setSelectedCategory: (category: TypeCategories | null) => void
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={styles.categories}
      >
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              key={category}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    )
  }
)

Categories.displayName = 'Categories'

export default Categories
