import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

function App() {  
  return (
    <Button>
      Clique Aqui
    </Button>
  )
}

export default App
