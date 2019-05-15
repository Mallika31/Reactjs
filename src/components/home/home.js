import React from 'react';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Mallika",
            age:23
        }

        this.changeData = this.changeData.bind(this);
    }

    changeData(){
        

        this.setState({name:"Mallikaaaa", age: 27 });

    }

    render(){
        return(
            <div>
                <h2>state & setState</h2>
                <p> {this.state.name} </p>
                <p> {this.state.age} </p>

                <button onClick={this.changeData}>Change</button>
            </div>
        )
    }
    
}

export default Home;