
import './App.css';
import Mainrouting from './component/Mainrouting';
import Navbar from './component/Navbar/Navbar';
import Login from './component/pages/login/Login';

function App() {
  return (
    <>
    <Navbar/>
    {/* <<Login/>> */}
    <Mainrouting/>
    </>
  );
}

export default App;
