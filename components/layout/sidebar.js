import styles from "./sidebar.module.css";
import Link from "next/link";
import {useState} from "react";

export const Sidebar = ({}) => {
    const [open, setOpen] = useState(true)

    return <div className={styles.sidebar}>
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
                <li>
                    <Link href='/users'><a>User</a></Link>
                </li>

                <li>
                    <Link href='/projects'><a>Project</a></Link>
                </li>

                <li>
                    <Link href='/events'><a>Event</a></Link>
                </li>
            </ul>
        </div>
    </div>
}