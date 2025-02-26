import React, { useState } from 'react';

const TipCalculator = () => {
    // State
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(15);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    // Calculate Tip & Total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = Number(billAmount) + tipAmount;

    // Calculate Per Person
    const tipPerPerson = numberOfPeople > 0 ? tipAmount / numberOfPeople : 0;
    const totalPerPerson = numberOfPeople > 0 ? totalAmount / numberOfPeople : 0;

    // Handlers
    const handleBillChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '') {
            setBillAmount(inputValue);
            return;
        }
        const value = Math.abs(parseFloat(inputValue));
        setBillAmount(isNaN(value) ? 0 : value);
    };

    const handleTipChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '') {
            setTipPercentage(inputValue);
            return;
        }
        const value = Math.abs(parseFloat(inputValue));
        setTipPercentage(isNaN(value) ? 0 : value);
    };

    const handlePeopleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '') {
            setNumberOfPeople(inputValue);
            return;
        }
        const value = Math.abs(parseInt(inputValue, 10));
        setNumberOfPeople(isNaN(value) || value === 0 ? 1 : value);
    };

    // Increment & Decrement Handlers
    const incrementBill = () => setBillAmount(prev => prev + 1);
    const decrementBill = () => setBillAmount(prev => (prev - 1 >= 0 ? prev - 1 : 0));

    const incrementTip = () => setTipPercentage(prev => prev + 1);
    const decrementTip = () => setTipPercentage(prev => (prev - 1 >= 0 ? prev - 1 : 0));

    const incrementPeople = () => setNumberOfPeople(prev => prev + 1);
    const decrementPeople = () => setNumberOfPeople(prev => (prev - 1 >= 1 ? prev - 1 : 1));

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4">
            <h1 className="text-2xl font-bold text-center">Tip Calculator</h1>

            {/* Bill Amount */}
            <div>
                <label className="block text-gray-700 mb-2">Bill Amount ($):</label>
                <div className="flex items-center space-x-2">
                    <button onClick={decrementBill} className="px-3 py-2 bg-gray-200 rounded-lg">-</button>
                    <input 
                        type="number" 
                        value={billAmount} 
                        onChange={handleBillChange} 
                        className="w-full p-2 border rounded-lg text-center" 
                        min="0"
                    />
                    <button onClick={incrementBill} className="px-3 py-2 bg-gray-200 rounded-lg">+</button>
                </div>
            </div>

            {/* Tip Percentage */}
            <div>
                <label className="block text-gray-700 mb-2">Tip Percentage (%):</label>
                <div className="flex items-center space-x-2">
                    <button onClick={decrementTip} className="px-3 py-2 bg-gray-200 rounded-lg">-</button>
                    <input 
                        type="number" 
                        value={tipPercentage} 
                        onChange={handleTipChange} 
                        className="w-full p-2 border rounded-lg text-center" 
                        min="0"
                    />
                    <button onClick={incrementTip} className="px-3 py-2 bg-gray-200 rounded-lg">+</button>
                </div>
            </div>

            {/* Number of People */}
            <div>
                <label className="block text-gray-700 mb-2">Number of People:</label>
                <div className="flex items-center space-x-2">
                    <button onClick={decrementPeople} className="px-3 py-2 bg-gray-200 rounded-lg">-</button>
                    <input 
                        type="number" 
                        value={numberOfPeople} 
                        onChange={handlePeopleChange} 
                        className="w-full p-2 border rounded-lg text-center" 
                        min="1"
                    />
                    <button onClick={incrementPeople} className="px-3 py-2 bg-gray-200 rounded-lg">+</button>
                </div>
            </div>

            {/* Output */}
            <div className="border-t pt-4 space-y-2">
                <p className="text-lg">Tip Amount: <span className="font-bold">${tipAmount.toFixed(2)}</span></p>
                <p className="text-lg">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
                <p className="text-lg">Tip Per Person: <span className="font-bold">${tipPerPerson.toFixed(2)}</span></p>
                <p className="text-lg">Total Per Person: <span className="font-bold">${totalPerPerson.toFixed(2)}</span></p>
            </div>
        </div>
    );
};

export default TipCalculator;