import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Textarea from './Textarea'
import { IExperienceFields } from './types'
import DatePicker from 'react-datepicker'
import { colors } from '../utils/variables'

interface IExperience {
  handleExperiences: (experiences: IExperienceFields) => void
}

const Experience = ({ handleExperiences }: IExperience) => {
  const [jobTitle, setjobTitle] = useState<string>('')
  const [employer, setEmployer] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    handleExperiences({
      jobTitle: jobTitle,
      employer: employer,
      city: city,
      description: description,
      startDate: startDate,
      endDate: endDate,
    })
  }, [
    jobTitle,
    employer,
    city,
    description,
    startDate,
    endDate,
    handleExperiences,
  ])

  return (
    <ExperienceWrapper>
      <Input label='Job title' setState={setjobTitle} fullWidth />
      <Input label='Employer' setState={setEmployer} fullWidth />
      <Input label='City' setState={setCity} fullWidth />
      <Textarea label='Description' setState={setDescription} />

      <DateWrapper>
        <DateContent>
          <Label>Start date</Label>
          <DatePicker
            onChange={(date) => {
              date instanceof Date && setStartDate(date)
            }}
            selected={startDate}
            dateFormat='MMMM yyyy'
            showMonthYearPicker
            wrapperClassName='datepicker-wrapper'
          />
        </DateContent>
        <DateContent>
          <Label>End date</Label>
          <DatePicker
            onChange={(date) => {
              date instanceof Date && setEndDate(date)
            }}
            selected={endDate}
            dateFormat='MMMM yyyy'
            showMonthYearPicker
            wrapperClassName='datepicker-wrapper'
          />
        </DateContent>
      </DateWrapper>
    </ExperienceWrapper>
  )
}

const ExperienceWrapper = styled.div`
  width: 100%;
`

const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DateContent = styled.div`
  width: 49%;
`

const Label = styled.p`
  color: ${colors.dark2};
  font-size: 16px;
  padding: 8px;
`

export default Experience
