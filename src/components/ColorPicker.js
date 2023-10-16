import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  handleButtonClick = () => {
    this.setState({ isColorListVisible: !this.state.isColorListVisible });
  };

  handleColorClick = (color) => {
    this.setState({ selectedColor: color, isColorListVisible: false });
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
        <div>
        <button className="colorbutton" onClick={this.handleButtonClick}>
          Pick a color
        </button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && <p>Selected color: {selectedColor}</p>}
      </div>
    );
  }
}

export default ColorPicker;