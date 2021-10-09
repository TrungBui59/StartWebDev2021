import './App.css';
import React, { useState } from 'react'
  /** 
   * const name = props.name
   * const age = props.age
   * because we past down props like object:
   * props = {
   *   name: "Trung",
   *   age : 19
   * }
   * We could use Destructing Assignment:
   * const {name, age} = props
   * we could even do it on the name of funtion:
   * const Hello = ({name, age}) => 
   
  // Now we want to know the birth year of the user, we could use component helper function
const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
    <p>Hello, {name}. You are {age} years old</p>
    <p>You were born in {bornYear()}</p>
    </div>
  )
}
//React component name should always be capitalized
const Footer = () => {
  return (
    <>
      This project is create by <a href="https://www.facebook.com/trungbui23">Trung Bui</a>
    </>
  )
}
const App = () => {
  const now = new Date()
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name = "Trung" age = {19}/> 
      <Footer />
    </div>
  )
}
*/
// Now we want to update a number every time the page is render, it will count
// This is a bad example, we should change it by make everything become a component
/**
const App = () => {
  let [counter, setCounter] = useState(0)

  //setTimeout(
    //() => setCounter(counter + 1),
    //1000
  //)
  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const setToZero = () => {
    setCounter(0)
  }
  console.log("rendering.....", counter)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
*/
const Header = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({text, onClickHandler}) => {
  return (
    <>
    <button onClick = {onClickHandler}>
      {text}
    </button>
    </>
  )
}
const App = () => {
  let [ counter, setCounter ] = useState(0)
  let [left, setLeft] = useState(0)
  let [right, setRight] = useState(0)
  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  const setZero = () => {
    setCounter(0)
  }
  const changeLeft = () => {
    setLeft(left + 1)
  }
  const changeRight = () => {
    setRight(right + 1)
  }
  return (
    <div>
      <Header counter = {counter}/>
      <Button text = "plus" onClickHandler={increaseByOne}/>
      <Button text = "minus" onClickHandler={decreaseByOne}/>
      <Button text = "reset" onClickHandler={setZero}/> 
      <Header counter = "This is for multiple component update"/>
      <Header counter = {left}/>
      <Header counter = {right}/>
      <Button text = "change left" onClickHandler={changeLeft}/>
      <Button text = "change right" onClickHandler={changeRight}/>
    </div>
  )
}
export default App;
