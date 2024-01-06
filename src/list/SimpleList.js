import React from "react";
import Listitem from "./listitem";

function SimpleList(props) {
    const { data,onAction,onLabelClick } = props

    return(
        <div className='app-list'>
        {
          data.map((obj)=>{
            return <Listitem key={obj.title} 
            title={obj.title} 
            course={obj.course} 
            isActive={obj.isActive} 
            onLabelClick ={onLabelClick}
            onDelete = {()=>{
              onAction(obj)
            }}
            />
          })
        }
      </div>
    )
}

export default SimpleList;