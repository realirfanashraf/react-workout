import React from "react";
import Listitem from "../list/listitem";
import Tools from "../Tools";
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";
 
const MyContext = React.createContext();

class HomePage extends React.Component {

  constructor(props){
    super(props)

      this.state = {
        data : [], 
        activeState :'all',
        message : '',
        showLabel : true
      }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('/data.json')
    .then((data)=>{
      return data.json();
    })
    .then((data)=>{
      this.setState({
        data :data
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
      if(prevState.message !== this.state.message){
        this.setState({
          message:'message'
          
        })
      }
    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  onListChange = (event)=>{
    console.log(event.target.value);
    const value = event.target.value;

    this.setState({
      activeState:value
    })
    
  }

  handleDelete = (item)=>{
    console.log('delete',item);

    const newList = this.state.data.filter((element)=>element.id !== item.id);
  
    this.setState({
      data :newList
    })
  }
  handleLabelClick = (arg)=>{
    this.setState({
      activeState : arg
    })
  }

  handleAddItem = (newItem) => {
    this.setState((prevState) => ({
      data: [...prevState.data, newItem],
    }));
  };

  handleRefresh = () =>{
    console.log('refresh');
    fetch('/data2.json')
    .then((data)=>{
      return data.json();
    })
    .then((data)=>{
      this.setState({
        data:data
      })
    })
  }

  handleShowLabel = (event)=>{
      this.setState({
        showLabel:event.target.checked
      })
  }

  render() {

      const  {
        data,activeState
      } = this.state;
    

    const newList = data.filter((items)=>{
      if(activeState === 'all'){
        return true;
      }
      if(activeState === 'active'){
        return items.isActive === true;
      }
      if(activeState === 'non-active'){
        return items.isActive === false;
      }
      return false;
    })


    return (
      <div>
        <div>
          <input checked={this.state.showLabel} onChange={this.handleShowLabel} type="checkbox"/> show label
        </div>
      <MyContext.Provider value={this.state.showLabel}>
      <Tools LabelValue ={activeState} onAction = {this.onListChange} onAdd={this.handleAddItem} onRefresh={this.handleRefresh}>
            <SimpleList onLabelClick={this.handleLabelClick} data = {newList} onAction={this.handleDelete}/>
            </Tools>
            <JustInfo showLabel={this.state.showLabel} />


      </MyContext.Provider>
      </div>
    );
  }
}


export default HomePage;
export {
  MyContext
}