import Head from "next/head";
import {fetchAPI} from "../../lib/api";
import {getStrapiMedia} from "../../lib/media";
import NextImage from "../../components/image";
import Image from "next/image";
import EventList from "../../components/events/event-list";
import {Fragment} from "react";



function index(event) {
    // console.log(event.event)
    // console.log(event.event.attributes.image)
    // const imageUrl = getStrapiMedia(event.event.attributes.image)
    return(
        <Fragment>
            <Head>
                <title>Events</title>
            </Head>
            <EventList items = {event.event}/>

        </Fragment>

    )
}

// export async function getStaticPaths(){
//     const event = await fetchAPI("/events",  { fields: ["id"] })
//     return{
//         paths: event.data.map((event) => {
//             params: {
//                 id: event.attributes.id
//             }
//         })
//     }
// }

export async function getStaticProps(params){
    const event = await fetchAPI("/events", {
        filters: {
            id: params.id,
        },
        populate: "*",
    })
    return{
        props: { event: event.data},
        revalidate: 1,
    }
}

export default index;