import Link from "next/link";
import Router from "next/router";
import classes from '../styles/error.module.scss'

export default function ErrorPage(){

    return (
        <>
        <h1 className={classes.error}>My Error page</h1>
            <p><Link href='/'>go back</Link></p>
        </>
    )
}