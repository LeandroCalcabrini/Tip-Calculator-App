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
      const billValue = parseFloat(value);
      if(billValue > 0){
        setBill(billValue)
      }
    }

    if (name === 'people-number'){
      const peopleValue = parseInt(value);
      if(peopleValue >= 0){
        setPeople(peopleValue);
      }
    
    } 

    if(name === 'custom-tip'){
      const valueCustomTip = parseFloat(value);
      if(valueCustomTip > 0){
        setTip(valueCustomTip)
        setCustomTip(valueCustomTip)
      }

    }
  };

  const handleClick = (value) =>{
    const tipValue = parseInt(value)
    setTip(tipValue);
  }

  const totalTipAmount = () => {
    let tipPerson = 0;
    if(people > 0 && tip > 0){
      tipPerson = (bill*tip/100) / people
    }
    return <strong className='number'>${tipPerson.toFixed(2)}</strong>

  }

  const totalAmount = () =>{
    let total = 0;
  if(people > 0){
    total = ((bill*tip/100) + bill) /people
  }
  return <strong className='number'>${total.toFixed(2)}</strong>

  }

  const reset = () => {
    setBill('')
    setCustomTip('')
    setPeople('')
    setTip('');
  };

  const error = ()=>{
    if(people === 0){
      return <p className='text-error'>Can't be zero</p>
    }else return null
  }

  const isButtonDisabled = () => {
    const billValue = parseFloat(bill);
    const peopleValue = parseInt(people);
    const tipValue = parseFloat(tip)
    
    return billValue <= 0 || peopleValue <= 0 || tipValue <= 0 ||isNaN(billValue) || isNaN(peopleValue) ||isNaN(tipValue)
  }



  return (
    <>
    <div className='logo-container'>
    <img className="logo"src={Logo} alt="" />
    </div>
    <div className='container'>
    <div className='container-left'>
      <div className='subcontainer'>
      <label htmlFor="">Bill</label>
       <input 
       className='input-bill'
        type="number"
        name='bill'
        placeholder='0'
        value={bill}
        onChange={handleChange}
      />
      </div> 
      <div className='subcontainer'>
      <label htmlFor="">Select Tip %</label>
        <div className='container-buttons'>
        <button
        className={tip == 5 ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick(5)}>5%</button>
        <button
        className={tip == 10 ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick(10)}>10%</button>
        <button
        className={tip == 15 ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick(15)}>15%</button>
        <button
        className={tip == 25 ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick(25)}>25%</button>
        <button
        className={tip == 50 ? 'button-tip active' : 'button-tip'}
        onClick={()=>handleClick(50)}>50%</button>
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
      </div>
        <div className='subcontainer'>
          <div className='container-people'>
          <label htmlFor="">Number of People</label>
          {error()}
          </div>
        <input 
        className={people === 0 ? 'input-people active' : 'input-people'}
        type="number"
        name='people-number'
        placeholder='0'
        value={people}
        onChange={handleChange} />   
        </div>
      </div>
    <div className='container-right'>
      <div>
      <div className='container-total'>
        <div>
          <span className='text'>Tip Amount</span>
          <p className='text-person'>/ person</p>
        </div>
        <div>
          {totalTipAmount()}
        </div>
      </div>
      <div className='container-total'>
        <div>
          <span className='text'>Total</span>
          <p className='text-person'>/ person</p>
        </div>
        <div>
          {totalAmount()}
        </div>
      </div>
      </div>
      <button
      disabled={isButtonDisabled()}
      className='btn-reset'
      onClick={() => reset()}>RESET
      </button> 
    </div>

    </div>
   
   

    </>
  )
}

export default App
