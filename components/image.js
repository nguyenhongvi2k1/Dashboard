import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
    console.log(image)
    const { url, alternativeText, width, height } = image.attributes

    // const loader = () => {
    //   return getStrapiMedia(image)
    // }

    return (
        <NextImage
            // loader={loader}
            layout="responsive"
            width={width || "100%"}
            height={height || "100%"}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    )
}

export default Image