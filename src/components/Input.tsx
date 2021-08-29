import styled from 'styled-components'
import { colors } from '../utils/variables'

interface IInput {
  label: string
  setState: (value: string) => void
  fullWidth?: boolean
}

const Input = ({ label, setState, fullWidth }: IInput) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      <Label>{label}</Label>
      <StyledInput onChange={(e) => setState(e.target.value)} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  padding: 16px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '49%')};

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

const StyledInput = styled.input`
  padding: 16px;
  width: 100%;
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
