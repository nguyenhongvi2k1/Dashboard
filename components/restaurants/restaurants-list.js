import RestaurantsItem from "./restaurants-item";

function RestaurantsList(props) {
    const {items} = props;
    console.log(items)
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
                    />
                )
            )}
        </ul>
    )
}

export default RestaurantsList;