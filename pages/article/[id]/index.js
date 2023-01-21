import React from 'react'
import style from "../../../styles/Home.module.css"
 import Link from 'next/link'       
const index = ({articel}) => {
  return (
    <>
    <div className={style.main}>
       <p> {articel.title}</p>
        <p>{articel.body}</p>
    </div>
        <Link href='/' className={style.main}>Go Back</Link>
    </>
  )
}


// export const getServerSideProps= async (ctx)=>{
// const respose=await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
// const articel=await respose.json()
// return{
//     props:{
//         articel
//     }
// }

//}

export const getStaticProps=async ctx =>{
  const resopnse= await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
  const articel=await resopnse.json()
  return{
    props:{
      articel
    }
  }
}

export const getStaticPaths =async ()=>{
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const  articels=await response.json()

  const ids=articels.map(articel=>articel.id)

  const paths=ids.map(id=>({params:{id:id.toString()}}))

  return{
    paths,
    fallback:false
  }
}

export default index