
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {inc,dec} from './redux/action'
import {useApp} from './component/useApp'

function App() {
 
  let dispatch=useDispatch()
  let store=useSelector((store)=>store.count)
  console.log(store)

  let [data]=useApp()

  return (
    <div className="App">
      <h1>count:{store}</h1>
      <button onClick={()=>{dispatch(inc(store))}}>INCC</button>
      <button onClick={()=>{dispatch(dec(store))}}>DECC</button>
      <h1>{data}</h1>
     
    </div>
  )
}

export default App
