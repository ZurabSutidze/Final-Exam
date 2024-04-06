import './App.css'
import Parents from './Components/Context/Parent'
import Greeting from './Components/Greeting/Greeting'
import ShowHide from './Components/ShowHide/ShowHide'
import Todo from './Components/Todo/Todo'
import UseReducer from './Components/UseReducer/UseReducer'
import UseRef from './Components/UseRef/UseRef'
import CustomHook from './Components/Hook/CustomHook'
import Timer from './Components/Timer/Timer'
import Parent from './Components/Memo/parent'
import { Route , Routes} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Posts from './Components/Pages/Posts'
function App() {
  
  // const { data } = CustomHook('https://jsonplaceholder.typicode.com/users')
  // console.log(data)
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Posts/>} />
      </Routes> */}

      {/* <Greeting greeting={"Dato"} /> */}
      {/* <ShowHide/> */}
      {/* <Todo/> */}
      {/* <UseRef/> */}
      {/* <Parents/> */}
      {/* <UseReducer/> */}
{/*       
      {data.map((el) => (
        <div key={el.id}>
          <p>{el.name}</p>
       </div>
     ))} */}
      
      {/* <Timer/> */}

      {/* <Parent/> */}
      
      
    </>
  )
}

export default App
