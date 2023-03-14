import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
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
    const { label } = this.props.options[this.state.activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
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
