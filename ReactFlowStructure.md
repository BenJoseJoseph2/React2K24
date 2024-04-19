# Understanding the react flow and struccture : 

    We are creating our React App using the : npm create vite@latest method .

    Why SPA ?
             Because we have only one index file and all works on that file . 

    We can only see an empty div in index.html

        <div id="root"></div>

    Our main file is index.js in CRA method.

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

    ReactDOM should be imported from import ReactDOM from 'react-dom/client'

    createRoot makes the root . 

    If we remove <React.StrictMode> then no issues arrises . 

    App will returns html element and this is rendered in the main.jsx


    We want to name the jsx file with initial character capitalized . 

    The created Demo.jsx file should be passed inside the App.jsx file .

    We should do everything inside the fragment 

    <></>

    Demo.jsx : 

        function Demo(){
    return (
        <h2>Demo Is ready to View</h2>
    )
    }
    export default Demo;

    App.jsx : 

        
import Demo from './Demo';


function App() {
  

  return (
    <>
    <h1> ReactJS2K24 </h1>
    <Demo/>
    </>
   
  )
    }

    export default App

    main.jsx :

        import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)

Note :  The Function name should be capitalized .

        Component file should be jsx format . 
