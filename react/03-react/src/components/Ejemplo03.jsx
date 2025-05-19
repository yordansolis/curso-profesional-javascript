import { useState } from 'react'

export function Ejemplo03() {

    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState('')

    // validamos si el mensaje se envio
    if (isSent) {
        return <small>✅ Mensaje enviado... {message}</small>
    }

    // si no se envio el mensaje, mostramos el formulario


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault() // evitamos que el formulario se envie
                setIsSent(true) // cambie el valor de isSent a true
                setMessage(message)
            }}>
                <textarea
                    placeholder="Mensaje"
                    value={message} // valor del mensaje ya ingresado
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" 
                className='bg-blue-500 text-white p-2 rounded-md'
                >
                    Enviar
                </button>   
            </form>
        </>
    )
}