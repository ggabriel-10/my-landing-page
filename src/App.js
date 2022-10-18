import './App.css';
import Button from './Components/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-fundo">
            <img src="https://avatars.githubusercontent.com/u/88208926?v=4" className="App-logo" alt="logo" />
            <h1>Giovanni Medeiros</h1>
            <h2>Front End Developer</h2>
            <div className="App-tech">
              <img align="center" alt="GM-Js" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
              <img align="center" alt="GM-React" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
              <img align="center" alt="GM-HTML" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
              <img align="center" alt="GM-CSS" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
              <img align="center" alt="GM-Python" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"/>
              <img align="center" alt="GM-Node" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            </div>
            <section className="App-section">
              <Button link="https://github.com/ggabriel-10" label="Github"/>              
              <Button link="https://www.linkedin.com/in/giovanni-medeiros-382806192/" label="LinkedIn"/>            
              <Button link="mailto:ggabriel.medeiros@hotmail.com" label="E-mail"/>
              
            </section>
          </div>

          

      </header>
    </div>
  );
}

export default App;
