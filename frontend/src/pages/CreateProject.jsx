import { Button } from "antd";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { useNavigate } from "react-router-dom";


export const CreateProject = () => {

    const { createProjectMuatation, isPending } = useCreateProject();

    const navigate = useNavigate();

    async function handleCreateProject() {
        console.log('Going to trigger the api');
        try {
            const response = await createProjectMuatation();
            console.log('Now we should redirect to the editor');
            navigate(`/project/${response.data}`)

        } catch (error) {
            console.log('Error creating project', error);

        }

    }
    return (
        <div>
            <Button
                type="primary"
                onClick={handleCreateProject}
            >
                Create Playground
            </Button>
            {isPending && <p>Creating Project...</p>}
        </div>
    )
}
