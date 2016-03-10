import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { asyncChangeTitle } from '../../actions/actionCreators';

const Home = function (props) {
  const dispatch = props.dispatch;
  const _onChange = function (ev) {
    return dispatch(asyncChangeTitle(ev.target.value));
  };
  return (
    <div>
      <h1>{ props.data.title }</h1>
      <label className="home__label">Live title change</label>
      <input
        className="home__input"
        type="text"
        onChange={ _onChange }
        defaultValue="Hello World"
      />
      <Link className="btn" to="/about">About</Link>
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(Home);
