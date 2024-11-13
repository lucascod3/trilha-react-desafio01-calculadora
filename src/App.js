import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      executeOperation();
      setOperation(op);
    }
  };

  const executeOperation = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(currentNumber);
      let result = 0;

      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Error';
          break;
        default:
          break;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={executeOperation} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
