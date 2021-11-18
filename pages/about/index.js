import React,{useEffect} from 'react'
import Router from 'next/router'
import {MainLayout} from "../../components/mainLayout";


export default function About({about = {}}) {

    const linkClickHandler = () => {
        Router.push('/')
    }
    console.log('lcal.storege',localStorage.getItem("idFinanceToken"))
    useEffect(()=>{
        console.log('asdasda')

    })

    return (
        <React.Fragment>
            <MainLayout>
                <h1>About JS</h1>
                <h1>{about.title}</h1>
                <button onClick={linkClickHandler}>Go back home</button>
                <button onClick={() => {
                    Router.push('/posts')
                }}>Go back posts
                </button>
            </MainLayout>
        </React.Fragment>
    )
}

About.getInitialProps = async ()=>{
    // console.log(process.env.API_URL)
    // const response = await fetch(`http://localhost:4200/about`)
    // const about = await response.json()
    let about = {}
    return {about}
}