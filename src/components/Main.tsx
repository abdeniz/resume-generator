import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/variables'
import DownloadButton from './DownloadButton'
import Input from './Input'
import { PDFViewer } from '@react-pdf/renderer'
import Resume from './Resume'
import Textarea from './Textarea'
import { IExperienceFields, IResumeFields } from './types'
import Experience from './Experience'

const Main = () => {
  const [fullName, setFullName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [experience, setExperience] = useState<IExperienceFields[] | []>([])

  const [resume, setResume] = useState<IResumeFields | null>(null)

  useEffect(() => {
    setResume({
      fullName: fullName,
      title: title,
      email: email,
      phoneNumber: phoneNumber,
      summary: summary,
      experience: experience,
    })
  }, [fullName, title, email, phoneNumber, summary])

  const handleExperiences = useCallback((newExperience) => {
    setExperience([newExperience])
  }, [])

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
            experience: experience,
          }}
        />
      </PDFViewer> */}

      <MainWrapper>
        <MainContent>
          <Logo>Resume Generator</Logo>

          <SectionHeader>Profile</SectionHeader>
          <ProfileWrapper>
            <Input label='Full name' setState={setFullName} />
            <Input label='Job title' setState={setTitle} />
            <Input label='Email' setState={setEmail} />
            <Input label='Phone number' setState={setPhoneNumber} />
            <Textarea label='Profile summary' setState={setSummary} />
          </ProfileWrapper>

          <SectionHeader>Experience</SectionHeader>
          <ExperienceWrapper>
            <Experience handleExperiences={handleExperiences} />
          </ExperienceWrapper>
        </MainContent>
        {/* <DownloadButton resumeFields={resume}>Download PDF</DownloadButton> */}
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

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.h1`
  margin-bottom: 64px;
`

const SectionHeader = styled.h2`
  margin-top: 32px;
  text-align: center;
`

export default Main
