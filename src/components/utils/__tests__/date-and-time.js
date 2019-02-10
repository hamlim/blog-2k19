import { parseDate, monthNumberToMonthName } from '../date-and-time.js'

test('parseDate returns a date object', () => {
  const mockDate = '07-20-1994'
  expect(parseDate(mockDate)).toMatchInlineSnapshot(`1994-07-20T04:00:00.000Z`)
})
