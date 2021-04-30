import logo from './logo.svg';
import bmi from './bmi.svg';
import bsl from './bsl.svg';
import quiz from './quiz.svg';
import info from './info.svg';
import pfp from './pfp.svg'

import './App.css';

function App(){

  return (
      <div className="App">
        <header className="App-header">
          <div className="Dia-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Dia-header">
            <img src={bmi} className="Bmi-logo" alt="bmi" />
          </div>
          <div className="Dia-header">
            <img src={bsl} className="Bsl-logo" alt="bsl" />
          </div>
          <div className="Dia-header">
            <img src={quiz} className="Quiz-logo" alt="quiz" />
          </div>
          <div className="Dia-header">
            <img src={info} className="Info-logo" alt="info" />
          </div>
          <div className="Dia-header">
            <img src={pfp} className="Pfp-logo" alt="pfp" />
          </div>
        </header>
        <body>
          <p>
            { 1 > 2 ? "Yes" : "no"}
          </p>
          <CalculateBMI bmi={9} />
          <ul>
            <SendMeLoopy />
          </ul>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </body>
      </div>
  );
}

function SendMeLoopy(props) {
  const items = [];
  for(let i = 0; i < 10; i++) {
    items.push(<li key={i} >{"Loopy" + i}</li>);
  }
  return items
}

function CalculateBMI(props) {
  let bmi = props.bmi;
  if(bmi > 22) {
    return <div>your bmi is too high</div>;
  }
  if(bmi < 10) {
    return <div> your bmi is too low</div>;
  }
  return <div>your bmi is just right</div>;
}
export default App;