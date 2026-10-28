
import './App.css'

import Vamsi from './components/vamsi.jsx'

const App = () => {
 
const [count, setCount] = useState(0)


  return (
    <>
     <p>{
      count
     }</p>
     <Vamsi />
     </>
  )
}

export default App
