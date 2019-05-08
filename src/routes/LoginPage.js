import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { Section } from '../components/Utils/Utils'
import ApiContext from '../context/meals-context'
export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  static contextType= ApiContext

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    this.context.changeLogStatus()

  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
