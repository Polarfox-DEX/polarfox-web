import memberJobs from "./MemberJobs";
import memberJob from '../map/MemberJobInterface'

export interface TeamMemberInterface{
    job: memberJob,
    position: number[],
    name: string,
    country: any
}