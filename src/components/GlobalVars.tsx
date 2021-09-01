import moment from 'moment'

// TODO: Refactor
const globalVars = {
  // If true, show a countdown until the start date; otherwise, show a teasing
  showPresaleStartDate: false,
  // If true, show the hour on the presale start date, otherwise do not show it
  showPresaleStartHour: false,
  // If true, the link in the presale header should link the the presale page, otherwise to the Telegram page
  showPresalePage: false,
  // Start of the presale
  presaleStartUTCDate: moment.utc('2021-09-17 20:00:00', 'YYYY-MM-DD HH:mm:ss')
  // End of the presale
  // presaleEndUTCDate: moment.utc('2021-11-17 20:00:00', 'YYYY-MM-DD HH:mm:ss')
}

export default globalVars
