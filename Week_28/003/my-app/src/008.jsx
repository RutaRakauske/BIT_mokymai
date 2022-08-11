import './App.scss';
import Buttons from './components/008/Buttons';
import View from './components/008/View';
import { useState } from 'react';
import Square from './components/008/Square';
import HelloWorld from './components/008/HelloWorld';
import HelloWorld2 from './components/008/HelloWorld2';
import Visual from './components/008/Visual';

function App() {

const [view, setView] = useState(0)


  return (
    <div className="App">
      <header className="App-header">
        <h1>States & Clicks 2</h1>
        <Buttons setView={setView}></Buttons>
        <View view={view} number={1} element={<Square/>}></View>
        <View view={view} number={2} element={<HelloWorld/>}></View>
        <View view={view} number={3} element={<HelloWorld2/>}></View>
        <View view={view} number={4} element={<Visual/>}></View>
      </header>
    </div>
  );
}

export default App;