import {Fragment} from "react";
import Head from "next/head";
import styles from "./layout.module.css";


function Layout({children}) {
    return (
       <Fragment>
           {/*<Sidebar />*/}

           {/*<main>*/}
           {/*    {children}*/}
           {/*</main>*/}
           <Head>
               <title>Layouts</title>
           </Head>
           <main className={styles.main}>{children}</main>
       </Fragment>
    )
}

export default Layout;