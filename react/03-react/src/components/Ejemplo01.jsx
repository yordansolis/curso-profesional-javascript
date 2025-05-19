
import { useState } from 'react'


export  function Ejemplo01() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')
    const today = new Date()

    const handleClick1 = () => {
        setCount(count + 1) // aqui se actualiza el estado
        setMessage('')
    }


    const handleClick2 = () =>{

        if (count <= 0){
            setMessage('No se puede restar mas')
            return 
        }
        setCount(count - 1)
        setMessage('')
    }

    const handelSendClick = () =>{
        setMessage(message)
    }

    const sendMessage = (value) => {
        setMessage(value)
      }

    // funcion para formatear la fecha
    const formatDate = (date) => {
        return new Intl.DateTimeFormat(
            'es-ES',
            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        ).format(date);
      }

      const dateStyle = {
        date: "Fecha actual",
        theme :{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            borderRadius: '5px'
        }
      }


      return (
        <>
          <small style={dateStyle.theme}>{formatDate(today)}</small>
          <p>Contador</p>
          <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick1}>Click me +</button>
          <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick2}>Click me -</button>
          <p>{count}</p>
          <p>{message}</p>
          <input type="text" onChange={(e) => sendMessage(e.target.value)} />
          <button onClick={handelSendClick}>Enviar</button>
        </>
      
    )
}