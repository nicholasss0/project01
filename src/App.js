import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    // State é um objeto que armazena as informações que o componente manipula

    this.state = {

      name: 'Nicholas Ricardo'
    };   
  }

  // Esta funnção é um método de instância que altera o estado do componente "name"
  handlePClick() {
    const { name } = this.state;

    if (name === 'Nicholas Ricardo') {
      this.setState({ name: 'Café' });
    }else {
      this.setState({ name: 'Nicholas Ricardo' });
    }

    // const { name } = this.state;
    // console.log(`<p> ${name}`);
  }

  render() {

    const { name } = this.state;



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;




// function App() {
//   return (
//     // fragment React, não gera nada, apenas finje ser uma div Root
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>

//   );
// }
