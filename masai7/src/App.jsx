
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  let myFun=()=>{
    try{
     fetch("https://jsonplaceholder.typicode.com/todos")
     .then((res)=>{
      return res.json()

     })
     .then((data)=>{
      console.log(data)
      setCount(data)
     })
    }
    catch(err){
console.log(err)
    }
  }

  useEffect(()=>{
   myFun()
  },[])

  return (
    <div className="App">
       {count && count.map((elem)=>(
        <div key={elem.title}>{elem.title}</div>
       ))}
    </div>
  )
}

export default App
