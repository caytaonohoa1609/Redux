import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home'

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

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : []
    console.log(">>> check data axios: ", data)
  }

  useEffect(() => {
    fetchAllUser();
  }, [])


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and {props.name}</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home/>
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
