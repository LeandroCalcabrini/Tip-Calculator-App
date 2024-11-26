import { useState } from 'react'
import './App.css'
import Logo from '../src/assets/img/logo.svg'

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

  const reset = () => {
    setBill('')
    setCustomTip('')
    setPeople('')
    setTip('');
  };





  return (
    <>
    <div className='logo-container'>
    <img className="logo"src={Logo} alt="" />
    </div>
    <div className='container'>
    <div className='container-left'>     
      <label htmlFor="">Bill</label>
       <input 
       className='input-bill'
        type="number"
        name='bill'
        placeholder='0'
        value={bill}
        onChange={handleChange}
      />
        <label htmlFor="">Select Tip %</label>
        <div className='container-buttons'>
        <button
        className={tip == '5' ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick('5')}>5%</button>
        <button
        className={tip == '10' ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick('10')}>10%</button>
        <button
        className={tip == '15' ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick('15')}>15%</button>
        <button
        className={tip == '25' ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick('25')}>25%</button>
        <button
        className={tip == '50' ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick('50')}>50%</button>
        <input
         className='custom-input'
         type="Number"
         placeholder='Custom'
         value={customTip}
         name='custom-tip'
         onChange={handleChange}
         onClick={()=>handleClick(customTip)}
          />
        </div>
        <label htmlFor="">Number of People</label>    
        <input 
        className='input-people'
        type="number"
        name='people-number'
        placeholder='0'
        value={people}
        onChange={handleChange} />
      </div>
    <div className='container-right'>
      <div>
        <div>
          <span>Tip Amount</span>
          <p>/ person</p>
        </div>
        <div>
          {totalTipAmount()}
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
      <button
      className='btn-reset'
      onClick={() => reset()}>RESET</button>

    </div>

    </div>
   
   

    </>
  )
}

export default App
