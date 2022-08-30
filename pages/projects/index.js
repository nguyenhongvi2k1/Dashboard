import Head from "next/head";
import {Fragment} from "react";
import ProjectList from "../../components/projects/project-list";
import {fetchAPI} from "../../lib/api";

export default function index(project) {
    return (
        <Fragment>
            <Head>
                <title>Projects</title>
            </Head>
           <ProjectList items = {project.projects}/>
        </Fragment>
    )
}

export async function getStaticProps(params){
    const projects = await fetchAPI("/projects", {
        filters: {
            id: params.id,
        },
        populate: "*",
    })
    return{
        props: { projects: projects.data},
        revalidate: 1,
    }
}