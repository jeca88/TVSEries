
import './App.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import React from 'react';

class App extends React.Component {
  state = {
    shows: [],
    searchValue: "",
    searchedShows: [],
    showId: null,
    seriesDetail: { cast: [], genres: [] },
    items: []

  }

  onSearch = searchValue => {
    this.setState({
      searchValue: searchValue,
    })
  }

  setShow = (id) => {
    this.setState({ showId: id });
    this.getShow(id);
  }






  getShow = (id) => {
    const showURL = "https://api.tvmaze.com/shows/" + id;
    const castURL = showURL + "/cast";
    const seasonsURL = showURL + "/seasons";
    Promise.all([
      fetch(showURL).then(res => res.json()),
      fetch(castURL).then(res => res.json()),
      fetch(seasonsURL).then(res => res.json())
    ]).then((value) => {
      console.log(value)
      let details = {};
      details.name = value[0].name;
      details.summary = value[0].summary;
      details.image = value[0].image.original;
      details.genres = value[0].genres;
      details.cast = value[1];
      console.log(details.cast)
      details.numOfSeasons = value[2].length;


      this.setState({
        seriesDetail: details
      });

    })
  }


  componentDidMount() {
    if (!this.state.shows.length) {
      const url = "https://api.tvmaze.com/shows";

      fetch(url)
        .then(res => res.json())
        .then(
          (result) => this.setState({ shows: result })
        );
    }
  }




  componentDidUpdate() {
    fetch('http://api.tvmaze.com/search/shows?q=' + this.state.searchValue)
      .then(response => response.json())
      .then(result => {
        this.setState({ searchedShows: result })
      })

  }



  render() {
    return (
      <div className="App">
        {!this.state.showId ?
          (< Home shows={this.state.shows} onSearch={this.onSearch}
            searchedShows={this.state.searchedShows}
            setShow={this.setShow}

          />) :
          (< Details setShow={this.setShow} show={this.state.seriesDetail}
            showId={this.state.showId} />)}
      </div>
    );
  }
}
export default App;
