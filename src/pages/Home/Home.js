import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Show from '../../components/Show/Show';

const Home = (props) => {
    const showList = props.filteredShows.map((show) => {
        return <Show show={show} setShow={props.setShow} />
    })

    return (
        <div>
            < Header onSearch={props.onSearch}
                setShow={props.setShow} />
            {!showList.length ?
                <div class="spinner"></div> :
                <div className="showList">{showList}</div>

            }
        </div>
    );

}

export default Home;