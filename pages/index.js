import Link from "next/link";
import Head from "next/head"
import {MainLayout} from "../components/mainLayout";


export default function index() {
    return (
        <>
            <MainLayout title='Next title Index'>
                <h1>Hello Next JS 1545 </h1>
                <p><Link href="/about"><a>about</a></Link></p>
                <p><Link href="/posts"><a>posts</a></Link></p>
            </MainLayout>
        </>
    )
}