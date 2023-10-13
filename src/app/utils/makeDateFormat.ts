export function makeDateFormat(string: string) {
  let obj = string.split('.')
  let t = obj[0]
  obj[0] = obj[1]
  obj[1] = t
  return obj.join('.')
}
