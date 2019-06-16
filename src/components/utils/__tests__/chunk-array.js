import { chunkArray } from '../chunk-array'

test('it chunks the array correctly', () => {
  let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(chunkArray(original)).toMatchInlineSnapshot(`
            Array [
              Array [
                1,
                2,
                3,
                4,
                5,
              ],
              Array [
                6,
                7,
                8,
                9,
                10,
              ],
            ]
      `)
})

test('it preserves the order correctly', () => {
  expect(
    chunkArray([
      '06-02-2019',
      '06-01-2019',
      '05-19-2019',
      '03-01-2019',
      '02-22-2019',
      '02-18-2019',
      '02-10-2019',
      '02-06-2019',
      '02-03-2019',
      '01-26-2019',
      '12-26-2018',
      '12-24-2018',
    ])
  ).toMatchInlineSnapshot(`
    Array [
      Array [
        "06-02-2019",
        "06-01-2019",
        "05-19-2019",
        "03-01-2019",
        "02-22-2019",
      ],
      Array [
        "02-18-2019",
        "02-10-2019",
        "02-06-2019",
        "02-03-2019",
        "01-26-2019",
      ],
      Array [
        "12-26-2018",
        "12-24-2018",
      ],
    ]
  `)
})
