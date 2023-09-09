import React from 'react';
import { connect } from 'react-redux';

function ItemContainer() {
  return (
    <div>
      <h2>Item - </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
