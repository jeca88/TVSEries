import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = { searchValue: "" };

    onSearch = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    render() {
        return (
            <div className="dropdown">
                <input className="search" value={this.state.searchValue} onChange={this.onSearch}
                 onKeyDown={() => this.props.onSearch(this.state.searchValue)} type="text" placeholder="Search.." />
                <div id="myDropdown" className="dropdown-content">
                    {this.props.searchedShows.map(show => {
                        if (this.state.searchValue !== "") {
                            return (
                                <p onClick={() => this.props.setShow(show.show.id)}>{show.show.name}</p>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Search;