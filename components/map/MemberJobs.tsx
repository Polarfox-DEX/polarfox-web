import memberJob from '../map/MemberJobInterface'

enum jobsAvailable{
    LEAD_DEV,
    DEV,
    MARKETER,
    CEO
}

let memberJobs: { [key in jobsAvailable] : memberJob} = {

    [jobsAvailable.LEAD_DEV]: { color: "#0130A6", jobName: "Lead Developer" },
    [jobsAvailable.DEV]: {color: "#1B4ECE", jobName: "Developer"},
    [jobsAvailable.MARKETER]: {color: "#F3A837", jobName: "Marketer"},
    [jobsAvailable.CEO]: {color: "#FD7A01", jobName: "CEO"},

}
    
export default memberJobs;