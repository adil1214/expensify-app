import { createStore } from 'redux';

// Action generators: functions that generate/return action objects

// incrementCount action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// decrementCount action generator
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// setCount action generator
const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// resetCount action generator
const resetCount = () => ({
  type: 'RESET',
});

//
// store creation it takes a callback function that takes 2 parameters and gets called 
// whenever .dispatch is called on the store
//
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.count
      };

    case 'RESET':
      return {
        count: 0
      };

    default:
      return state;
  }
});

// 
// function that defines the actions to do whenever the store is changed,
// the return is a function that you can use to unsubscribe from the store
// 
const unsbuscribe = store.subscribe(() => {
  console.log(store.getState());
});

// unsbuscribe();


store.dispatch(incrementCount({ incrementBy: 5 }));   // 5
store.dispatch(decrementCount({ decrementBy: 2 }));   // 3
store.dispatch(incrementCount({ incrementBy: 7 }));   // 10
store.dispatch(decrementCount({ decrementBy: 1 }));   // 9
store.dispatch(resetCount());                         // 0
store.dispatch(setCount({ count: 177 }));               // 177
store.dispatch(decrementCount({ decrementBy: 2 }));   // 175



// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 9,
// });

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

// store.dispatch({
//   type: 'INCREMENT',
// });


// store.dispatch({
//   type: 'RESET',
// });

// store.dispatch({
//   type: 'SET',
//   count: 999
// });



