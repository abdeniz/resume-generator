import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/variables'

interface IInput {
  label: string
  setState: (value: string) => void
}

const Input = ({ label, setState }: IInput) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput onChange={(e) => setState(e.target.value)} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  padding: 16px 0;
`

const StyledInput = styled.input`
  padding: 16px;
  width: 300px;
  border-radius: 4px;
  border: none;
  background-color: ${colors.light};
  color: ${colors.dark};
  font-size: 16px;
  transition: border 0.2s;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${colors.light2};
  }

  &:focus {
    border-bottom: 2px solid ${colors.primary};
  }
`

const Label = styled.p`
  color: ${colors.dark2};
  font-size: 16px;
  padding: 8px;
`

export default Input
