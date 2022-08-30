import styles from "./sidebar.module.css";
import Link from "next/link";
import {useState} from "react";
import {Fragment} from "react";
import Head from "next/head";


export const Sidebar = ({}) => {
    const [open, setOpen] = useState(true)

    return (
        <Fragment>
            <div className={styles.sidebar}>
                <div className={styles.sidebar} style={{ width: open ? "270px" : "50px"}}>
                    <div className={styles.section}>
                        <h1 className={styles.logo} style={{ display: open ? "block" : "none" }}>
                            Internship
                        </h1>
                        <div
                            className={styles.bars}
                            style={{ marginLeft: open ? "20px" : "-3px" }}
                        >
                        </div>
                    </div>

                    <ul className={styles.content}>
                        <li className={styles.text}>
                            <Link href='/projects'><a>Project</a></Link>
                        </li>
                        <li>
                            <Link href='/events'><a>Event</a></Link>
                        </li>
                        <li>
                            <Link href='/restaurant'>Restaurants</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
        )

}