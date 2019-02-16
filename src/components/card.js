import React from 'react';

class Card extends React.Component {

render() {

return <div class="flip-card">
<div class="flip-card-inner">
  <div class="flip-card-front">
  <h4><b>{this.props.title}</b></h4>
  </div>
  <div class="flip-card-back">
  <iframe src={this.props.details}  width="100%" height={this.props.height} frameBorder="0"></iframe>
  </div>
</div>
</div>

}

}

export default Card;
