import { Input } from './Input';
import { Section } from './Section';
import { useState } from 'react';


function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="App">
      <Section
        colorValue={colorValue}
        hexValue={hexValue}
        isDark={isDark}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
