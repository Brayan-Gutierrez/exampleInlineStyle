import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}
//Se declara el estilo como una variable y mediante los parentisis de la arrow function
// se retorna de manera automatica el estilo y el bg entre parentesis indica que si no 
//se da un valor tomara ese valor por default
const estilo = (bg = '#222') => ({
  backgroundColor: bg,
  color: '#fff',
  padding:'10px 15px',
  margin: '10px 15px',
})

const Li = ({children}) => {
  return (
    <li style={{ ...estilo2, ....estilo({bg: '#333'}) }} className= 'clase-li'>{children}</li>
  )
}

const App = () = {
  const valor  = 'triste'
  return (
    <ul style={estilo({bg: '#750'})} className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
