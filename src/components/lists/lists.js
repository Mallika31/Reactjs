import React from 'react';
//import axios from 'axios';

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ["mallika", "mallika1", "mallika2", "mallika3", "mallika4"],
            products: [{ name: "santoor", cost: 30 }, { name: "liril", cost: 40 }],

            soap:[]
        }
        this.getSoap = this.getSoap.bind(this);

    }

    getSoap(){
        
        fetch('http://localhost:4000/')
        .then(res => res.json())
        .then(res => {
           this.setState({
               soap:res
           })
            console.log(res);
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Lists</h2>
                <h4>Array binding</h4>
                <ol>
                    {this.state.users.map(function (u) {
                        return <li>{u}</li>
                    })}
                </ol>


                <h4>Object binding</h4>
                <ol>
                    {this.state.products.map((prod) => (<li>{prod.name} {prod.cost}</li>))}
                </ol>





                <h4>Api databinding</h4>
                <button onClick={this.getSoap}>Get</button>

                <ol>
                    {this.state.soap.map((s)=>(<li>{s}</li>))}
                </ol>

            </div>
        )
    }

}

export default Lists;