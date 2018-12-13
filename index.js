import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.left = null;
        this.state = {
            millisecondsLeft: this.props.finishTime*1000 - (new Date().getTime()),  // the time that is left in milliseconds
            show: '',   // the time to show (it's a string, not a number)
        }
    }

    componentDidMount() {
        this.left = setInterval(() => {
            this.setState({ millisecondsLeft: this.props.finishTime*1000 - (new Date().getTime()) });   // change the number of the milliseconds
            this.millisecondsToString();    // calls the method that converts the milliseconds into a readable string
        }, 1000)    // this methods is being invocated every second (1000 milliseconds)
    }

    componentWillUnmount() {
        clearInterval(this.left);
    }

    millisecondsToString = () => {  // the methods that converts the milliseconds remaining to a readable string
        seconds = this.state.millisecondsLeft / 1000 - (this.state.millisecondsLeft / 1000)%1;  // seconds
        minutes = seconds / 60 - (seconds / 60)%1;  // minutes
        hours = minutes / 60 - (minutes / 60)%1;    // hours
        days = hours / 24 - (hours / 24)%1; // days
        if (this.state.millisecondsLeft < 0) {  // if the countdown is finished
            this.setState({
                show: this.props.format.replace('{d}', 0).replace('{h}', 0).replace('{m}', this.addZeroIfNeeded(0)).replace('{s}', this.addZeroIfNeeded(0))
            });
        } else {
            this.setState({
                show: this.props.format.replace('{d}', days).replace('{h}', hours%24).replace('{m}', this.addZeroIfNeeded(minutes%60)).replace('{s}', this.addZeroIfNeeded(seconds%60))
            });
        }
    }

    addZeroIfNeeded = (num) => {    // if the number of hours, minutes or seconds (in the string) is less than 10
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    render() {
        return (
            <Text style={this.props.textStyle}>{this.state.show}</Text>
        );
    }
}

Countdown.defaultProps = {
    format: '{d}:{h}:{m}:{s}'
}

Countdown.propTypes = {
    finishTime: PropTypes.number.isRequired,
    format: PropTypes.string,
    textStyle: Text.propTypes.style,
}

export { Countdown };
