import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    state = {}
    render() {
        return (
            <div className={`show ${this.props.show.rating.average >= 8.5 ? " active" : ""}`} 
            onClick={() => this.props.setShow(this.props.show.id)}>
                <div className='img-div'>
                    <img className='img' src={this.props.show.image.medium} />
                    <p className='name'>{this.props.show.name}</p>
                    <p className="rating">{this.props.show.rating.average}</p>
                </div>
            </div>
        );
    }
}

export default Show;