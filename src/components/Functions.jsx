//importar React
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// Componente funcional
const Functions = ({ onContentClear, onDelete }) => (
    <section className="functions">
        <Button text="clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
)


Functions.propTypes = {
    onContentClear:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
}

// Exportar componente
export default Functions