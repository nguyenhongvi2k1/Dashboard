import RestaurantsItem from "./restaurants-item";

function RestaurantsList(props) {
    const {items} = props;
    // console.log("restaurants list: ",items)
    return (
        <ul>
            {items.map((restaurant) => (
                    <RestaurantsItem
                        key={restaurant.id}
                        id = {restaurant.id}
                        title={restaurant.attributes.title}
                        description={restaurant.attributes.description}
                        location = {restaurant.attributes.location}
                        date ={restaurant.attributes.date}
                        image = {restaurant.attributes.image}
                    />
                )
            )}
        </ul>
    )
}

export default RestaurantsList;