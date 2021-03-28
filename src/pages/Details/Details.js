import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
    state = {  }


    render() { 
        // const { show , cast , season} = this.props.show;
        return ( 
          <div className="details-cnt">
             
                <button className="back" onClick={()=> this.props.setShow(null)}>Back</button>
                <div className='details'>
                    <h1 className="detailName">{this.props.show.name}</h1>
                        <div className="detailMain">
                            <img className="detailImage" src={this.props.show.image}/>
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
                             <p>{this.props.show.summary}</p>
                        </div>      
                </div>
            </div>
         );
    }
}
 
export default Details;