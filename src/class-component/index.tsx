import React, {Component} from 'react';

export class ClassComponent extends Component<any, any> {
    state = {
        "name": "ClassComponent",
        "background": "gray",
    };

    changeState = () => {
        this.setState({
            "background": this.state.background === "white" ? "gray" : "white",
        })
    }

    render() {
        const {name} = this.state;
        const {background} = this.state;

        const ButtonStyle = {
            width: "100px",
            height: "40px",
        }

        return (
            <div style={{backgroundColor: background}}>
                <div>It's {name}</div>
                <br/>
                <button style={ButtonStyle} onClick={this.changeState}>Push me</button>
            </div>
        )
    }
}