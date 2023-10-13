export function validator(
  data: { [key: string]: any },
  config: { [key: string]: any }
) {
  const errors: { [key: string]: string } = {}
  function validate(
    validateMethod: string,
    data: any,
    config: { [key: string]: any }
  ) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired': {
        if (typeof data === 'boolean' || typeof data === 'number') {
          statusValidate = !data
        } else if (typeof data === 'string') {
          statusValidate = data.trim() === ''
        }
        break
      }
      case 'consistOfLetters': {
        let newData = data.split(' ').join('')
        const capitalRegExp = /^[a-zA-Zа-яА-Я]+$/g
        statusValidate = !capitalRegExp.test(newData)
        break
      }
      case 'phoneNumber': {
        const capitalRegExp = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9}$/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'isMinYear': {
        if (data.split('-')[0] <= 1900) statusValidate = true
        break
      }
      case 'isMaxDate': {
        if (new Date(data) > new Date()) statusValidate = true
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
