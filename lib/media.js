import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
    // console.log("media data: ",media)

    // console.log("media: ",media.data[0].attributes)

    const { url } = media

    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
    return imageUrl
}