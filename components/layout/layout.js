import {Fragment} from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import {Sidebar} from "./sidebar";
import {Info} from "./info"

function Layout({children}) {
    return (
       <div style={{display: "flex"}}>
           <Head>
               <title>Layouts</title>
           </Head>
           <Sidebar/>
           <div style={{flexDirection: 'column', flexGrow: "1"}}>
               <Info/>
               <main className={styles.main} >{children}</main>
           </div>

       </div>
    )
}

export default Layout;