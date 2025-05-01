
import Allroutes from './Allroutes'
import './App.css'
import { AuthContextProvider } from './Context/AuthContext'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <AuthContextProvider>
       <Navbar/>
       <Allroutes />
       </AuthContextProvider>
    </>
  )
}

export default App
