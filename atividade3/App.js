import { useEffect, useState } from 'react';
import TextInput from './components/TextInput';

export default function App() {

  /*
    Estudo: Introdução ao React - Parte II\hello-projeto-base
  */
 
  //STATE
  const [name, setName] = useState('Texto padrao inicial');

  //Neste caso aqui, o evento é tratado no componente. Ver a funcao handleInputChange do TextInput.js
  function handleNameChange(evento) {
    setName(evento);
  }
  
  return (
    <>
        <TextInput
          labelDescription="Digite o seu texto"
          inputValue={name}
          onInputChange={handleNameChange}
          focoAqui
        />
        <p>
          Este texto {name} contem {name.length} caracteres.
        </p>
    </>
  );
}
