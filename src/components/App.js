import React from 'react';
import PropTypes from 'prop-types';

import * as generate from '../libs/generate-data.js'
import Card from './card';

class App extends React.Component {
  render() {
    return <div className="container">
    {console.log(generate.items(10,20))}
<Card title={generate.getTitle()} 
    details={generate.getDescription()}
    height={generate.height}/>  
    </div>;
  }
}

export default App;
