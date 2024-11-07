import React, { useState } from 'react';

const initialData = [
    {
        id: 'a',
        label: 'Electronics',
        value: 1500,
        originalValue: 1500,
        children: [
            { id: 'a1', label: 'Phones', value: 800, originalValue: 800 },
            { id: 'a2', label: 'Laptops', value: 700, originalValue: 700 }
        ]
    },
    {
        id: 'b',
        label: 'Furniture',
        value: 1000,
        originalValue: 1000,
        children: [
            { id: 'b1', label: 'Tables', value: 300, originalValue: 300 },
            { id: 'b2', label: 'Chairs', value: 700, originalValue: 700 }
        ]
    }
];

const TableRow = ({ row, onUpdate, level = 0 }) => {
    const [input, setInput] = useState('');
    
    const handleAllocationPercentage = () => {
        const percentage = parseFloat(input) / 100;
        const newValue = row.value + row.value * percentage;
        onUpdate(row.id, newValue);
        setInput('');
    };
    
    const handleAllocationValue = () => {
        const newValue = parseFloat(input);
        onUpdate(row.id, newValue);
        setInput('');
    };

    const variance = ((row.value - row.originalValue) / row.originalValue * 100).toFixed(2);

    return (
        <>
            <tr>
                <td>{'-- '.repeat(level) + row.label}</td>
                <td>{row.value}</td>
                <td>
                    <input 
                        type="number" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                </td>
                <td>
                    <button onClick={handleAllocationPercentage}>Allocation %</button>
                </td>
                <td>
                    <button onClick={handleAllocationValue}>Allocation Val</button>
                </td>
                <td>{variance}%</td>
            </tr>
            {row.children && row.children.map(child => (
                <TableRow 
                    key={child.id} 
                    row={child} 
                    onUpdate={onUpdate} 
                    level={level + 1} 
                />
            ))}
        </>
    );
};

const HierarchicalTable = () => {
    const [data, setData] = useState(initialData);

    const updateRowValue = (id, newValue) => {
        const updateData = (rows) => {
            return rows.map(row => {
                if (row.id === id) {
                    return { ...row, value: newValue };
                } else if (row.children) {
                    const updatedChildren = updateData(row.children);
                    const newTotal = updatedChildren.reduce((acc, child) => acc + child.value, 0);
                    return { ...row, children: updatedChildren, value: newTotal };
                }
                return row;
            });
        };
        setData(updateData(data));
    };

    const grandTotal = data.reduce((acc, row) => acc + row.value, 0);

    return (
        <table>
            <thead>
                <tr>
                    <th>Label</th>
                    <th>Value</th>
                    <th>Input</th>
                    <th>Allocation %</th>
                    <th>Allocation Val</th>
                    <th>Variance %</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <TableRow key={row.id} row={row} onUpdate={updateRowValue} />
                ))}
                <tr>
                    <td><strong>Grand Total</strong></td>
                    <td>{grandTotal}</td>
                    <td colSpan="4"></td>
                </tr>
            </tbody>
        </table>
    );
};

export default HierarchicalTable;
