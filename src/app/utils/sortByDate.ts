import { makeDateFormat } from './makeDateFormat'

export const sortByDate = (array: any[], item: string, order: string) => {
  return array.sort((a, b) => {
    return (
      Date.parse(makeDateFormat(order === 'desc' ? a[item] : b[item])) -
      Date.parse(makeDateFormat(order === 'desc' ? b[item] : a[item]))
    )
  })
}
