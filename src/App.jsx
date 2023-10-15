
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee/Coffee';

function App() {

  const coffees = useLoaderData();

  return (
    <>

      <div>
        <h1>Hot Coffee</h1>

        <div className='grid md:grid-cols-2  grid-cols-1 gap-6'>
          {coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)}
        </div>
      </div>

    </>
  )
}

export default App
