import './App.css';
import Bebras from './components/003/Bebras';
import BlueCircle from './components/003/BlueCircle';
import Briedis from './components/003/Briedis';
import RedCircle from './components/003/RedCircle';
import randomColor from './functions/randomColor';

const cats = ['Pilkis', 'Mulkis', 'Kriukis']

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Start</h1>
       {/* <Bebras/>
       <Briedis/> */}
       {
        cats.map((el, index) => <span key={index}>{el}</span>)
       }
       {/* <div className='container'>
       {
          [...Array(6)].map((_, index) => index % 2 === 0 ? <span><BlueCircle key={index}/></span> : <span><RedCircle key={index}/></span>)
        }
       </div> */}
       <div className="container">
       {
        [...Array(10)].map((_, i) => <div className="circleRand" key={i} style={{backgroundColor: randomColor()}}></div>)
       }
       </div>
      </header>
    </div>
  );
}

export default App;
