import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {term: ""};
  }

    render() {
    return (
      <div>
        <div className = "searchContainer">
          <input className = "searchBar"
            placeholder = "Search"
            onChange = {event => this.onInputChange(event.target.value)} />
        </div>
        <div className = "randomContainer">
          <button className = "random"><a href = "https://en.wikipedia.org/wiki/Special:Random" target = "_blank" rel="noopener noreferrer">Random Article</a></button>
        </div>
      </div>
        )
      }
      onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
      }




export default Search;
