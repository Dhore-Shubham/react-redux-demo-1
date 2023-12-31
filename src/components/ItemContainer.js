import React from 'react';
import { connect } from 'react-redux';

function ItemContainer() {
  return (
    <div>
      <h2>Item - </h2>
      <button onClick={props.buyItem}>buy Items</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(null, mapDispatchToProps)(ItemContainer);
