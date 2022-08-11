import './App.scss';
import Posts from './components/017/Posts';
import Users from './components/017/Users';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>API</h1>
        <Users></Users>
        <Posts></Posts>
      </header>
    </div>
  );
}

export default App;