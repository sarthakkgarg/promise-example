import { useEffect } from 'react';
import React from 'react';

function App() {
  const [status , setStatus] = React.useState(0)
  useEffect(() => {
    fetchAPI()
  }, [])
  
  const fetchAPI = async () => {
    const res = await fetch("https://api.disneyapi.dev/", {
   
  }).then ((res) => {
    console.log("Promise Success.", res)
    setStatus(res.status)
  }).catch((err) => {
    console.log("Promise Failed." , err)
  })
  }
  
  return (
    <>
    <h1 style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100%", fontSize:"300px"}}>
      {status}
      </h1>
    </>
  );
}

export default App;
