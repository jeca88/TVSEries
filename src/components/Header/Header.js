import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-cnt">
                    <span>BIT SHOW</span>
                    < Search onSearch={this.props.onSearch} searchedShows={this.props.searchedShows}
                        setShow={this.props.setShow} />
                </div>
            </div>
        );
    }
}

export default Header;