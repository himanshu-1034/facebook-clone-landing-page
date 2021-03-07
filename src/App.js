
import './App.css';
import Header from './header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
