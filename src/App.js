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
