import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DummyPage = ()=>{
  const val = useSelector((state)=>state.showLabel)
  const dispatch = useDispatch()
    const handleShowLabel = (event)=> {
        const checkboxValue = event.target.checked
          dispatch({
            type:'show-label',
            payload:checkboxValue
          })
    }
    return (
        <>
        <input
          checked={val}
          onChange={handleShowLabel}
          type="checkbox"
        />{" "}
        show label
        </>
    )
        
    
}
export default DummyPage;