import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './componentes/calculadora'

function App() {
    return (
        <div>
            
            <Calculadora />
            <p>By Millyana Souza</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App