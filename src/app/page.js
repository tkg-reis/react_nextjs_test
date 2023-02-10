import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// import React from 'react';
import Layout from '@/components/layout'
import Hero from '@/components/hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // return外で記述。
  // const subtilte = 'アウトプットしていくサイト'

  return (
    // <div className='hero'>
    //   <h1 className={styles.ttl}>CUBE</h1>
    //   {/* スタイルの直書きは{{}}を使用する。 */}
    //   <h2 style={{color: 'red', fontSize: '48px'}}>Hosino Gen</h2>
    //    閉じタグは必須imgも同様
    //   <hr/>
    //   <p>{subtilte}</p>
    //   <p className={styles.description}>アウトプットしていく</p>
    // </div>
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  )  
}
// 関数宣言は大文字から始める必要がある。
// 子コンポーネント
// function EachPost(props) {
//   return(
//     <article>
//       <a href={props.url}>
//         <h3>{props.title}</h3>
//       </a>
//     </article>
//   )
// }

// または↓
// function EachPost({ title , url }) {
//   return(
//     <article>
//       <a href={url}>
//         <h3>{title}</h3>
//       </a>
//     </article>
//   )
// }


// （子）コンポーネントの子要素はカラーの赤が適用される
function Decoration(props) {
  return(
    <div style={{ color: 'red' }}>
      {props.children}
    </div>
  )
}
// または
// function Decoration({ children }) {
//   return(
//     <div style={{ color: 'red' }}>
//       {children}
//     </div>
//   )
// }



// 親コンポーネント
// export default function Posts() {
//   const props1 = { title: '記事のタイトル1', url: 'post1.html' }
//   const props2 = { title: '記事のタイトル2', url: 'post2.html' }
//   return(

    // <section>
    //   <h2>おすすめ記事</h2>
    //   {/* ↓は何度でも使い回せる */}
    //   <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
    //   <EachPost title="音楽が呼び起こす美味しい物の記憶" url="/blog/music" />
    // </section>

//     <section>
//       <h2>おすすめ記事</h2>
//        {/* ↓は何度でも使い回せる */}
//       <EachPost {...props1} />
//       <EachPost {...props2} />
//     </section>
//   )
// }
