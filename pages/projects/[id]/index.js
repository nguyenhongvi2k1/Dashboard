import {useRouter} from "next/router";

export default function index() {
    const router = useRouter();
    console.log(router)
    return <div>Project {router.query.id}</div>
}