import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'

const cx = bind(styles)

<<<<<<< HEAD
// 355808

interface Props {
  label: string
  value: string
  onChange(value: string): void
}

export const TextInput: React.FunctionComponent<Props> = ({ label, value, onChange }) => {
  return (
    <label>
      {label}
      <input
        className={cx('input')}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
    </label>
  )
=======
export const TextInput: React.FunctionComponent<Input<string>> = props => {
  return <BaseInput {...props} type={'text'} />
>>>>>>> dd3b7e54aa5167768189618eeb2a7a2348b27a72
}
