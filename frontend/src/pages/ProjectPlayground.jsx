import { useParams } from "react-router-dom"
import { EditorComponents } from "../components/molecules/EditorComponents/EditorComponents";


export const ProjectPlayground = () => {
    const { projectId } = useParams();
    return (
        <>
            Project Id : {projectId};
            <EditorComponents />
        </>
    )
}

