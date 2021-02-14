//importación
import React from 'react'
import Result from './components/Result'
import './App.css'

//generación de la funcion flecha o arrow function del componente
const App = () => {
    //lo que ejecuta la función flecha
    return (
    <main className='react-calculator'>
        <Result value={"0"}/>
        <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>)
} 

//exportación
export default App