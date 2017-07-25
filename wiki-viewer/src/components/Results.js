import React from 'react';
import Result from './Result'

const Results = (props) => {
  //If the state is still empty don't render!
if(Object.keys(props.results).length === 0) {
  return <p></p>
}

  //render child component after state update
  else {
    var eachResult = Object.keys(props.results.data.query.pages).map((result) => {
      return (
        <Result
          key = {props.results.data.query.pages[result].pageid}
          result = {props.results.data.query.pages[result]} />
        )
      })

    //return a result component for each result
    return (
      <ul className = "resultList">
        {eachResult}
      </ul>
    )
  }
}

export default Results;
