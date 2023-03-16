import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  render() {
    // деструктуризация пропов из стейтов в методе рендер
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
                // border:
                //   index === this.state.activeOptionIdx
                //     ? "5px solid black"
                //     : "none",
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
