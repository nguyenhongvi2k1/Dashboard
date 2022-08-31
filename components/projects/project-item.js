import NextImage from "../image/image";
import {getStrapiMedia} from "../../lib/media";


function ProjectsItem(props){
    const {id, title, content, date, image} = props;

    return(
        <>
            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            >
                <h1>{title}</h1>

                <div className="uk-section">
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
                                    Description: {content}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <NextImage image={image.data[0].attributes}/>
            </div>
        </>
    )
}
export default ProjectsItem;