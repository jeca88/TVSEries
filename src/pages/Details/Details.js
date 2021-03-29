import React, { Component } from 'react';
import './Details.css';
import Cast from '../../components/Cast/Cast'


class Details extends Component {
    state = {}


    render() {
        return (

            <div className="details-cnt">
                <button className="back" onClick={() => this.props.setShow(null)}>Back</button>
                <div className='details'>
                    <img className="detailImage" src={this.props.show.image} />
                    <div className="detailName">
                        <h1 className="name">{this.props.show.name}</h1>
                        <div className="genre">
                            {this.props.show.genres.map(elem => {
                                return <p>{elem}</p>
                            })}
                        </div>
                        <p>{this.props.show.summary}</p>
                    </div>

                    < Cast show={this.props.show} />
                    {/* 
                        <div className="detailMain">
                            
                            <div>
                                <div className="seasonsCrew">
                                    <h3>Season ({this.props.show.numOfSeasons})</h3>
                                </div>
                                <div className="crewList">
                                    <h3>Cast</h3>
                                    <ul> 
                                        {this.props.show.cast.map(elem => {
                                           return <li>{elem}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="detailSummary">
                            <h3>Show Details</h3>
                            
                        </div>       */}
                </div>
            </div>

        );
    }
}

export default Details;