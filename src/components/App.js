import React from 'react';
import PropTypes from 'prop-types';

const App = props => <div>
 <button onClick={props.onClick}>{props.buttonText}</button></div>

App.propTypes = {
 buttonText: PropTypes.string.isRequired,
 onClick: PropTypes.func.isRequired
}

App.defaultProps = {
 buttonText: "Click Me!",
 onClick: () => console.log('default click action')
}

export default App;
