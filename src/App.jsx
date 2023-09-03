import { useState, useEffect } from "react";
function App() {
  const [state, setState] = useState(1)
  const [items, setItem] = useState([])
  const [pro, setPro] = useState(1)
  const [clothes, setClothes] = useState([])
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  useEffect(function () {
    fetch(`https://jsonplaceholder.typicode.com/todos/${state}`)
      .then(response => response.json())
      .then(json => setItem([json]))

  }, [state])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pro}`)
      .then(response => response.json())
      .then(json => setClothes([json]))
  }, [pro])
  useEffect(()=>{
    window.addEventListener('resize', ()=>{setWinWidth(window.innerWidth)})
    return ()=>{
      window.removeEventListener("resize", ()=>{setWinWidth(window.innerWidth)})
    }
  },[])
  return (
    <>
    <h1>
      {winWidth}
    </h1>
      <div className="bg-black text-white">
        {state}
      </div>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        increment value
      </button>
      {items.map((item, index) => {
        return (<p key={index}>{JSON.stringify({ item })}</p>)
      })}

      <button
        onClick={() => {
          setPro(pro + 1)
        }}
      >
        Get Product
      </button>
        {clothes.map((item, index)=>{
          return (
            <>
            <p key={index}>{item.description}</p>
            <img
              alt="img"
              src={item.image}
            />
            </>
          )
        })}
    </>
  );
}

export default App;
