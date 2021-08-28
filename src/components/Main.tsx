import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/variables'
import DownloadButton from './DownloadButton'
import Input from './Input'
import { IResumeFields } from './types'

interface IMain {
  setResumeFields: (resumeFields: IResumeFields) => void
}

const Main = ({ setResumeFields }: IMain) => {
  const [fullName, setFullName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  useEffect(() => {
    setResumeFields({
      fullName: fullName,
      title: title,
      email: email,
      phoneNumber: phoneNumber,
    })
  }, [fullName, title, email, phoneNumber, setResumeFields])

  return (
    <MainWrapper>
      <MainContent>
        <Header>Resume Generator</Header>
        <InputWrapper>
          <Input label='Full name' setState={setFullName} />
          <Input label='Title' setState={setTitle} />
          <Input label='Email' setState={setEmail} />
          <Input label='Phone number' setState={setPhoneNumber} />
        </InputWrapper>
      </MainContent>
      <DownloadButton
        resumeFields={{
          fullName: fullName,
          title: title,
          email: email,
          phoneNumber: phoneNumber,
        }}
      >
        Download PDF
      </DownloadButton>
    </MainWrapper>
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
