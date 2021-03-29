import React, { Component } from 'react';
import './Cast.css';

class Cast extends Component {
    state = {grid: false};

    changeGrid = () => {
        this.setState({grid: !this.state.grid})
      }


    render() {
        return (
            <div className="cast">
                <button className="toggle-grid" 
                onClick={this.changeGrid}>{this.state.grid? "grid": "list"}
                </button>
                <h3>Cast</h3>
                <div className="castCrew-cnt">
                    {this.props.show.cast.map(elem => {
                        return (
                            <div className={` ${this.state.grid ? "activeGrid" : "castCrew"}`}>
                                <img className='castPic' src={elem.person.image.original} />
                                <p>{elem.person.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Cast;