import Head from "next/head";
import {useState, useEffect} from 'react'
import {MainLayout} from "../components/mainLayout";
import Link from "next/link";


function Posts({postsFetch}) {
    const [posts, setPosts] = useState(postsFetch)
    console.log(posts)
    useEffect(() => {
     //   alert('1')
        console.log(posts)

        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }

      //  alert('2')
        if (!postsFetch && !posts) {
         //   alert('3')
            load()
        }

        // при таком подходе не работает сервер сайт рендеренг
    })

    if (!posts){
        // alert('4')
        return (
            <MainLayout title='Post page titile' description='post desc'>
                <p>load.....</p>
            </MainLayout>
        )
    }
    return (
        <>
            <MainLayout title='Post page titile' description='post desc'>
                <h1>Posts JS 32423432</h1>
                <ul>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link href={`/post/${post.id}`}>{post.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </MainLayout>
        </>
    )
}

Posts.getInitialProps = async ({query, req}) => {
    if (req) {
        const response = await fetch('http://localhost:4200/posts')
        const postsFetch = await response.json()
        return {postsFetch}
    }
    return {postsFetch: null}
}

export default Posts