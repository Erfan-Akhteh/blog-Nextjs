import Link from 'next/link'
import React from 'react'
import {shorten} from '../helper/function'
import styles from '../styles/Articel.module.css'


export default function Articelitem({article}) {
  return (
    <div className={styles.card}>
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
     
    </Link>
    </div>
  )
}
