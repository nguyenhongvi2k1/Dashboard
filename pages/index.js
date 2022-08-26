import EventList from "../components/events/event-list";
import styles from '../styles/Home.module.css'
import {getFeaturedEvents} from '../dummy-data.js'
import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div className={styles.main}>
            <div>
                <Head>
                    <title>Home</title>
                    <meta name='description' content="Home"/>
                </Head>
                <Layout>
                    <EventList items={featuredEvents}/>
                </Layout>

            </div>
        </div>
    )
}
