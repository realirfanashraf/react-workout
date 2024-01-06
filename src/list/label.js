import React from "react";
import './label.css';
import { useSelector } from "react-redux";
import Tooltip from "./Tooltip";
import { useTooltip } from "../hooks/ourHooks";

function Label(props) {


  const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

  const val = useSelector((state)=>state.showLabel)

  const style = props.isActive ? { background: 'green' } : { background: 'black' };
  const text = props.isActive ? 'Active': 'Non Active';
  if (val===false){
    return null
  }

  return (
    <div>
      <span
        ref={labelRef}
        onClick={() => {
          props.onAction(props.isActive ? 'active' : 'non-active');
        }}
        className="list-label-item"
        style={style}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {props.isActive ? 'Active' : 'Non-Active'}
      </span>

      <Tooltip ref={refObj} showTooltip={showTooltip} message={`This is ${text}`} />
    </div>
  );
}

export default Label;
