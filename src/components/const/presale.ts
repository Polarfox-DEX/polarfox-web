import moment from 'moment'

// If true, show the presale header, otherwise show nothing
export const SHOW_PRESALE_HEADER = true

// If true, show a countdown until the start date; otherwise, show a teasing
export const SHOW_PRESALE_START_DATE = false

// If true, show the hour on the presale start date, otherwise do not show it
export const SHOW_PRESALE_START_HOUR = false

// If true, the link in the presale header should link the the presale page, otherwise to the Telegram page
export const SHOW_PRESALE_PAGE = false

// Start of the presale
export const PRESALE_START_UTC_DATE = moment.utc('2021-09-17 20:00:00', 'YYYY-MM-DD HH:mm:ss')

// End of the presale
export const PRESALE_END_UTC_DATE = moment.utc('2021-11-17 20:00:00', 'YYYY-MM-DD HH:mm:ss')
