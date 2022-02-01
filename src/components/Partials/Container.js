import React from 'react';
import './partial.sass'

const Container = (props) => {
  const { children } = props

  return <div className='container'>{children}</div>;
}

export default Container;