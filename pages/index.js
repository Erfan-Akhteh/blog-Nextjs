
import ArticelList from '../components/ArticelList';


export default function Home({articles}) {
  console.log(articles);
  return (
    <>
{
  <ArticelList articles={articles}/>
} 
</>


  )
}


export const getStaticProps =async()=>{
const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`)
const articles=await response.json()

  return{
    props:{
      articles
    }
  }

}