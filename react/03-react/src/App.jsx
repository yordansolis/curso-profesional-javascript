import {Ejemplo01} from './components/Ejemplo01.jsx'
import { Ejemplo02 } from './components/Ejemplo02.jsx'
import { Ejemplo03 } from './components/Ejemplo03.jsx'
import { Ejemplo04 } from './components/Ejemplo04.jsx'
import './index.css'


export default function App() {

    // usando el metodo map
  return(
        <>

        <section className='container bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto mt-10'>

        <section className='mt-4'>
        <h2 className='text-3xl font-bold underline pb-4'>Ejemplo 01</h2>
            <Ejemplo01 />
        </section>
        
        <hr className='my-4' />

        <section className='mt-4'>
            <h2 className='text-3xl font-bold underline'>Ejemplo 02</h2>
            <Ejemplo02 />
        </section>
        
        <hr className='my-4' />

        <section className='mt-4'>
            <h2 className='text-3xl font-bold underline'>Ejemplo 03</h2>
                <Ejemplo03 />
        </section>
        
        </section>


        <section className='container  mt-4'>
            <Ejemplo04 />
        </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        </>
  )
}
