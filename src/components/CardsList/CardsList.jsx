import * as React from 'react';

import CardsListItem from '../CardsListItem/CardsListItem';

class CardsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    const data = await this.props.provider.getData();

    this.setState({ items: data });

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <ul className="cards-list">
        {this.state.isLoading && `Loading...`}

        {Array.isArray(this.state.items) &&
          this.state.items.map((item, i) => (
            <CardsListItem key={i}
              item={item}
              mode={this.props.mode || `human`}
            />
          ))
        }
      </ul>
    );
  }
}

export default CardsList;
