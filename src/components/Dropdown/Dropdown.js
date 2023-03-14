import React, { Component } from 'react';
import './Dropdown.css';

// в зависимости от буля, разметка рендерится или не рендерится
// class Dropdown extends Component {
//         state = {
//         visible: false,
//     };
    
//     show = () => {
//         this.setState({ visible: true });
//     };

//     hide = () => {
//         this.setState({ visible: false });
//     };

class Dropdown extends Component {
    state = {
    visible: false,
};

toggle = () => {
    this.setState(prevState => ({
        visible: !prevState.visible,
    }));
};

render() {
    return (
        <div className="Dropdown">
            <button 
                type="button" 
                className="Dropdown__toggle" 
                onClick={this.toggle}
                >Toggle
{/* рендерится кнопка */}
{/* рендер по условию */}
                {this.state.visible ? 'Hide' : 'Show'}
            </button>

            {this.state.visible && (
                <div className="Dropdown__menu">Dropdown Menu</div>
            )}
        </div>
    );
}
}

export default Dropdown;

// show = () => {
//     this.setState({ visible: true });
// };

// hide = () => {
//     this.setState({ visible: false });
// };

//     render() {
//         return (
//             <div className="Dropdown">
//                 <button type="button" className="Dropdown__toggle" onClick={this.show}>
//                     Show
//                 </button>
                
//                 <button type="button" className="Dropdown__toggle" onClick={this.hide}>
//                     Hide
//                 </button>
//                 {this.state.visible && (
//                     <div className="Dropdown__menu">Dropdown Menu</div>
//                 )}
//             </div>
//         );
//     }
// }

// export default Dropdown;