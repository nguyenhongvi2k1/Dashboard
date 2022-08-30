import {Fragment} from "react";
import Head from "next/head";
import RestaurantsList from "../../components/restaurants/restaurants-list";
import {fetchAPI} from "../../lib/api";

function Index(props) {
    console.log(props)
    return (
        <Fragment>
            <Head>
                <title>restaurants</title>
            </Head>
            <RestaurantsList items = {props.restaurants}/>
        </Fragment>
    )
}
export async function getStaticProps(params){
    const restaurants = await fetchAPI("/restaurant", {
        filters: {
            id: params.id,
        },
        populate: "*",
    })
    return{
        props: { restaurants: restaurants.data},
        revalidate: 1,
    }
}



export default Index;