import React, { useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Resume from './components/Resume'
import { createGlobalStyle } from 'styled-components'
import './reset.css'
import { colors } from './utils/variables'
import Main from './components/Main'
import { IResumeFields } from './components/types'
import DownloadButton from './components/DownloadButton'

function App() {
  const [resumeFields, setresumeFields] = useState<IResumeFields>({
    fullName: '',
    title: '',
    email: '',
    phoneNumber: '',
  })

  return (
    <div className='App'>
      <GlobalStyles />

      <Main setResumeFields={setresumeFields} />
    </div>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    box-sizing: inherit;
    background-color: ${colors.light2};
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    font-family: inherit;
  }
  
  h1 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: ${colors.dark2};
  }

`

export default App
