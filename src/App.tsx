import React from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import Resume from './components/Resume'

function App() {
  return (
    <div className='App'>
      <PDFViewer style={{ width: '50vw', height: '100vh' }}>
        <Resume />
      </PDFViewer>

      <PDFDownloadLink
        document={<Resume />}
        fileName='movielist.pdf'
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a',
        }}
      >
        Download
      </PDFDownloadLink>
    </div>
  )
}

export default App
