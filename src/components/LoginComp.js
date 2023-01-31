import { Button, Card, FormElement, TextField, TextStyles } from '@cedcommerce/ounce-ui'
import React from 'react'

const LoginComp = () => {
  return (
  <Card>
    <TextStyles headingTypes="LG-2.8" type='Heading' content="Login Form" lineHeight="LH-4.8"/>
    <FormElement>
      <TextField name="Email" onChange={function noRefCheck(){}} placeHolder="Enter Your Email" value=""/>
      <TextField name="Password" onChange={function noRefCheck(){}} placeHolder="Enter Your Password" value=""/>
      <Button>Login</Button>
    </FormElement>
  </Card>
  )
}

export default LoginComp