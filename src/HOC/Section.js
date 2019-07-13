import React from 'react';

const section = props => {
  return <section id={props.id}>{props.children}</section>;
};

export default section;
