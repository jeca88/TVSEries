import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = { searchValue: "" };

    onSearchValue = (e) => {
        this.setState({ searchValue: e.target.value });
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className="dropdown">
                <input className="search" value={this.state.searchValue} onChange={this.onSearchValue}
                    type="text" placeholder="Search.." />
            </div >
        );
    }
}

export default Search;