import './App.scss';
import A3 from './components/016/A3';
import ContextAbc from './components/016/ContextAbc';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Context hook</h1>
        {/* Provider savyje gali laikyt kazkoki value ir perduoti tiesiai vaikam */}
        <ContextAbc.Provider value={{
            text: "ABC"
        }}>
        <A3></A3>
        </ContextAbc.Provider>
      </header>
    </div>
  );
}

export default App;