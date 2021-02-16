//importación
import React from 'react'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

//generación de la funcion flecha o arrow function del componente
const App = () => {

    const clickHandlerFunction = text => {
        console.log(text);
    }
    //lo que ejecuta la función flecha
    return (
    <main className='react-calculator'>
        <Result />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction} type="button"/>
            <Button text="2" type="button"/>
            <Button text="3" type="button"/>
            <Button text="4" type="button"/>
            <Button text="5" type="button"/>
            <Button text="6" type="button"/>
            <Button text="7" type="button"/>
            <Button text="8" type="button"/>
            <Button text="9" type="button"/>
            <Button text="0" type="button"/>
            
        </div>
        <Functions/>
        <MathOperations 
            onClickOperation={operation => 
                console.log("",operation)
            }
            onClickEqual={equal => 
                console.log("",equal)
            }/>
    </main>)
} 

//exportación
export default App