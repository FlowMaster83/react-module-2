import React from 'react';
import Counter from './Counter/Counter';
// import Counter from './Counter/Counter.styled';

// const colorPickerOptions = [
//   {label: 'red', color: '#F44336'},
//   {label: 'red', color: '#F44336'},
//   {label: 'red', color: '#F44336'},
//   {label: 'red', color: '#F44336'},
//   {label: 'red', color: '#F44336'},
// ];

const App = () => (
  <>
  <h1>State of Component</h1>

  <Counter initialValue={10}/>
  </>
);

export default App;