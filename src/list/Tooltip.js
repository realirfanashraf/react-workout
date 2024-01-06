import React from "react";


function Tooltip(props,ref){
    const {
        showTooltip,
        message
    } = props


    if(!showTooltip){
        return null
    }

    return (
        <div>
             <label className="tooltip"  ref={ref}>
            {message}
        </label>
        </div>
    )
}



export default React.forwardRef(Tooltip)