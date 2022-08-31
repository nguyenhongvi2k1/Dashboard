import {Fragment} from "react";
import styles from './restaurants-item.module.css'
import NextImage from "../image/image";
import Image from "next/image";
import {getStrapiMedia} from "../../lib/media";

export default function RestaurantsList(props){
    // console.log("restaurants items: ",props)
    const {id, title, date, description, location, image} = props;
    // console.log("iamge: ",image.data[0].attributes)
    return(
        <Fragment>
            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            >
                <h1>{title}</h1>

                <div className={styles.uk_section}>
                    <div className="uk-container uk-container-small">
                        <hr className="uk-divider-small" />
                        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                            <div className="uk-width-expand">
                                <p className="uk-margin-remove-bottom">
                                    Date: {date}
                                </p>

                            </div>
                            <div className="uk-width-expand">
                                <p className="uk-margin-remove-bottom">
                                    Location: {location}
                                </p>

                            </div>
                            <div className="uk-width-expand">
                                <p className="uk-margin-remove-bottom">
                                    Description: {description}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <NextImage image={image.data[0].attributes}/>
                </div>
            </div>
        </Fragment>
    )
}
