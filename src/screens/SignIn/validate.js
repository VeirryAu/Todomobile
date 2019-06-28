const validate = ({
  identifier,
  password
}) => {
  const errors = {
    identifier: '',
    password: ''
  }

  errors.identifier = !identifier ? '*' : undefined
  errors.password = !password ? '*' : undefined

  return errors
}

export default validate
