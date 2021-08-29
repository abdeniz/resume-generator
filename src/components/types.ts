export interface IResumeFields {
  fullName: string
  title: string
  email: string
  phoneNumber: string
  summary: string
  experience: IExperienceFields[] | []
}

export interface IExperienceFields {
  jobTitle: string
  employer: string
  startDate: Date | null
  endDate: Date | null
  city: string
  description: string
}
