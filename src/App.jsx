import { useState } from 'react';
import Input from './Component/input.jsx';  
import useCurrencyInfo from './Hooks/useCurrencyInfo.js';

function App() {
  const [to, setTo] = useState('inr');
  const [from, setFrom] = useState('usd');
  const [result, setResult] = useState('');
  const [amount, setAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleFrom = (value) => {
    setFrom(value);
  };

  const handleTo = (value) => {
    setTo(value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertedResult = () => {
    if (to !== '' && from !== '') {
      setResult(`convert ${amount} ${from} to ${to} = ${currencyInfo[to] * amount}`);
    } else {
      setResult('');
    }
  };

  const resetResult = () => {
    setAmount(0);
    setFrom('usd');
    setTo('inr');
    setResult('');
  };

  return (
    <>
      <div className='text-center text-2xl sm:text-5xl sm:p-4' style={{ fontFamily: 'cursive' }}>
        Currency Converter
      </div>
      <div className='bg-gray-500 h-96 min-w-[100px] m-10 sm:justify-items-center'>
        <div className='grid p-6'>
          <div className='text-white'>Amount to Convert</div>
          <div className='pt-2'>
            <input
              type='number'
              placeholder='0.0'
              className='p-2 w-full border border-gray-500 focus:border-blue-500 focus:outline-none'
              value={amount}
              min={0}
              onChange={(e) => handleAmount(e)}
            />
          </div>
          <div className='grid gap-2 sm:grid-cols-2 '>
            <Input
              type='From'
              className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              placeholder='Select One...'
              currencyOptions={options}
              set={handleFrom}
              fromTo={from}
            />
            <Input
              type='To'
              className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              placeholder='Select One...'
              currencyOptions={options}
              set={handleTo}
              fromTo={to}
            />
          </div>
          <div className='grid grid-cols-2 m-3 justify-items-center gap-2'>
            <div>
              <button className='bg-blue-500 h-10 w-24 text-white' onClick={convertedResult}>
                Convert
              </button>
            </div>
            <div>
              <button className='bg-blue-500 h-10 w-24 text-white text-lg' onClick={resetResult}>
                Reset
              </button>
            </div>
          </div>
          <div className='grid justify-items-center m-2 sm:text-4xl' style={{ fontFamily: 'cursive' }}>
            {result}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;