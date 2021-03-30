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
                        <p dangerouslySetInnerHTML={{ __html: `${this.props.show.summary}` }}></p>
                    </div>

                    < Cast show={this.props.show} />
                </div>
            </div>
        );
    }
}

export default Details;