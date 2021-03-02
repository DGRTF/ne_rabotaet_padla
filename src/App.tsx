import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';

ReactDOM.render(
  <Button name="Name" handler={() => { alert('alert'); }} />,
  document.getElementById('root'),
);
