import EventItem from "./event-item";

function EventList(props) {
    const {items} = props;
    return (
            <ul>
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id = {event.id}
                    title={event.title}
                    description={event.description}
                />
                )
            )}
            </ul>
    )
}

export default EventList;