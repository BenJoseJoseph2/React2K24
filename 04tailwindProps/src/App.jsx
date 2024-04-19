import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:'Ben Jose Joseph',
    age:22
  }
  let newArr = [1,2,3]

  let intro = "Developer From Kerala which is in India "

  let imgAdd = 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400'

  let imgAdd1 = 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> TailWind Test </h1>
      
      //  Here We are making an seperate folder for the components and in that we have Card.jsx file which contain the general ui of the card which is being called in this section
      
    <Card name="Ben Jose Joseph" btnText=" React Native Dev" introd = {intro} img={imgAdd1}/>
    <Card name= "Ben10" btnText=" Software Dev " introd = {intro} img={imgAdd}/>
      

    </>
  )
}

export default App
