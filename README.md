# react-native-countdown-text

[![npm version](https://badge.fury.io/js/react-native-countdown-text.svg)](https://badge.fury.io/js/react-native-countdown-text)

A React Native component that converts a timestamp of a future date to a readable countdown clock, based on a format.

## Installation

```
npm install --save react-native-countdown-text
```

## Usage

```js
import React, { Component } from 'react';
import { Countdown } from 'react-native-countdown-text';

export default class App extends Component {
    render() {
        return <Countdown finishTime={1543622400} />
    }
}
```

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
|**`format`**|`string`| `{d}:{h}:{m}:{s}` |The format that will be applied to the milliseconds|
|**`finishTime`**|`number`| **REQUIRED** |The future date timestamp|
|**`textStyle`**|`object`||The style that will be applied to the countdown text|

### `format` examples

* `'{d} days, {h} hours, {m} minutes, {s} seconds'`
* `'{h}:{m}:{s}'`
* `'{d} days, {h}:{m}:{s}'`
* `'{h}:{s}'`
