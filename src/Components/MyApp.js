import React, { Component } from "react";
import Header from "./HeaderA";
import HomePage from "../Pages/HomePage";
import DummyPage from "../Pages/DummyPage";
import Usage from "../Pages/Usage";
import { Provider } from "react-redux";
import store from "../redux/store";

class MyApp extends Component{

    constructor(props){
        super(props)
        this.state ={
            currentSelected : 'Home'
        }
    }

    handleMenuSelect=(value)=>{
        console.log(value);
        this.setState({
            currentSelected:value
        })
    }

    getPage(){
        const {currentSelected} = this.state
        switch (currentSelected) {
            case 'Home':
                return <HomePage/>
                case 'Usage':
                return <Usage key={"Usage"} name = 'Usage'/>                
                case 'Profile':
                return <DummyPage key={"Profile"} name = 'Profile'/>
                default:
                break;
        }
    }
    render(){
        return(
            <Provider store={store}>
            <div className='app'>
            <Header onMenuSelect ={this.handleMenuSelect}/>
            <div className='app-body'>
              {this.getPage()}
            </div>
            <div className='app-footer'>
              Copyright Demo@2023
            </div>
          </div>      
          </Provider>  
        )
    }
}

export default MyApp;