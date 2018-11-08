import React from "react";
import Classnames from "classnames";
import EmailValidator from "email-validator";

export default class EmailSignUp extends React.Component {
  constructor() {
    super();
    this.emailSubUrl = "https://services.maidsafe.net/mail-subscription/api/1.0/subscribe";
    this.status = {
      INIT: "INIT",
      SUCCESS: "SUCCESS",
      WAITING: "WAITING",
      FAILURE: "FAILURE"
    };

    this.stateAttr = {
      init: {
        desc: "Be first to get the latest news on all SAFE Network developments, updates and releases",
        inputPlaceHolder: "Email Address",
        buttonText: "Sign Up"
      },
      waiting: {
        buttonText: "Sending"
      },
      success: {
        desc:
          "Nearly there! Confirm your subscription by clicking the link in the mail we just sent you",
        inputPlaceHolder: "Now check your inbox",
        buttonText: "Done"
      },
      failure: {
        message: "Enter a valid email address"
      }
    };

    this.state = {
      status: this.status.INIT,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null
    };
  }

  setSuccess() {
    this.setState({
      status: this.status.SUCCESS,
      userDesc: this.stateAttr.success.desc,
      buttonText: this.stateAttr.success.buttonText,
      inputPlaceHolder: this.stateAttr.success.inputPlaceHolder,
      message: null
    });
    this.userEmail.value = "";
  }

  setInit() {
    this.setState({
      status: this.status.INIT,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null
    });
  }

  setWaiting() {
    this.setState({
      status: this.status.WAITING,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.waiting.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: null
    });
  }

  setFailure(errorMsg) {
    this.setState({
      status: this.status.FAILURE,
      userDesc: this.stateAttr.init.desc,
      buttonText: this.stateAttr.init.buttonText,
      inputPlaceHolder: this.stateAttr.init.inputPlaceHolder,
      message: errorMsg || this.stateAttr.failure.message
    });
  }

  handleEmailSignUp(e) {
    e.preventDefault();
    const email = this.userEmail.value;
    if (!email || !email.trim()) {
      this.setFailure();
      return;
    }
    if (!EmailValidator.validate(email)) {
      this.setFailure();
      return;
    }

    if (window.fetch) {
      this.setWaiting();
      window
        .fetch(this.emailSubUrl, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email
          })
        })
        .then(res => {
          if (res.ok) {
            this.setSuccess();
            return;
          }
          return res.text();
        })
        .then(data => {
          if (data) {
            this.setFailure(data);
          }
        })
        .catch(err => {
          this.setFailure("Some issue with the server");
        });
    }
  }

  handleEmailInputOnFocus(e) {
    e.preventDefault();
    if (
      [this.status.SUCCESS, this.status.FAILURE].indexOf(this.state.status) !==
      -1
    ) {
      this.setInit();
    }
  }

  handleEmailInputOnChange(e) {
    if (
      [this.status.SUCCESS, this.status.FAILURE].indexOf(this.state.status) !==
      -1
    ) {
      this.setInit();
    }
  }

  render() {
    return (
      <div
        className={Classnames("email-signup-wrap lft-sec-b", {
          "signup-success": this.state.status === this.status.SUCCESS,
          "signup-waiting": this.state.status === this.status.WAITING,
          "signup-failure": this.state.status === this.status.FAILURE
        })}
      >
        <p className="lft-sec-p">{this.state.userDesc}</p>
        <div className="email-signup">
          <form
            name="email-signup"
            onSubmit={this.handleEmailSignUp.bind(this)}
            noValidate
          >
            <div className="email-signup-inp">
              <input
                type="email"
                name="user-email"
                autoComplete="false"
                placeholder={this.state.inputPlaceHolder}
                ref={c => {
                  this.userEmail = c;
                }}
                onFocus={this.handleEmailInputOnFocus.bind(this)}
                onChange={this.handleEmailInputOnChange.bind(this)}
              />
            </div>
            <div className="email-signup-btn">
              <button
                disabled={
                  [this.status.SUCCESS, this.status.WAITING].indexOf(
                    this.state.status
                  ) !== -1
                }
                type="submit"
                name="email-signup-button"
              >
                {this.state.buttonText}
              </button>
            </div>
          </form>
          <div className="email-signup-msg">{this.state.message || null}</div>
        </div>
      </div>
    );
  }
}
