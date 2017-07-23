import React from 'react';
import Search from './Search'
import Results from './Results'
import _ from 'lodash';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {}
    }

    this.articleSearch = this.articleSearch.bind(this);
  }

  articleSearch(term, results) {
    //replace any spaces in term with %20
    var searchTerm = term.replace(/ /g, '%20');
    //Api Call
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${searchTerm}&gsrlimit=10&origin=*`)
    xhr.send(null);

    xhr.onreadystatechange = () => {
      var DONE = 4; //ready state 4 means the request is done
      var OK = 200; //status 200 is a successful return
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          var output = xhr.responseText;
          this.setState({results: output}); //the responseText
          //console.log(this.state.results.title)
        }
        else {
          console.log(`Error: ${xhr.status}`); //error catcher
        }
      }
    }
  }



  render() {
    const articleSearch = _.debounce((term) => {this.articleSearch(term)}, 300);
    return (
      <div>
        <Search onSearchTermChange = {articleSearch}/>
        <Results results = {this.state.results}/>
      </div>
    )
  }
}

export default App;
