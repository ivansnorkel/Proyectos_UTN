import React from "react"
import { useParams } from "react-router-dom"


const WorkspaceScreen = () => {
    const workspace_id = useParams().workspace_id //devuelve un obj con parametras de busq de la url en formato string
    return (
        <div>
            <h1>Workspace con id {workspace_id}</h1>
        </div>
    )
}

export default WorkspaceScreen