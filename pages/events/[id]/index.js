import {useRouter} from "next/router";

export default function index() {
    const router = useRouter();
    console.log(router)
    return <div>Event.. {router.query.id}</div>
}