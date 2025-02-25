import React, { useState } from 'react';

const TipCalculator = () => {
    // State
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(15);

    // Calculate Tip & Total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = Number(billAmount) + tipAmount;

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

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4">
            <h1 className="text-2xl font-bold text-center">Tip Calculator</h1>

            <div>
                <label className="block text-gray-700 mb-2">Bill Amount ($):</label>
                <input 
                    type="number" 
                    value={billAmount} 
                    onChange={handleBillChange} 
                    className="w-full p-2 border rounded-lg" 
                    min="0"
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-2">Tip Percentage (%):</label>
                <input 
                    type="number" 
                    value={tipPercentage} 
                    onChange={handleTipChange} 
                    className="w-full p-2 border rounded-lg" 
                    min="0"
                />
            </div>

            <div className="border-t pt-4 space-y-2">
                <p className="text-lg">Tip Amount: <span className="font-bold">${tipAmount.toFixed(2)}</span></p>
                <p className="text-lg">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
            </div>
        </div>
    );
};

export default TipCalculator;