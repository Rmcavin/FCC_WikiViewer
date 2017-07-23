import React from 'react';
import Result from './Result'

const Results = (props) => {

    console.log(props.results);

      var eachResult = Object.keys(props.results).map((result) => {
        //console.log(eachResult)
        return (
          <Result
            key = {result.timestamp}
            result = {result} />
        )
    })

      return (
        <ul className = "resultList">
          {eachResult}
        </ul>
      )


}

export default Results;
