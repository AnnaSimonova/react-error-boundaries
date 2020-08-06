import React, {Component} from 'react';
import classes from './Counter.module.css';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterPlus = () => {
        let counter = this.state.counter;
        let counterIncrement = counter + 1;
        this.setState({
            counter: counterIncrement
        });
    };

    render() {
        if (this.state.counter === 5) {
            throw new Error ('It crashed');
        }

        return (
            <h2 className={classes.Counter} onClick={this.counterPlus}>{this.state.counter}</h2>
        );
    }
}

export default Counter;
