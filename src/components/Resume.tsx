import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from '@react-pdf/renderer'
import { colors } from '../utils/variables'
import { IResumeFields } from './types'

Font.register({
  family: 'Poppins',
  fonts: [
    {
      src: `./fonts/Poppins-Regular.ttf`,
    },
    {
      src: `./fonts/Poppins-Medium.ttf`,
      fontWeight: 'medium',
    },
    {
      src: `./fonts/Poppins-SemiBold.ttf`,
      fontWeight: 'semibold',
    },
  ],
})

// PDF STYLES
const styles = StyleSheet.create({
  page: {
    margin: 50,
  },

  headerSection: {
    paddingBottom: '16pt',
    width: '80vw',
    borderBottom: `1px solid ${colors.dark}`,
  },

  header1: {
    fontFamily: 'Poppins',
    fontSize: '22pt',
    fontWeight: 'semibold',
    color: colors.dark,
    margin: 0,
    padding: 0,
    lineHeight: '1.2pt',
  },

  header2: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '14pt',
    letterSpacing: '2pt',
    color: colors.dark2,
    margin: 0,
    padding: 0,
    lineHeight: '1.2pt',
  },

  paragraph: {
    fontSize: '14pt',
    fontFamily: 'Poppins',
    color: colors.dark,
  },
})

interface IResume {
  resumeFields: IResumeFields | null
}

const Resume = ({ resumeFields }: IResume) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.headerSection}>
          <Text style={styles.header1}>{resumeFields?.fullName}</Text>
          <Text style={styles.header2}>{resumeFields?.title}</Text>
          <Text style={styles.paragraph}>
            {resumeFields?.phoneNumber} | {resumeFields?.email}
          </Text>
        </View>
        <View>
          <Text style={styles.paragraph}>Summary</Text>
        </View>
      </Page>
    </Document>
  )
}

export default Resume
