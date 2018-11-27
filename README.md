# react-native-countdown-text

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