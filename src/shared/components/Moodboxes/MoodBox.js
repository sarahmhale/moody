import React from 'react';
import './MoodBox.css';
import ReactSVG from 'react-svg'
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
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "0 10px 0 1%"

                }}>

                    <ReactSVG className="mood-img" src={require(`../../../assets/svg/${this.props.img}.svg`)} />
                    {this.props.value}
                </div>
            </button>
        );
    }
}

export default MoodButton;
