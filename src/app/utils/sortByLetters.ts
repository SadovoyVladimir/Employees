export const sortByLetters = (array: any[], item: string, order: string) => {
  return array.sort((a, b) => {
    if (order === 'desc') {
      return a[item] > b[item] ? 1 : -1
    } else {
      return b[item] > a[item] ? 1 : -1
    }
  })
}
