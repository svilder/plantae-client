import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import plantae from '../api/plantae';
import ResultsGrid from './ResultsGrid';
import ResultSelected from './ResultSelected';

class App extends React.Component {
  state = { results: [], selectedResult: null };

  onSearchSubmit = async (term) => {
    const response = await plantae.get('/api/v1/plants', {
      params: { query: term }
    });
    this.setState({results: response.data, selectedResult: response.data[0]});
  };

  updateSelectedResult = (result) => {
    this.setState({selectedResult: result});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '32px'}}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ResultSelected selectedResult={this.state.selectedResult} />
        <ResultsGrid results={this.state.results} updateSelectedResult={this.updateSelectedResult} />
      </div>
    );
  };
};

export default App;