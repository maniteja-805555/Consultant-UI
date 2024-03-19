import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/kivyo'

export const listConsultants = () => axios.get(REST_API_BASE_URL+'/consultants')

export const createConsultant = (consultant) => axios.post(REST_API_BASE_URL+'/consultants', consultant)

export const deleteConsultants = (consultantId) => axios.delete(REST_API_BASE_URL+'/consultants/'+consultantId)

export const listApplications = () => axios.get(REST_API_BASE_URL+'/applications')
 
export const createApplications = (application) => axios.post(REST_API_BASE_URL+'/applications', application)

export const deleteApplications = (applicationId) => axios.delete(REST_API_BASE_URL+'/applications/'+applicationId)
