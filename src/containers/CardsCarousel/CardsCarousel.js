import React from 'react';
import { Card } from '../../components/Card';
import { changeCountAction } from '../../actions/actions';
import { store } from '../../store/store';
import { GetPictures } from '../../services/GetPictures'

export class CardsCarousel extends React.Component {

  constructor(props) {
    super(props);

    // toggleSwitch - to stop infinite re-rendering in componentDidUpdate()
    this.state = {
      fetchedData: null,
      count: null,
      isLoading: false,
      error: null,
      toggleSwitch: false
    };

    this.GetImages = GetPictures.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  render() {
    const cardsList = this.state.fetchedData ? this.state.fetchedData.hits : [];
    const { isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>ERROR!</p>
    }

    return (
      <div>
        <button onClick={this.changeCount}>Change count!</button>
        {cardsList.map((item, i) => {
          return <Card key={i} item={item} id={i} fetchedList={this.state.fetchedData} name="test-card-NAME"></Card>
        })}
      </div>
    )
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.GetImages(!this.state.toggleSwitch);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toggleSwitch) {
      this.GetImages(!this.state.toggleSwitch);
    }
  }

  changeCount() {
    store.dispatch(changeCountAction)
    this.setState({ count: store.getState().cardsState.count })
  }

}
