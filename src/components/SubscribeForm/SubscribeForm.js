import React from 'react'
import EmailValidator from 'email-validator'

import Button from 'components/Button'
import { prefixClassName } from 'utils'

import './subscribeForm.sass'

const baseClassName = 'SubscribeForm'
const cn = prefixClassName(baseClassName)

export default class SubscribeForm extends React.Component {
  static STATUS = {
    SUCCESS: 'SUCCESS',
    WAITING: 'WAITING',
    FAILURE: 'FAILURE'
  }

  buttonState = {
    INIT: 'Sign Up',
    [SubscribeForm.STATUS.SUCCESS]: 'Done',
    [SubscribeForm.STATUS.WAITING]: 'Sending',
  }

  inputPlaceHolderState = {
    INIT: 'Email Address',
    [SubscribeForm.STATUS.SUCCESS]: 'Now check your inbox'
  }

  errors = {
    invalidEmail: 'Enter a valid email address',
    unknownIssue: 'Something went wrong! Try again.',
    noServerDefined: 'No server defined'
  }

  state = {
    status: '',
    message: ''
  }

  setSuccess = () => {
    this.setState({
      status: SubscribeForm.STATUS.SUCCESS,
      message: null,
    })
  }

  setWaiting = () => {
    this.setState({
      status: SubscribeForm.STATUS.WAITING,
      message: null,
    })
  }

  setFailure = (errorMsg) => {
    this.setState({
      status: SubscribeForm.STATUS.FAILURE,
      message: errorMsg || this.errors.unknownIssue,
    })
  }

  resetForm = () => {
    const { status } = this.state
    const resetStatus = [
      SubscribeForm.STATUS.SUCCESS,
      SubscribeForm.STATUS.FAILURE
    ]
    if (resetStatus.includes(status)) {
      this.setState({
        status: '',
        message: null,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { url } = this.props
    const email = this.userEmail.value
    if (!url) {
      this.setFailure(this.errors.noServerDefined)
      return
    }
    if (!email || !email.trim()) {
      this.setFailure(this.errors.invalidEmail)
      return
    }
    if (!EmailValidator.validate(email)) {
      this.setFailure(this.errors.invalidEmail)
      return
    }

    if (window.fetch) {
      this.setWaiting()
      try {
        window.fetch(url, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email
          })
        })
        .then(res => {
          if (res.ok) {
            this.setSuccess()
            return
          }
          return res.text()
        })
        .then(data => {
          if (data) {
            this.setFailure(data)
          }
        })
        .catch(() => {
          this.setFailure(this.errorList.unknownIssue)
        })
      } catch (err) {
        this.setFailure(this.errorList.unknownIssue)
      }
    }
  }

  handleInputFocus = () => {
    this.resetForm()
  }

  handleInputChange = () => {
    this.resetForm()
  }

  render() {
    const { getStatus = () => {} } = this.props
    const { status = '', message } = this.state

    getStatus(status)

    const buttonDisableStates = [SubscribeForm.STATUS.SUCCESS, SubscribeForm.STATUS.WAITING]
    const inputPlaceHolder = (status === SubscribeForm.STATUS.SUCCESS) ?
      this.inputPlaceHolderState[SubscribeForm.STATUS.SUCCESS] : this.inputPlaceHolderState.INIT

    return (
      <div className="SubscribeForm">
        <div className={cn('wrap')}>
          <form
            name="subscribe"
            onSubmit={this.handleSubmit}
            noValidate
            className={cn('form')}
          >
            <div className={cn('input')}>
              <input
                type="email"
                name="user-email"
                autoComplete="off"
                required="required"
                ref={c => {
                  this.userEmail = c
                }}
                placeholder={inputPlaceHolder}
                onFocus={this.handleInputFocus}
                onChange={this.handleInputChange}
              />
            </div>
            <div className={cn('submitButton')}>
              <Button
                type="submit"
                className="dark"
                disabled={buttonDisableStates.includes(status)}
              >{this.buttonState[status] || this.buttonState.INIT}</Button>
            </div>
            <div className={cn('message')}>{message || null}</div>
          </form>
        </div>
      </div>
    )
  }
}
