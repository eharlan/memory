import React from 'react';
import PropTypes from 'prop-types';

import * as generate from '../libs/generate-data';
import random from '../libs/random';
import Card from './card';

class App extends React.Component {
  render() {
    return <div className="container">
	{console.log(new Array(random).length, random(0, 10))}
	{[...Array(random(0, 10))].map(function(item, index){
        return <Card title={generate.getTitle()} 
    			details={generate.getDescription()}
    			height={generate.height}/>;
    })}
    
    </div>;
  }
}

export default App;
