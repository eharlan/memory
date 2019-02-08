import React from 'react';

class Card extends React.Component {

render() {

return <div className="card">
  <div className="card-container p-2">
    <h4><b>{this.props.title}</b></h4>
    <iframe src={this.props.details}  width="100%" height={this.props.height} frameBorder="0"></iframe>
  </div></div>

}

}

export default Card;
