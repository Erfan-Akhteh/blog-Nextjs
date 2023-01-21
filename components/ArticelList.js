import React from 'react'
import Articelitem from './Articelitem'
import styles from '../styles/Articel.module.css'
export default function ArticelList({articles}) {
  return (
 <div className={styles.grid}>
  {
    articles.map(article=>(
      <Articelitem key={article.id} article={article}/>
    ))
  }
 </div>
  )
}
