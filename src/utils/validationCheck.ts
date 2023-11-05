export const required = (value: string) => {
  return value ? true : false
}
export const date = (value: string) => {
  return /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(value)
}

export const positiveNumber = (value: number) => {
  return value > 0
}
export const year = (value: number) => {
  return value >= 1923 && value < 2023
}
export const link = (value: string) => {
  return /^(https?:\/\/)?([a-zA-Z0-9]+-?)*[a-zA-Z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?(\/.*)?$/.test(value)
}
