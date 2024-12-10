import React from 'react'
import './WorkspaceList.css'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
const WorkspaceList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map(
        (workspace)=>{
            return <WorkspaceItem 
                img={workspace.img} 
                title={workspace.title} 
                miembros={workspace.miembros} 
                id={workspace.id} 
                key={workspace.id}
            />
        }
    )
    return (
        <div>
            <h1>Tus espacios de trabajo</h1>
            <div>
                {workspacesListJSX}
            </div>
        </div>
    )
}

export default WorkspaceList