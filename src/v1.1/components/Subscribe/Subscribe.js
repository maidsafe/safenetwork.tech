import React from 'react'
import Classnames from 'classnames'
import EmailValidator from 'email-validator'
//
import Button from 'components/Button'
import CONST from 'src/constants'
//
import content from './content.json'
import './subscribe.sass'

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.errorList = content.errors
    this.emailSubUrl = `${CONST.targetServer.production}/api/1.0/subscribe`
    this.status = {
      INIT: 'INIT',
      SUCCESS: 'SUCCESS',
      WAITING: 'WAITING',
      FAILURE: 'FAILURE',
    }

    this.stateAttr = {
      init: content.initState,
      waiting: content.waitingState,
      success: content.successState,
      failure: {
        message: this.errorList.invalidEmail,
      },
    }

    this.state = {
      status: this.status.INIT,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null,
    }
  }

  setSuccess() {
    this.setState({
      status: this.status.SUCCESS,
      userDesc: this.stateAttr.success.desc,
      buttonText: this.stateAttr.success.buttonText,
      inputPlaceHolder: this.stateAttr.success.inputPlaceHolder,
      message: null,
    })
    this.userEmail.value = ''
  }

  setInit() {
    this.setState({
      status: this.status.INIT,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null,
    })
  }

  setWaiting() {
    this.setState({
      status: this.status.WAITING,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.waiting.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null,
    })
  }

  setFailure(errorMsg) {
    this.setState({
      status: this.status.FAILURE,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: errorMsg || this.stateAttr.failure.message,
    })
  }

  handleEmailSignUp(e) {
    e.preventDefault()
    const email = this.userEmail.value
    if (!email || !email.trim()) {
      this.setFailure()
      return
    }
    if (!EmailValidator.validate(email)) {
      this.setFailure()
      return
    }

    if (window.fetch) {
      this.setWaiting()
      try {
        window.fetch(this.emailSubUrl, {
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
        .catch(err => {
          this.setFailure(this.errorList.unknownIssue)
        })
      } catch (err) {
        this.setFailure(this.errorList.unknownIssue)
      }
    }
  }

  handleEmailInputOnFocus(e) {
    e.preventDefault()
    if (
      [this.status.SUCCESS, this.status.FAILURE].indexOf(this.state.status) !==
      -1
    ) {
      this.setInit()
    }
  }

  handleEmailInputOnChange(e) {
    if (
      [this.status.SUCCESS, this.status.FAILURE].indexOf(this.state.status) !==
      -1
    ) {
      this.setInit()
    }
  }

  render() {
    const { userDesc, inputPlaceHolder, buttonText, status, message } = this.state
    return (
      <div className={Classnames('footSubscribe', {
        'signup-success': this.state.status === this.status.SUCCESS,
        'signup-waiting': this.state.status === this.status.WAITING,
        'signup-failure': this.state.status === this.status.FAILURE
      })}>
        <div className="footSubscribe__wrap">
          <p className="footSubscribe__para bodyText__default">{userDesc}</p>
          <form
            name="email-signup"
            onSubmit={this.handleEmailSignUp.bind(this)}
            noValidate
          >
            <div className="footSubscribe__input">
              <input
                type="email"
                name="user-email"
                autoComplete="off"
                required="required"
                ref={c => {
                  this.userEmail = c
                }}
                placeholder={inputPlaceHolder}
                onFocus={this.handleEmailInputOnFocus.bind(this)}
                onChange={this.handleEmailInputOnChange.bind(this)}
              />
            </div>
            <div className="footSubscribe__submit">
              <Button
                type="submit"
                disabled={
                  [this.status.SUCCESS, this.status.WAITING].indexOf(status) !== -1
                }
              >
                {buttonText}
              </Button>
            </div>
            <div className="footSubscribe__message">{message || null}</div>
          </form>
        </div>
      </div>
    )
  }
}
