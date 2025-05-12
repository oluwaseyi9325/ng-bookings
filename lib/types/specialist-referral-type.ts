export interface Referral {
  referralId: number
  patientName: string
  status: 'Accepted' | 'Rejected' | 'Pending'
  referringProvider: string
  receivingProvider: string
  dateReferred: string
  index: number
}
