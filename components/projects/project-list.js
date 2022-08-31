import ProjectsItem from "./project-item";

function ProjectList(props) {
    const {items} = props;

    return (
        <ul>
            {items.map((project) => (
                    <ProjectsItem
                        key={project.id}
                        id = {project.id}
                        title={project.attributes.title}
                        content={project.attributes.content}
                        date = {project.attributes.date}
                        image = {project.attributes.image}

                    />
                )
            )}
        </ul>
    )
}

export default ProjectList;