import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    addCounter = () => {
        this.setState(prevState => ({
            counter: this.state.counter + 1
        }));
    };

    subsCounter = () => {
        this.state.counter <= 0
            ? alert("Counter cannot less than 0")
            : this.setState({
                  counter: this.state.counter - 1
              });
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div
                    style={{
                        margin: "100px 200px 0px 200px",
                        padding: "20px",
                        border: "black solid 3px"
                    }}
                >
                    <div style={{ marginBottom: "50px", fontSize: "50px" }}>
                        Counter {this.state.counter}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around"
                        }}
                    >
                        <div>
                            <span
                                onClick={this.addCounter}
                                style={{
                                    fontSize: "50px",
                                    border: "dotted black",
                                    padding: "0 30px"
                                }}
                            >
                                +
                            </span>
                        </div>
                        <div>
                            <span
                                onClick={this.subsCounter}
                                style={{
                                    fontSize: "50px",
                                    border: "dotted black",
                                    padding: "0 30px"
                                }}
                            >
                                -
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
