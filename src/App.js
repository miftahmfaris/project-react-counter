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
                <div style={{ marginTop: "150px" }}>
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
                                style={{ fontSize: "50px" }}
                            >
                                +
                            </span>
                        </div>
                        <div>
                            <span
                                onClick={this.subsCounter}
                                style={{ fontSize: "50px" }}
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
