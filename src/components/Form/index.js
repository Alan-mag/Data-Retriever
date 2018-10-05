import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const FormTemplate = (props) => (
  <div>
    <iframe src={props.url} width='100%' height={props.height} frameBorder="0" overflow-style="none"
    overflow="auto" marginHeight="0" marginWidth="0">Loading...</iframe>
  </div>
)

export default FormTemplate;