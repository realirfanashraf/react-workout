import React from "react";
import AddNew from "./Components/AddNew";

class Tools extends React.Component {
    render() {
        const { children,onAction,LabelValue,onAdd,onRefresh } = this.props;
        const onlyChild = React.Children.only(children)
        const count = React.Children.count(onlyChild.props.children)
        return (
            <div>
                <select value={LabelValue} onChange={onAction} id="statusDropdown">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non-Active</option>
                </select>
                <AddNew onAdd={onAdd}/>
                <div className="refresh" onClick={onRefresh}>
                Refresh
            </div>
                {children}
                <div>
                   Total {count} courses
                </div>
            </div>
        );
    }
}  

export default Tools;
