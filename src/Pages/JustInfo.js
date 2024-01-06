import React from "react";

function JustInfo(props) {
  console.log("render just info");
    const {
        showLabel,
        testValue
    } = props
    console.log(testValue.activeState,"from just info");
    console.log({showLabel});
  return(
    <div>
    JustInfo {showLabel} {testValue.activeState}
    </div>
  )  
}

export default React.memo(JustInfo)