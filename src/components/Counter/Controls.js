import React from 'react';

// Подъем состояния - Controls не знает, что такое this.handleIncrement
const Controls = ({ onIncrement, onDecrement }) => (
// по этому эти функции this.handleIncrement нужно передать, как пропсы
// негласный стандарарт - это он...что-то, по  этому onIncrement
            <div className="Counter__controls">
                <button type="button" onClick={onIncrement}>
                    press to more 1
                </button>
                <button type="button" onClick={onDecrement}>
                    press to less 1
                </button>
            </div>
);

export default Controls;