import styles from './event-item.module.css'
import Button from '../ui/button'

function EventItem(props){
    const {id, title, description} = props;
    const exploreLink = `/${title}/${id}`;
    return(
        <>
            <div>
                <li className={styles.actions}>
                        <Button link={exploreLink}>
                            <span>{title}</span>
                        </Button>

                </li>
            </div>
        </>
    )
}
export default EventItem;