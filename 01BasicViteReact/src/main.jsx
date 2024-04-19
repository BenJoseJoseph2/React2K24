import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'> Hire Ben Jose Joseph </a>
)
  

// We have General Way of specifying the element : 

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target='_blank'},
//   'Click To Hire Ben Jose Joseph'
// )

// const anotherUser = " Ben Jose Joseph DEv"

function MyApp(){
  return (
    <div>
        <h1>Custom App</h1>
    </div>
  )
}

function MyName(){
  return(
    <div>
        <h1>My Name is Ben Jose Joseph</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MyApp/>
    <App />
    <MyName/>
    

  </React.StrictMode>,
)
