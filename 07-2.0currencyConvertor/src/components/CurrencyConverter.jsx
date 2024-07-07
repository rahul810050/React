import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [showResult, setShowResult] = useState(false); // State to track button click

    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => {
                const currencyArray = Object.keys(data.rates);
                setCurrencies(currencyArray);
            });
    }, []);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
                .then(response => response.json())
                .then(data => {
                    setConvertedAmount((data.rates[toCurrency] * amount).toFixed(2));
                });
        }
    }, [fromCurrency, toCurrency, amount]);

    const handleConvert = () => {
        setShowResult(true); // Set showResult to true on button click
    };

    const handleCurrencyChange = () => {
        setShowResult(false); // Hide result when currency changes
    };

    return (
        <div className='bg-slate-600 bg-opacity-50 p-5 rounded-lg'>
            <h1 className='text-2xl text-yellow-400 font-bold'>Currency Converter</h1>
            <div className='flex gap-6 m-5'>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className='rounded-lg outline-none bg-orange-950 text-white p-2 text-1xl'
                />
                <select
                    value={fromCurrency}
                    onChange={(e) => {
                        setFromCurrency(e.target.value);
                        handleCurrencyChange(); // Call handleCurrencyChange on currency change
                    }}
                    className='rounded-lg outline-none bg-orange-950 text-white p-2 text-1xl'
                >
                    {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <select
                    value={toCurrency}
                    onChange={(e) => {
                        setToCurrency(e.target.value);
                        handleCurrencyChange(); // Call handleCurrencyChange on currency change
                    }}
                    className='rounded-lg outline-none bg-orange-950 text-white p-2 text-1xl'
                >
                    {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>

            <div>
                <button
                    onClick={handleConvert} // Call handleConvert on button click
                    className='text-emerald-950 font-bold py-0.5 px-2 bg-cyan-600 rounded mb-2'
                >
                    Convert
                </button>
            </div>

            {showResult && ( // Conditionally render the result based on showResult state
                <div className='flex justify-center'>
                    <h2 className='text-1xl font-bold text-yellow-400 rounded-lg pt-1 pb-1 bg-purple-700 w-80'>
                        {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
                    </h2>
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;
