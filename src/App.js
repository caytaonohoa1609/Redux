import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector(
    (state) => {return state.counter.count}
  );

  // event handler
  const handleIncrease = () => {
    // dispatch actions
    // props.increaseCounter()
    dispatch(increaseCounter())

    // fire actions : dispatch = fire
    // store.dispatch({
    //   type: 'DO QUANG HUY',
    //   payload: {'name' : 'QUANG HUY'}
    // })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {props.name}</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     name: state.counter.name
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
