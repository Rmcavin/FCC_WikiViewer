import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};
  }

    render() {
    return (
      <div>
        <input
          placeholder = "search"
          onChange = {event => this.onInputChange(event.target.value)} />
        <button><a href = "https://en.wikipedia.org/wiki/Special:Random" target = "_blank" rel="noopener noreferrer">Random Article</a></button>
      </div>
        )
      }
      onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
      }




export default Search;
