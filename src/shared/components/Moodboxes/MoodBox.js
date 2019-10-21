import React from 'react';
import './MoodBox.css';

class MoodButton extends React.Component {
    constructor(props) {
        super();

        this.state = {
            clicked: !props.edit
        }
    }

    onPress = () => {
        if (this.props.edit === false) {
            return;
        }
        this.setState({ clicked: !this.state.clicked })
        this.props.onClick(this.props.value)
    }

    render() {


        let btn_style = this.state.clicked ? "filled-button" : "opacity-button"
        let color = "#000000"
        if (this.props.value === "Exciting")
            color = "#ffffff"

        return (
            <button
                style={{ backgroundColor: this.props.color, color: color }}
                className={"mood-box " + btn_style}
                onClick={this.onPress.bind(this)} >
                {this.props.value}
            </button>
        );
    }
}

export default MoodButton;
