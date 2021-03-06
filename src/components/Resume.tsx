import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from '@react-pdf/renderer'
import { format } from 'date-fns'
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
    fontSize: '18pt',
    fontWeight: 'semibold',
    color: colors.dark,
    margin: 0,
    padding: 0,
    lineHeight: '1.2pt',
  },

  header2: {
    fontFamily: 'Poppins',
    fontSize: '14pt',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: '2pt',
    color: colors.dark,
    margin: 0,
    padding: 0,
  },

  header3: {
    fontFamily: 'Poppins',
    fontSize: '14pt',
    fontWeight: 'medium',
    color: colors.dark,
    margin: 0,
    padding: 0,
  },

  paragraph: {
    fontSize: '12pt',
    fontFamily: 'Poppins',
    color: colors.dark,
  },

  section: {
    paddingVertical: '16pt',
    width: '80vw',
    borderBottom: `1px solid ${colors.dark}`,
  },

  experienceSection: {
    paddingVertical: '8pt',
  },

  date: {
    fontFamily: 'Poppins',
    fontSize: '14pt',
    color: colors.darkerLight2,
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
        <View style={styles.section}>
          <Text style={styles.header2}>Profile summary</Text>
          <Text style={styles.paragraph}>{resumeFields?.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header2}>Experience</Text>
          {resumeFields &&
            resumeFields.experience.map(
              (
                { jobTitle, employer, startDate, endDate, city, description },
                index
              ) => {
                return (
                  <View style={styles.experienceSection} key={index}>
                    <Text style={styles.header3}>
                      {jobTitle}, {employer}
                    </Text>
                    <Text style={styles.date}>
                      {startDate && format(startDate, 'MMM, y')} -{' '}
                      {endDate &&
                      format(endDate, 'MMM, y') ===
                        format(new Date(Date.now()), 'MMM, y')
                        ? 'Present'
                        : endDate && format(endDate, 'MMM, y')}
                      , {city}
                    </Text>
                    <Text style={styles.paragraph}>{description}</Text>
                  </View>
                )
              }
            )}
        </View>
      </Page>
    </Document>
  )
}

export default Resume
