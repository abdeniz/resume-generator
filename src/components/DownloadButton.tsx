import { pdf } from '@react-pdf/renderer'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Resume from './Resume'
import { IResumeFields } from './types'
import { saveAs } from 'file-saver'
import { colors } from '../utils/variables'
import { useState } from 'react'

interface IDownloadButton {
  resumeFields: IResumeFields
  children: string
}

const DownloadButton = ({ resumeFields, children }: IDownloadButton) => {
  const [filled, setFilled] = useState(false)

  console.log(filled)

  useEffect(() => {
    for (const property in resumeFields) {
      if (resumeFields[property as keyof IResumeFields]) {
        setFilled(true)
      } else {
        setFilled(false)
        break
      }
    }
  }, [resumeFields])

  return (
    <Button
      filled={filled}
      onClick={async () => {
        const doc = <Resume resumeFields={resumeFields} />
        const asPdf = pdf() // {} is important, throws without an argument
        asPdf.updateContainer(doc)
        const blob = await asPdf.toBlob()
        saveAs(blob, 'resume.pdf')
      }}
      disabled={!filled}
    >
      {children}
    </Button>
  )
}

interface IButton {
  filled: boolean
}

const Button = styled.button<IButton>`
  border: none;
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 16px;
  text-align: center;

  border-bottom: 2px solid ${colors.dark};
  color: ${colors.white};
  cursor: pointer;

  background-color: ${({ filled }) => (filled ? colors.primary : colors.dark)};
  cursor: ${({ filled }) => (filled ? 'pointer' : 'not-allowed')};
  color: ${({ filled }) => (filled ? colors.dark : colors.darkerLight2)};

  transition: 0.2s all;
`

export default DownloadButton
