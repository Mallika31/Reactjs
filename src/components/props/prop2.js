import React from 'react';
import { Aa,Bb} from './prop3';  // named import 

class Prop2 extends React.Component {


    render() {
        return (
            <div>

                <p> My name : {this.props.name}</p>
                <p> My age : {this.props.age} </p>
                <button> {this.props.btnVal} </button>
                <br />
                <Aa />
                <Bb />
            </div>
        )
    }

}

export default Prop2;

//  degfault export   1 per js file