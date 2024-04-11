import React, { useState } from 'react';
import './Table1.css'; 
import { renderToPipeableStream } from 'react-dom/server';

const data = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
  
  
  
  
  
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Status</th>
              <th>Method</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.invoice}</td>
                <td>{item.status}</td>
                <td>{item.method}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">Total</td>
              <td>$2,500.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;