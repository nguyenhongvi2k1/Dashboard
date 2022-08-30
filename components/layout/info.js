import styles from "./info.module.css";
import {Fragment} from "react";
import Head from "next/head";


export const Info = ({}) => {


    return (
        <Fragment>
            <header className={styles.info}>
                <p className={styles.text_info}>Info</p>
            </header>
            {/*<header style={{color: "black"}}>*/}
            {/*    <ul className={styles.dropdownContent}>*/}
            {/*        xin chao*/}
            {/*        /!*<li><a className={styles.indigo_text} href="#">Profile</a></li>*!/*/}
            {/*        /!*<li><a className={styles.indigo_text} href="#">Logout</a></li>*!/*/}
            {/*    </ul>*/}

            {/*    /!*<nav className={styles.indigo} role="navigation">*!/*/}
            {/*    /!*    <div className={styles.nav_wrapper}>*!/*/}
            {/*    /!*        <ul className={styles.dows}>*!/*/}
            {/*    /!*            <li>*!/*/}
            {/*    /!*                <a className='right dropdown-button' href='' data-activates='user_dropdown'><i*!/*/}
            {/*    /!*                    className=' material-icons'>account_circle</i></a>*!/*/}
            {/*    /!*            </li>*!/*/}
            {/*    /!*        </ul>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*</nav>*!/*/}

            {/*    /!*<nav>*!/*/}
            {/*    /!*    <div className={styles.indigo}>*!/*/}
            {/*    /!*        <a style={{marginLeft: "20px"}} className={styles.breadcrumb} href="#!">Admin</a>*!/*/}
            {/*    /!*        <a className={styles.breadcrumb} href="#"></a>*!/*/}

            {/*    /!*    </div>*!/*/}
            {/*    /!*</nav>*!/*/}
            {/*</header>*/}

        </Fragment>
    )

}