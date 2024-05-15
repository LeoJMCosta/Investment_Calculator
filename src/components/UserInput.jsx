import React, { useState } from 'react';

const UserInput = ({ onCalculate }) => {
    const [inputValues, setInputValues] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });

        // Convert input values to numbers
        const numericInputValues = {
            ...inputValues,
            [name]: parseFloat(value),
        };
        onCalculate(numericInputValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert input values to numbers before passing to onCalculate function
        const numericInputValues = Object.keys(inputValues).reduce(
            (acc, key) => ({
                ...acc,
                [key]: parseFloat(inputValues[key]),
            }),
            {}
        );
        onCalculate(numericInputValues);
    };

    return (
        <div id="user-input" className="user-input">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-wrapper">
                        <label htmlFor="initialInvestment">Initial Investment:</label>
                        <input
                            type="number"
                            id="initialInvestment"
                            name="initialInvestment"
                            value={inputValues.initialInvestment}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="annualInvestment">Annual Investment:</label>
                        <input
                            type="number"
                            id="annualInvestment"
                            name="annualInvestment"
                            value={inputValues.annualInvestment}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-wrapper">
                        <label htmlFor="expectedReturn">Expected Return (%):</label>
                        <input
                            type="number"
                            id="expectedReturn"
                            name="expectedReturn"
                            value={inputValues.expectedReturn}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="duration">Duration (years):</label>
                        <input
                            type="number"
                            id="duration"
                            name="duration"
                            value={inputValues.duration}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserInput;
