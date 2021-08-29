import { PDFViewer } from '@react-pdf/renderer'
import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/variables'
import DownloadButton from './DownloadButton'
import Input from './Input'
import Resume from './Resume'
import Textarea from './Textarea'

const Main = () => {
  const [fullName, setFullName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [summary, setSummary] = useState<string>('')

  return (
    <>
      {/* <PDFViewer style={{ width: '100vw', height: '100vh' }}>
        <Resume
          resumeFields={{
            fullName: fullName,
            title: title,
            email: email,
            phoneNumber: phoneNumber,
            summary: summary,
          }}
        />
      </PDFViewer> */}
      <MainWrapper>
        <MainContent>
          <Header>Resume Generator</Header>
          <InputWrapper>
            <Input label='Full name' setState={setFullName} />
            <Input label='Title' setState={setTitle} />
            <Input label='Email' setState={setEmail} />
            <Input label='Phone number' setState={setPhoneNumber} />
            <Textarea label='Profile summary' setState={setSummary} />
          </InputWrapper>
        </MainContent>
        <DownloadButton
          resumeFields={{
            fullName: fullName,
            title: title,
            email: email,
            phoneNumber: phoneNumber,
            summary: summary,
          }}
        >
          Download PDF
        </DownloadButton>
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 90px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    height: 100vh;
    width: 100vw;
    padding: 30px;
  }
`

const MainContent = styled.div``

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Header = styled.h1`
  margin-bottom: 16px;
`

export default Main
