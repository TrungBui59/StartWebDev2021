import React from 'react'
const Part = (props) => {
  return (
    <>
    <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <>
    <Part part={part1}/>
    <Part part={part2}/>
    <Part part={part3}/>
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  const total = part1.exercises + part2.exercises + part3.exercises
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]} />
    </div>
  )
}

export default App