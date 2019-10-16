import React from 'react';
import './MoodButton.css';
import Emoji from '../Emoji'

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


        let btn_style = this.state.clicked ? "red-button" : "white-button"
        return (
            <button className={"mood-button " + btn_style} onClick={this.onPress.bind(this)} > <div>
                <Emoji symbol={this.props.emoji} /></div> <div> {this.props.value}</div></button>
        );
    }
}

export default MoodButton;
