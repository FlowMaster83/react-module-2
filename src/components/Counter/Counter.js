import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';

// - регистрация создания колбэка
// - в колбеке высов сетстейта:
    // или с объектом, если нужно перезаписать значение не от предыдущего состояния
    // или с функцией, если от предыдущего состояния
// - начальное значение стейта от пропса

class Counter extends Component {
    // 1. сначала идет статика:
    

    // дефорлт пропы для классов:
    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {
    // 
    };
// :дефорлт пропы для классов


// 2. после статики идут состояния
    state = {
        value: this.props.initialValue,
    };
// 3. после состояний идут кастомные методы
handleIncrement = () => {
    this.setState((prevState) => ({
        value: prevState.value + 1,
    }));
};

handleDecrement = () => {
    this.setState((prevState) => ({
        value: prevState.value - 1,
    }));
};
// 4. после кастомных методов идет метод рендер
render() {
    return (
        <div className="Counter">
            <Value value={this.state.value}/>
            <Controls 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}/>
        </div>
        );
    };
};

export default Counter;