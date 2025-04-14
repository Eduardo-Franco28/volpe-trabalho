import assembly from './assets/img/Csharp_Logo.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>C-Sharp</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>
            C# foi criado por Anders Hejlsberg e sua equipe na Microsoft e foi lançado pela primeira vez em 2000 como parte da plataforma . NET. Desde então, ele se tornou uma linguagem de programação amplamente utilizada em diversas aplicações, desde aplicativos de desktop até aplicativos móveis e Web</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>A linguagem de programação C# funciona usando uma máquina virtual, o CLR (Common Language Runtime), que executa o código em uma linguagem intermediária. O CLR converte o código intermediário para código de máquina, permitindo que o programa seja executado no sistema operacional do usuário. </li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Lucas Volpe / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
