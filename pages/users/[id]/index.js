import {useRouter} from "next/router";

export default function Index() {
    const router = useRouter();
    console.log(router)
    return <div>Users {router.query.id}</div>
}