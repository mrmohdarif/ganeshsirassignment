import React, { useEffect, useState } from 'react'

import axios from 'axios'
function Dycom() {
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState(0)
    let [arr1, setArr1] = useState([false,false,false,false])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
          setData2(res.data.slice(0,4))
        }).catch((err) => {
          console.log(err);
        })
      }, [data3])
  return (
    <div>
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
    </div>
  )
}

export default Dycom