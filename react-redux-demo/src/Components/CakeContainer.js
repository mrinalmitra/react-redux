import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Add cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // Apart from the previously received props, now the component will receive numberOfCakes as props as well
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
