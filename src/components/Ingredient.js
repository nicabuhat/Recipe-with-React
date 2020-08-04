import React from 'react';

export default function Ingredient({ name, amount }) {
    return (
        <li>
            <span>{amount}</span>
            <span>{name}</span>
        </li>
    );
}
