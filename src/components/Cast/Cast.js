import React, { Component } from 'react';
import './Cast.css';

class Cast extends Component {
    state = {}
    render() {
        return (
            <div className="cast">
                {/* <div className="crewList"> */}
                <h3>Cast</h3>

                <div className="castCrew-cnt">
                    {this.props.show.cast.map(elem => {
                        return (
                            <div className="castCrew">
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