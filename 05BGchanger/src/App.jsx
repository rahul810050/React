import { useState } from 'react'



function App() {
  // const [count, setCount] = useState(0)

  const [color, setColor] = useState('olive');

  


  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={()=> setColor('#0077be')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#0077be"}}>
            Blue
          </button>
          <button onClick={()=> setColor('#8a2be2')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#8a2be2"}}>
          Purple
          </button>
          <button onClick={()=> setColor('#50c878')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#50c878"}}>
          Green
          </button>
          <button onClick={()=> setColor('#fd5e53')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#fd5e53"}}>
          Orange
          </button>
          <button onClick={()=> setColor('#ffd700')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#ffd700"}}>
          Gold
          </button>
          <button onClick={()=> setColor('#b0c4de')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#b0c4de"}}>
          Silver
          </button>
          
          </div>
      </div>

    </div>
  )
}

export default App
