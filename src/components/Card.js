import React from 'react';
import './Card.less';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': this.props.name,
      'fetchedList': this.props.fetchedList
    };
  }

  render() {
    if (this.state.fetchedList) {
      return (
        <div className="card">
          <div className="name">Card ID: {this.props.item.id}</div>
          <div className="description">description: some description</div>
          <img src={this.state.fetchedList.hits[this.props.id].largeImageURL} alt=""/>
        </div>
      )
    } else {
      return <p>data errror...</p>
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps.fetchedList !== this.props.fetchedList) {
      this.setState({ fetchedList: this.props.fetchedList });
    }
  }

}