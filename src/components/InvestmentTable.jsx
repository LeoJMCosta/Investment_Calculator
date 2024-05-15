import React from 'react';
import { formatter } from "../util/investment";

const InvestmentTable = ({ investmentData }) => {
    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest per Year</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.interest * (index + 1))}</td>
                            <td>{formatter.format(data.valueEndOfYear - data.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestmentTable;
