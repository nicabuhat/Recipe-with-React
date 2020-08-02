import React, { useState } from 'react';
import Header from './components/Header';

export const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState('red');
    return (
        <>
            <Header></Header>
        </>
    );
}

export default App;
