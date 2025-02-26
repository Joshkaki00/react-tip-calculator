import React, { useState } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(15);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = Number(billAmount) + tipAmount;

    const tipPerPerson = numberOfPeople > 0 ? tipAmount / numberOfPeople : 0;
    const totalPerPerson = numberOfPeople > 0 ? totalAmount / numberOfPeople : 0;

    const handleBillChange = (e) => {
        const value = Math.abs(parseFloat(e.target.value)) || 0;
        setBillAmount(value);
    };

    const handleTipChange = (e) => {
        const value = Math.abs(parseFloat(e.target.value)) || 0;
        setTipPercentage(value);
    };

    const handlePeopleChange = (e) => {
        const value = Math.max(1, Math.abs(parseInt(e.target.value, 10)) || 1);
        setNumberOfPeople(value);
    };

    const increment = (setter) => setter((prev) => prev + 1);
    const decrement = (setter, min = 0) => setter((prev) => Math.max(min, prev - 1));

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg grid grid-cols-2 gap-8 border border-gray-200">
            {/* Left Column: Inputs */}
            <div className="space-y-6 border-r border-gray-200 pr-8">
                <h1 className="text-2xl font-bold text-gray-700">Tip Calculator</h1>

                {/* Bill Amount */}
                <div>
                    <label className="block text-gray-500 mb-2">Bill Amount ($)</label>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => decrement(setBillAmount)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">-</button>
                        <input 
                            type="number" 
                            value={billAmount} 
                            onChange={handleBillChange} 
                            className="w-full p-2 border rounded-lg text-center text-xl font-medium" 
                            min="0"
                        />
                        <button onClick={() => increment(setBillAmount)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">+</button>
                    </div>
                </div>

                {/* Tip Percentage */}
                <div>
                    <label className="block text-gray-500 mb-2">Tip Percentage (%)</label>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => decrement(setTipPercentage)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">-</button>
                        <input 
                            type="number" 
                            value={tipPercentage} 
                            onChange={handleTipChange} 
                            className="w-full p-2 border rounded-lg text-center text-xl font-medium" 
                            min="0"
                        />
                        <button onClick={() => increment(setTipPercentage)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">+</button>
                    </div>

                    {/* Preset Tip Buttons */}
                    <div className="flex justify-center space-x-2 mt-3">
                        {[10, 15, 18, 20].map((tip) => (
                            <button 
                                key={tip}
                                onClick={() => setTipPercentage(tip)} 
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                {tip}%
                            </button>
                        ))}
                    </div>
                </div>

                {/* Number of People */}
                <div>
                    <label className="block text-gray-500 mb-2">Number of People</label>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => decrement(setNumberOfPeople, 1)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">-</button>
                        <input 
                            type="number" 
                            value={numberOfPeople} 
                            onChange={handlePeopleChange} 
                            className="w-full p-2 border rounded-lg text-center text-xl font-medium" 
                            min="1"
                        />
                        <button onClick={() => increment(setNumberOfPeople)} className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200">+</button>
                    </div>
                </div>
            </div>

            {/* Right Column: Output */}
            <div className="space-y-6 pt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xl font-medium text-gray-500">Tip</div>
                        <div className="text-sm text-gray-400">per person</div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900">${tipPerPerson.toFixed(2)}</div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xl font-medium text-gray-500">Total</div>
                        <div className="text-sm text-gray-400">per person</div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900">${totalPerPerson.toFixed(2)}</div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                    <p className="text-lg text-gray-500">Total Tip: <span className="font-bold">${tipAmount.toFixed(2)}</span></p>
                    <p className="text-lg text-gray-500">Total Bill: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;