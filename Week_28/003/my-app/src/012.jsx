import './App.scss';
import Radio from './components/012/Radio';
import Range from './components/012/Range';
// import Checkbox from './components/012/Checkbox';
// import Enter from './components/012/Enter';
// import Show from './components/012/Show';
// import { useState } from "react";
// import Enter2 from './components/012/Enter2';
// import Bla from './components/012/Bla';

function App() {

// const [text, setText] = useState('')
// const [h1, setH1] = useState('Repeat')


  return (
    <div className="App">
      <header className="App-header">
        <h1>Repeat</h1>
        {/* <h1>{h1}</h1> */}
        {/* <Bla></Bla> */}
        {/* <Show text={text}></Show>
        <Enter setText={setText}></Enter> */}
        {/* <Enter2 setH1={setH1}></Enter2> */}
        {/* <Checkbox></Checkbox> */}
        <Radio></Radio>
        <Range></Range>
      </header>
    </div>
  );
}

export default App;