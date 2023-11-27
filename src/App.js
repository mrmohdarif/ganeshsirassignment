import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dycom from './Dycom';
function App() {
  const [data, setData] = useState()
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState(0)
  let [count, setCount] = useState(0)
  let [arr, setArr] = useState([false,false,false,false])
  let [arr1, setArr1] = useState([false,false,false,false])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData2(res.data.slice(0,4))
    }).catch((err) => {
      console.log(err);
    })
  }, [data3])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data.slice(0, 4))
    }).catch((err) => {
      console.log(err);
    })
  }, [data3])
  //first task forward task
  // const handleRadio = (e) => { 
  //     console.log(e.target.value);
  //     for (let i = 0; i < e.target.value; i++) 
  //     { 
          
  //         arr[i] =true
  //         setData3(e.target.value)
  //         if(arr[e.target.value]==true)
  //         {
  //           for(let i=e.target.value;i<arr.length;i++)
  //           {
  //             arr[i]=false
             
  //           }
  //           // if(arr[0]===true)
  //           // {
  //           //   arr[0]=false
  //           // }
  //         }      
  //     }  
  // }

  const handleRadio = (e) => { 
    console.log(e.target.value);
    for (let i = e.target.value; i <arr.length; i++) 
    {       
        arr[i] =true
        setData3(e.target.value)
        if(arr[e.target.value]==true)
        {
          for(let i=e.target.value;i<arr.length;i++)
          {
            arr[i]=false
           
          }
          // if(arr[0]===true)
          // {
          //   arr[0]=false
          // }
        }      
    }  
    for (let i = 0; i <e.target.value; i++) 
    {       
        arr1[i] =true
        setData3(e.target.value)
        if(arr1[e.target.value]==true)
        {
          for(let i=e.target.value;i<arr1.length;i++)
          {
            arr1[i]=false
           
          }
          // if(arr[0]===true)
          // {
          //   arr[0]=false
          // }
        }      
    }  
}
  // const handleRadio1 = (e) => {

  //   console.log(e.target.value);
  //   for (let i = 0; i < e.target.value; i++) {
     
  //       console.log(arr[i])
  //       arr[i] = true;
  //       setData3(e.target.value) 
  //   }
   
  // }
  console.log(arr);
  return (
    <div className="App">
      <label>Task Line --1</label>
      
      <div style={{ display: 'flex' }}>
        {
          data?.map((item, index) => {
            return <div style={{ display: 'flex' }} key={index}>
              <div style={{ display: 'flex', gap: '10px', filter: `blur(${count}px)` }}>
                <input type="radio" name='item' value={index} onChange={handleRadio} />
                <img src={item.image} />
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <span>{item.category}{index}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          })
        }
      
      </div>
      <label>Task Line --2</label>

      <div style={{ display: 'flex', }}>
        {
          data2?.map((item, index) => {
            return <div style={{ display: 'flex' }} key={index}>
              <div style={{ display: 'flex', gap: '10px',filter: arr1[index] ? 'blur(3px)' : 'none'}}>
                <input type="radio" name='item1' value={index}  disabled={arr1[index]}/>
                <img src={item.image} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{item.category}{index}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>

       {/* <div style={{ display: 'flex', }}>
        {
          data2?.map((item, index) => {
            return <div style={{ display: 'flex' }} key={index}>
              <div style={{ display: 'flex', gap: '10px'}}>
                <input type="radio" name='item' value={index} />
                <img src={item.image} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{item.category}{index}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          })
        }
      </div> */}
      <label>Task Line --3</label>

      <div style={{ display: 'flex', }}>
        {
          data2?.map((item, index) => {
            return <div style={{ display: 'flex' }} key={index}>
              <div style={{ display: 'flex', gap: '10px', filter: arr[index] ? 'blur(3px)' : 'none' }}>
                <input type="radio" name='item2' value={index}  disabled={arr[index]} />
                <img src={item.image} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{item.category}{index}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          })
        }    
      </div>
      <Dycom/>
      <button onClick={()=>setCount(count++)}>Inc</button>
      <button onClick={()=>setCount(count--)}>Dex</button>
    </div>
  );
}

export default App;
