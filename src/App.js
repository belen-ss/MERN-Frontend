import "./App.css";

// Router component
import AppRouter from './components/router/AppRouter';

// Components
import NavBar from './components/navbar/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <AppRouter/>
    </div>
  );
}

export default App;
