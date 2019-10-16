import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

export default class StarRating extends Component {

    render() {
        return (
            <div className="starRating">
                <Ratings
                    rating={this.props.rating ? this.props.rating : 0}
                    widgetRatedColors="#FAD14D"
                    widgetHoverColors="#FAD14D"
                    changeRating={this.props.changeRating}
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
            </div>
        );
    }
}

