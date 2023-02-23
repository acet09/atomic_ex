import React from 'react';
import PrimaryButton from './PrimaryButton';

const CardPreset = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <PrimaryButton
        label={props.linklLabel}
        handelClick={props.handelClick}
      />
    </div>
  )
}

export default CardPreset