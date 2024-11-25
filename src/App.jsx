import { useState } from 'react'
import './App.css'

function App() {
  const [bill,setBill] = useState('');
  const [people,setPeople] = useState('');
  const [customTip,setCustomTip] = useState('');
  const [tip,setTip] = useState('');

 



  const handleChange = (e) =>{
    const {name,value} = e.target;
    if(name === 'bill'){
      setBill(value)
    }
    if(name === 'people-number'){
      setPeople(value)
    }
    if(name === 'custom-tip'){
      setTip(value)
      setCustomTip(value)
    }

  };

  const handleClick = (value) =>{
    setTip(value);
  }

  const totalTipAmount = () => {
    let tipPerson = 0;
    const billAmount = parseFloat(bill);
    const numPeople = parseInt(people);
    const tipPercentage = parseFloat(tip)
    if(numPeople > 0){
      tipPerson = (billAmount*tipPercentage/100) / numPeople
    }
    return <strong>$ {tipPerson.toFixed(2)}</strong>

  }

  const totalAmount = () =>{
    let total = 0;
    const billAmount = parseFloat(bill);
    const numPeople = parseInt(people);
    const tipPercentage = parseFloat(tip)

  if(numPeople > 0){
    total = ((billAmount*tipPercentage/100) + billAmount) /numPeople
  }
  return <strong>$ {total.toFixed(2)}</strong>

  }

 
  
  return (
    <>
    <div className='container'>
    <div className='container-left'>
      <div>
      <label htmlFor="">Bill</label>
       <input 
        type="number"
        name='bill'
        placeholder='0'
        value={bill}
        onChange={handleChange}
      />
      <div className='select-tip'>
        <label htmlFor="">Select Tip %</label>
        <button
        onClick={()=>handleClick('5')}>5%</button>
        <button
        onClick={()=>handleClick('10')}>10%</button>
        <button
        onClick={()=>handleClick('15')}>15%</button>
        <button
        onClick={()=>handleClick('25')}>25%</button>
        <button
        onClick={()=>handleClick('50')}>50%</button>
        <input
         type="Number"
         placeholder='Custom'
         name='custom-tip'
         onChange={handleChange}
         onClick={()=>handleClick(customTip)}
          />
      </div>
      <div className='number-people'>
        <label htmlFor="">Number of People</label>
        <input 
        type="number"
        name='people-number'
        onChange={handleChange} />
      </div>
      </div>
    </div>
    <div className='container-right'>
      <div>
        <div>
          <span>Tip Amount</span>
          <p>/ person</p>
        </div>
        <div>
          <strong
          >{totalTipAmount()}</strong>
        </div>
      </div>
      <div>
        <div>
          <span>Total</span>
          <p>/ person</p>
        </div>
        <div>
          {totalAmount()}
        </div>
      </div>
      <button>RESET</button>

    </div>

    </div>
   
   

    </>
  )
}

export default App
