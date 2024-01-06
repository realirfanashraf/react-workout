import React from "react";
import Label from "./label";
import './listitem.css';
import { useTooltip } from "../hooks/ourHooks";
import Tooltip from "./Tooltip";


function Listitem(props){
 const { title, course, isActive,onDelete,onLabelClick} = props
 const [showTooltip,setShowTooltip,refObj,labelRef] = useTooltip();
    return (
        <div className ="list-item">
            <hr />
            <div className="list-title">
                <h4>{title}</h4>
                <label onClick={onDelete} 
                ref={labelRef}
                onMouseEnter={()=>{
                    setShowTooltip(true)
                }}
                onMouseLeave={()=>{
                    setShowTooltip(false)
                }}>
                    Delete</label>
            </div>
            <div className="list-descr">
               {course}
            </div>
            
            <div className="list-label">
                <Label isActive = {isActive} onAction = {onLabelClick}/>
                <Tooltip ref={refObj} showTooltip={showTooltip} message="Delete this"/>
            </div>
            <hr />
        </div>
    )
}

export default Listitem;