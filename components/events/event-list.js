import EventItem from "./event-item";

function EventList(props) {
    const {items} = props;
    console.log(items)
    return (
            <ul>
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id = {event.id}
                    title={event.attributes.title}
                    content={event.attributes.content}
                    date={event.attributes.date}
                />
                )
            )}
            </ul>
    )
}

export default EventList;