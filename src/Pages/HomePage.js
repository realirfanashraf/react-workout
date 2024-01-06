import React, { useState, useEffect, useMemo } from "react";
import Tools from "../Tools";
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";

const MyContext = React.createContext();

function HomePage() {
  const [data, setData] = useState([]);
  const [activeState, setActiveState] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("componentDidMount");
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    if (message !== "") {
      setMessage("message");
    }
  }, [message]);

  const onListChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setActiveState(value);
  };

  const handleDelete = (item) => {
    console.log("delete", item);
    const newList = data.filter((element) => element.id !== item.id);
    setData(newList);
  };

  const handleLabelClick = (arg) => {
       setActiveState(arg);
  };

  const handleAddItem = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
  };

  const handleRefresh = () => {
    console.log("refresh");
    fetch("/data2.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  };

  
  

  const newList = data.filter((items) => {
    if (activeState === "all") {
      return true;
    }
    if (activeState === "active") {
      return items.isActive === true;
    }
    if (activeState === "non-active") {
      return items.isActive === false;
    }
    return false;
  });
  

  const value = useMemo(()=>{
    return{
      key : 'value1',
      activeState : activeState
    }
  },[activeState])

  return (
    <div>
      
      
        <Tools
          LabelValue={activeState}
          onAction={onListChange}
          onAdd={handleAddItem}
          onRefresh={handleRefresh}
        >
          <SimpleList onLabelClick={handleLabelClick} data={newList} onAction={handleDelete} />
        </Tools>
        <JustInfo testValue={value}/>
      
    </div>
  );
}

export default HomePage;
export { MyContext };
