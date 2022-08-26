import {useRouter} from "next/router"

function Index(props) {
    const router = useRouter();
    const {
        query: {id},
    } = router
    return <div>Users: </div>
}

export default Index;