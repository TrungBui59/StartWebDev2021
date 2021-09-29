import './App.css';
const Hello = (props) => {
  const name = props.name
  const age = props.age
  return (
    <div>
    <p>Hello, {name}</p>
    <p>You are {age} years old</p>
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
  const a = 10
  const b = 20
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name = "Trung" age = {19}/> 
      <Footer />
    </div>
  )
}
export default App;
