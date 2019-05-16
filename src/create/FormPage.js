import React from 'react';
import Form from './Form';

function FormPage({ onCreateCard, history }) {
  return <Form onCreateCard={onCreateCard} history={history} />;
}

export default FormPage;
