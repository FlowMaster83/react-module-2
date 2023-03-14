import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle">Show</button>
            </div>
        );
    }
}

export default Dropdown;