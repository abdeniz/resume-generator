import { pdf } from '@react-pdf/renderer'
import React from 'react'
import styled from 'styled-components'
import Resume from './Resume'
import { IResumeFields } from './types'
import { saveAs } from 'file-saver'
import { colors } from '../utils/variables'

interface IDownloadButton {
  resumeFields: IResumeFields
  children: string
}

const DownloadButton = ({ resumeFields, children }: IDownloadButton) => {
  return (
    <Button
      onClick={async () => {
        const doc = <Resume resumeFields={resumeFields} />
        const asPdf = pdf() // {} is important, throws without an argument
        asPdf.updateContainer(doc)
        const blob = await asPdf.toBlob()
        saveAs(blob, 'document.pdf')
      }}
    >
      {children}
    </Button>
  )
}

const Button = styled.button`
  border: none;
  background-color: ${colors.primary};
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid ${colors.dark};
  margin-top: 16px;
  text-align: center;
`

export default DownloadButton
