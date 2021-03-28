import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="show" onClick={() => this.props.setShow(this.props.show.id)}>
                <div className='img-div'>
                    <img className='img' src={this.props.show.image.medium}/>
                    <p className ='name'>{this.props.show.name}</p>
                </div>
            </div>
         );
    }
}
 
export default Show;