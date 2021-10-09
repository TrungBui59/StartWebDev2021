import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/** 
let counter = 1
ReactDOM.render(
  <React.StrictMode>
    <App counter = {counter}/>
  </React.StrictMode>,
  document.getElementById('root')
);

//change the index file will not re-render the page because this is functional programming
// this function will refresh the page when called
const refresh = () => {
  ReactDOM.render(<App counter = {counter}/>,
  document.getElementById('root'))
}

// This will update counter and rerender the page 1000 time, but
// it is not a good idea to rerender the page every time we want to update it
// The better way is to change the App.js file
/** 
 setInterval(() => {
  refresh()
  counter += 1
}, 1000);
 */
// We will need to reinitialize everything
ReactDOM.render(<App />, document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
