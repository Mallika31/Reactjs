import React from 'react';
import Prop2 from './prop2';   //  default import

class Prop1 extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                name:"Mallika",
                age:20,
                btnVal: "Submit"
            }
        }

    render() {
        return (
            <div>
                <h2>Props</h2>

                <Prop2 name="Mallika" age="22" btnVal="Submit" />
                <Prop2 name="Sravani" age="25" btnVal="Get" />

                <Prop2 name={this.state.name} age={this.state.age} btnVal={this.state.btnVal} />
            </div>
        )
    }

}

export default Prop1;