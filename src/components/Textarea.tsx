import styled from 'styled-components'
import { colors } from '../utils/variables'

interface ITextarea {
  label: string
  setState: (value: string) => void
}

const Textarea = ({ label, setState }: ITextarea) => {
  return (
    <TextareaWrapper>
      <Label>{label}</Label>
      <StyledTextarea onChange={(e) => setState(e.target.value)} />
    </TextareaWrapper>
  )
}

const TextareaWrapper = styled.div`
  padding: 16px 0;
  width: 100%;
`

const StyledTextarea = styled.textarea`
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  height: 150px;
  border: none;
  background-color: ${colors.light};
  color: ${colors.dark};
  font-size: 16px;
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  resize: none;

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

export default Textarea
