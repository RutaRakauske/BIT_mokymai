import { Component } from 'react';

class NiceClass extends Component{
// state atsiranda komponento viduje.
// jei naudojam => funkcijai aprasyti, tai naudojant this. gaus klase. Jei aprasysim be arrow funkcijos, tai viduje rasant this. gausim ta funkcija

constructor() {
    super(); //iskviecia tevini elementa
    this.state = {dydis: 30, fonas: 'skyblue', count: 1, kvadratas: []}//default
}

redButtonClicked = (count) => {
    this.setState({count: this.state.count + 1});
    // jei reikia kad state pasikeistu iskart
    // this.setState(s => ({count: this.state.count + 1}));
    // this.setState(s => ({count: this.state.count + 1}));
}

//su arrow funkcija aprasymas
greenButtonClicked = () => {
    this.setState({dydis: 40});
}
//be arrow funkcijos kitaip apsiraso callinant
blueButtonClicked() {
    this.setState(this.state.fonas === 'blue' ? {fonas: 'skyblue'} :{fonas: 'blue'});
}

yellowButtonClicked = () => {
    this.setState(state => ({kvadratas: [...state.kvadratas, '']}));
}

// klase pati negali nieko grazinti, todel naudojam render funkcija, kuri grazina kazka is komponentp
render(){
    return (
        <>
            <h2>{this.state.count}</h2>
            <button className='red' onClick={this.redButtonClicked}>Pridėti vieną</button>
            <h3 style={{
                color: this.props.spalva,
                backgroundColor: this.state.fonas,
                fontSize: this.state.dydis + 'px'
            }}>Aš princesė</h3>

            <button className='blue' onClick={() => this.blueButtonClicked()}>Pakeisti foną</button>
            <button className='green' onClick={this.greenButtonClicked}>Pakeisti dydį</button>
            <button className='yellow' onClick={this.yellowButtonClicked}>Kvadratukas</button>
            <div className='container'>
                {this.state.kvadratas.map((_, i) => <div className="sc" key={i}></div>)}
            </div>
        </>
    );
}

}

export default NiceClass;