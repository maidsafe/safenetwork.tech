export default {
  initState: {
    desc: 'Be first to get the latest news on all SAFE Network developments, updates and releases...',
    inputPlaceHolder: 'Email Address',
    buttonText: 'Sign Up'
  },
  waitingState: {
    buttonText: 'Sending'
  },
  successState: {
    desc: 'Nearly there! Confirm your subscription by clicking the link in the mail we just sent you',
    inputPlaceHolder: 'Now check your inbox',
    buttonText: 'Done'
  },
  errors: {
    invalidEmail: 'Enter a valid email address',
    unknownIssue: 'Something went wrong! Try again.'
  }
}
