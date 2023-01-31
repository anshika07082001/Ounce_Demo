import { Button, Card, FormElement, TextField, TextStyles } from '@cedcommerce/ounce-ui'
import React from 'react'

const LoginComp = () => {
  return (
  <Card>
    <TextStyles headingTypes="LG-2.8" type='Heading' content="Login Form" lineHeight="LH-4.8"/>
    <FormElement>
      <TextField name="Email" placeHolder="Enter Your Email" type='text'/>
      <TextField name="Password" placeHolder="Enter Your Password" type='password'/>
      <Button type='button'>Login</Button>
    </FormElement>
  </Card>
  )
}

export default LoginComp