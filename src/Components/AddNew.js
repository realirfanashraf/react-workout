import React from "react";

class AddNew extends React.Component{

    constructor(props){
        super(props);
        this.state={
            titleInput:'',
            decrInput: '',
            isActive: false
        }
    }

    handleChange = (event)=>{
         const value = event.target.value;

         this.setState({
            titleInput:value
         })
    }

    handleDescrChange = (event) => {
        const value = event.target.value;
        this.setState({
            decrInput: value
        });
    }

    handleIsActiveChange = (event) => {
        const value = event.target.checked;
        this.setState({
            isActive: value
        });
    }


    handleClick = ()=>{
        console.log(this.state);
        const {
            titleInput,
            decrInput,
            isActive
        } = this.state;

        if(titleInput) {
            this.props.onAdd({
                id: Math.floor(Math.random() * 100) + 10,
                title: titleInput,
                descr: decrInput,
                isActive: isActive
            });

            this.setState({
                titleInput: '',
                decrInput: '',
                isActive: false
            });
        }
    }

    render(){
        return(
            <div className="add-new">
            <input placeholder="Title" value={this.state.titleInput} onChange={this.handleChange}/>
            <input placeholder="Description" value={this.state.decrInput} onChange={this.handleDescrChange}/>
            <span>Is Active</span>
            <input type="checkbox" checked={this.state.isActive} onChange={this.handleIsActiveChange}/>
            <button onClick={this.handleClick}>Add Item</button>
        </div>
        )
    }
}

export default AddNew;