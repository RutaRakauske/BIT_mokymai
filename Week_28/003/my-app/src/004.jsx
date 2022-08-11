import './App.css';
import Text from './components/004/Text'
import ChangeStyle from './components/004/ChangeStyle';
import Square from './components/004/Square';
import Colors from './components/004/Colors';
import TenCircles from './components/004/TenCricles';
import AComp from './components/004/AComp';
import C from './components/004/CompC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>Props</h1>
            <Text zodis="Geras Katinas" zenklas="!" spalva="red"></Text>
            <Text zodis="Blogas Katinas" zenklas="?" spalva="blue"></Text>
            <Text zodis="Juodas Katinas" zenklas="$" spalva="green"></Text>
            <div className='container'>
                <ChangeStyle forma="square"></ChangeStyle>
                <ChangeStyle forma="circle"></ChangeStyle>
            </div>
            <Square aukstis="120" plotis="50"></Square>
            <Colors tekstoSpalva="yellow" fonoSpalva="coral"></Colors>
            <Colors tekstoSpalva="coral" fonoSpalva="coral"></Colors>
            <div className='container'>
            {
                [...Array(10)].map((_, i) => <TenCircles key={i} skaicius={i + 1}></TenCircles>)
            }
            </div>
            <AComp spalva1="green" spalva2="yellow"></AComp>
            <C count={5}></C>
      </header>
    </div>
  );
}

export default App;
