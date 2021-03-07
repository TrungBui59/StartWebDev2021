import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// By declare another div, it will make our code looks ugly, we could replace with <></>
const Hello = (props) => {
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}
// As we can see, if the footer is declared with non capital. It will not be render
// as a component with div and we cannot see. Therefore, name of a function will always be capitalized to render
const Footer = () => {
  return (
    <>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </>
  )
}
// If you pass the value right to the var in the Hello component, such as name = "Trung"
// you will not need to use the {}, but if you pass a predefined var, it will need name = {name}

// React component usually need to have a root, therefore, we need to have div element in App
const App = () => {
  const now = new Date()
  const name = "Trung"
  const age = 19

  return (
    <div>
      <h1>Greeting, it is {now.toString()}</h1>
      <Hello name={name} age={age}/>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

