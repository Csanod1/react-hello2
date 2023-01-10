import React, { ChangeEvent, Component } from 'react';
import logo from './logo.svg';
import './App.css';
interface State {
  datum: Date;
  dobas: number;
  ujmeret: number;
}
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      datum: new Date(),
      dobas: 0,
      ujmeret: 12
    }
    setInterval(() => {
      this.setState({
        datum: new Date()
      });
    }, 1000);
  }

  kockadobas = () => {
    // Ide jöhet az eseménykezelés
    const ujszam = Math.floor(Math.random() * 6 + 1)
    this.setState({
      dobas: ujszam
    })
  }

  betumeret = (e: ChangeEvent) =>{
    let tempMeret = (e.currentTarget as HTMLInputElement).value;
    this.setState({
      ujmeret: parseInt(tempMeret)
    })
  }


  render() {
    return <div style={{
      
    }}>
      <p id="hello" style={{
        fontStyle: "italic",
        color: 'limegreen',
        fontSize: this.state.ujmeret + "px"
      }}>
        { this.state.datum.toLocaleString() }
      </p>
      <p className={"kodckadobas"}>Kockadobas eredmenye: {this.state.dobas }</p>
      <button onClick={this.kockadobas}>Kockadobás</button> <br />
      <input type="number" placeholder='betűméret' onChange={this.betumeret}></input> <br />
      <input type="text" placeholder='szín' />
    </div>;
  }
}
export default App;