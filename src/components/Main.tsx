import { PDFViewer } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/variables'
import DownloadButton from './DownloadButton'
import Input from './Input'
import Resume from './Resume'
import Textarea from './Textarea'
import { IResumeFields } from './types'

const Main = () => {
  const [fullName, setFullName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [summary, setSummary] = useState<string>('')

  const [resume, setResume] = useState<IResumeFields | null>(null)

  useEffect(() => {
    setResume({
      fullName: fullName,
      title: title,
      email: email,
      phoneNumber: phoneNumber,
      summary: summary,
    })
  }, [fullName, title, email, phoneNumber, summary])

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
          <Logo>Resume Generator</Logo>

          <SectionHeader>Profile</SectionHeader>
          <ProfileWrapper>
            <Input label='Full name' setState={setFullName} />
            <Input label='Title' setState={setTitle} />
            <Input label='Email' setState={setEmail} />
            <Input label='Phone number' setState={setPhoneNumber} />
            <Textarea label='Profile summary' setState={setSummary} />
          </ProfileWrapper>
        </MainContent>
        <DownloadButton resumeFields={resume}>Download PDF</DownloadButton>
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

const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Logo = styled.h1`
  margin-bottom: 64px;
`

const SectionHeader = styled.h2`
  margin-bottom: 8px;
  text-align: center;
`

export default Main
