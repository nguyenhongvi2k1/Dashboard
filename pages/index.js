import EventList from "../components/events/event-list";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Layout from "../components/layout/layout";
import {fetchAPI} from "../lib/api";

const Home = ({users,projects,events}) => {

    return (
        <div className={styles.main}>
            <div>
                <Head>
                    <title>Home</title>
                    <meta name='description' content="Home"/>
                </Head>
                <Layout>
                    <EventList items={events}/>
                </Layout>

            </div>
        </div>
    )
}

export async function getStaticProps(){
    const [restaurants, projects, events] = await Promise.all([
        fetchAPI("/restaurant", {populate: "*"}),
        fetchAPI("/projects", {populate: "*"}),
        fetchAPI("/events", {populate: "*"})
    ])
    return {
        props: {
            users: restaurants.data,
            projects: projects.data,
            events: events.data,
        },
        revalidate: 1,
    }
}

export default Home;