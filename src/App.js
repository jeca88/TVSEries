
import './App.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import React from 'react';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    shows: [],
    filteredShows: [],
    searchValue: "",
    showId: null,
    seriesDetail: { cast: [], genres: [] },

  }

  onSearch = searchValue => {
    const filtered = this.state.shows.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState({ filteredShows: filtered })
    console.log(filtered)
  }

  setShow = (id) => {
    this.setState({ showId: id });
    this.getShow(id);
  }



  getShow = (id) => {
    const showURL = "https://api.tvmaze.com/shows/" + id;
    const castURL = showURL + "/cast";
    Promise.all([
      fetch(showURL).then(res => res.json()),
      fetch(castURL).then(res => res.json()),
    ]).then((value) => {
      console.log(value)
      let details = {};
      details.name = value[0].name;
      details.summary = value[0].summary;
      details.image = value[0].image.original;
      details.genres = value[0].genres;
      details.cast = value[1];

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
          (data) => {
            const result = data.slice(0, 49)
            this.setState({ shows: result, filteredShows: result })
          }

        );
    }
  }




  render() {
    return (
      <div className="App">
        {!this.state.showId ?
          (< Home shows={this.state.shows} onSearch={this.onSearch}
            setShow={this.setShow} filteredShows={this.state.filteredShows} />) :
          (< Details setShow={this.setShow} show={this.state.seriesDetail}
            showId={this.state.showId} />)}
            < Footer />
      </div>
    );
  }
}
export default App;
