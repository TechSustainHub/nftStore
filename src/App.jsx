import './App.css';
import Navbar from './components/Navbar';
import { NFTHomeScreen, NFTSignIn, NFTSignUp, NFTUserProfile } from './pages';

const App = () => {

  return (
    <div>
      <Navbar />
      <NFTHomeScreen />
      <NFTSignUp />
      <NFTSignIn />
      <NFTUserProfile /> 
    </div>
  )
}

export default App