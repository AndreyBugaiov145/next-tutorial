import Router, {useRouter} from 'next/router'
import {MainLayout} from "../../components/mainLayout";
import Posts from "../posts";
import {useState, useEffect} from 'react'

function Post({postFetch}) {
    const router = useRouter();
    const [post, setPost] = useState(postFetch)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const json = await response.json()
            setPost(json)
        }

        if (!postFetch && !post) {
            load()
        }
    })
    if (!post) {
        // alert('4')
        return (
            <MainLayout title='Post page titile' description='post desc'>
                <p>load.....</p>
            </MainLayout>
        )
    }
    return (
        <MainLayout>
            <h4>Post {router.query.id}</h4>
            <hr/>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </MainLayout>
    )
}


Post.getInitialProps = async ({query, req}) => {
    let postFetch = null
    if (req) {
        const id = query.id
        const response = await fetch(`http://localhost:4200/posts/${id}`)
        postFetch = await response.json()
    }
    return {postFetch}
}

export default Post

// export async function getServerSideProps({query, req}) {
//
//         const id = query.id
//         const response = await fetch(`http://localhost:4200/posts/${id}`)
//     const postFetch = await response.json()
//
//     return {
//         props: {postFetch}, // will be passed to the page component as props
//     }
// }
