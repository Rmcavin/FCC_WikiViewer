import React from 'react';

const Result = ({result}) => {
//each individual search result as an element
  var url = 'https://en.wikipedia.org/wiki/' + result.title;
  return (
    <a href = {url} target = "_blank">
      <div className = "wikiItem">
        <h3>{result.title}</h3>
        <p>{result.extract}</p>
      </div>
    </a>
  )
}

export default Result;
