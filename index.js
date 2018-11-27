import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.left = null;
        this.state = {
            millisecondsLeft: this.props.finishTime*1000 - (new Date().getTime()),
            show: '',
        }
    }

    componentDidMount() {
        this.left = setInterval(() => {
            this.setState({ millisecondsLeft: this.props.finishTime*1000 - (new Date().getTime()) });
            this.millisecondsToString();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.left);
    }

    millisecondsToString = () => {
        seconds = this.state.millisecondsLeft / 1000 - (this.state.millisecondsLeft / 1000)%1;
        minutes = seconds / 60 - (seconds / 60)%1;
        hours = minutes / 60 - (minutes / 60)%1;
        days = hours / 24 - (hours / 24)%1;
        if (this.state.millisecondsLeft < 0) {
            this.setState({
                show: this.props.format.replace('{d}', 0).replace('{h}', 0).replace('{m}', this.addZeroIfNeeded(0)).replace('{s}', this.addZeroIfNeeded(0))
            });
        } else {
            this.setState({
                show: this.props.format.replace('{d}', days).replace('{h}', hours%24).replace('{m}', this.addZeroIfNeeded(minutes%60)).replace('{s}', this.addZeroIfNeeded(seconds%60))
            });
        }
    }

    addZeroIfNeeded = (num) => {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    render() {
        return (
            <Text style={this.props.textStyle}>{this.state.show}</Text>
        )
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