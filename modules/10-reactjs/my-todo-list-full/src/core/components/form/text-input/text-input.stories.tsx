import React from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}

export const base = () => (
  <TextInput value={'Hola'} label="Nombre y Apellidos" onChange={() => {}}></TextInput>
)
