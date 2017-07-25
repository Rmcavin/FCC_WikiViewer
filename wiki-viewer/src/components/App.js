import React from 'react';
import Search from './Search'
import Results from './Results'
import '../App.css'
import _ from 'lodash';
import axios from 'axios';
import '../font-awesome-4.7.0/css/font-awesome.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {}
    }

    this.articleSearch = this.articleSearch.bind(this);
  }

  articleSearch(term, results) {
    if (term !== "") {
      //replace any spaces in term with %20
      var searchTerm = term.replace(/ /g, '%20');
      //Api Call
      axios({
        method: 'get',
        url: `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${searchTerm}&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&&origin=*`
      })
      //update state to API return
      .then(response => {
        this.setState({
          results: response
        })
      })
    }
  }

  render() {
    //chokes the frequency of API calls to every 4 seconds, allows for typing
    const articleSearch = _.debounce((term) => {this.articleSearch(term)}, 400);
    return (
      <div className = "pageWrap">
        <div className = "header">
          <h1><i className ="fa fa-wikipedia-w" aria-hidden="true"></i>ikiViewer</h1>
          <Search onSearchTermChange = {articleSearch}/>
        </div>
          <Results results = {this.state.results}/>
      </div>
    )
  }
}

export default App;
