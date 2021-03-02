import React from 'react';

export interface IButtonProps {
  name?: string;
  handler?: (ev: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: IButtonProps) {
  return (
    <button
      type={props.type || 'button'}
      className="button"
      onClick={props.handler}
    >
      {props.name || ''}
    </button>
  );
}
