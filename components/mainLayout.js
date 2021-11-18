import Link from "next/link";
import Head from "next/head";

export function MainLayout({children,title ="Test Next",description='some desc'}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            <nav>
                <Link href={"/"}><a>home</a></Link>
                <Link href={"/about"}><a>about</a></Link>
                <Link href={"/posts"}><a>posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx global>{`
                nav{
                    position :fixed;
                    height : 60px;
                    left : 0px;
                    right : 0px;
                    top : 0;
                    background:darkblue;
                    display : flex ;
                    justify-content : space-around;
                    align-items : center;
                }
                nav a {
                    color:#fff;
                    text-decoration : none;
                }
                
                main {
                    margin-top : 60px;
                    padding : 1rem 
                }
            `}</style>
        </>
    )
}