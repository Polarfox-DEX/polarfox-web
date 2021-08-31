import moment from 'moment'

const globalVars = {
  showPresaleStartDate: false, //if true show a countdown until start date otherwise show teasing
  presaleStartUTCDate: moment.utc('2021-08-20 11:00:00', 'YYYY-MM-DD HH:mm:ss'),
  presaleEndUTCDate: moment.utc('2021-08-24 12:00:00', 'YYYY-MM-DD HH:mm:ss')
}

export default globalVars
