import React, { useState } from 'react';
import './App.css';
import Navbar1 from './components/Navbar1';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import '../src/components/Amazon.css'

function App() {
  const [show, setshow] = useState(true)
  const [cart, setcart] = useState([])
  const [warning, setwarning] = useState(false)
  const handleClick=(item)=>{
      let isPresent = false;
      cart.forEach((product)=>{
        if(item.id === product.id)
        isPresent = true;

      })
      if (isPresent){

        setwarning(true);
        setTimeout(()=>{
          setwarning(false)
        },2000);
        return
      }
         
      setcart([...cart,item]);


  }
  const handleChange = (item,d)=>{
      let ind = -1;
      cart.forEach((data, index)=>{
        if (data.id === item.id)
          ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount += d;
      
      if (tempArr[ind].amount === 0)
        tempArr[ind].amount = 1;
      setcart([...tempArr])
  };
  return (
   <React.Fragment>
      <Navbar1 size={cart.length} setshow={setshow}/>
      {
        show ? <Amazon handleClick={handleClick}/> :<Cart  cart={cart} setcart={setcart} handleChange={handleChange}/>

      }
    {
      warning && <div className='warning'> item is already in the cart!!</div>
    }
   </React.Fragment>
      
  )
  }

export default App;
