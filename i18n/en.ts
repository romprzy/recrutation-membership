export default {
  components: {
    forms: {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'Email',
      phone: 'Phone',
      phones: {
        home: 'Home',
        work: 'Work',
        mobile: 'Mobile',
        main: 'Main',
        other: 'Other',
      },
      addPhone: 'Add phone',
      delete: 'Delete',
      continue: 'Continue',
    },
  },
  pages: {
    signIn: {
      personalInfo: {
        title: 'Personal info',
      },
      membership: {
        title: 'Membership',
      },
      overview: {
        title: 'Overview',
      },
    },
  },
  validations: {
    required: '{0} is required',
    minLength: '{0} minimum length is {1} characters',
    maxLength: '{0} maximum length is {1} characters',
    email: 'Please type valid email address',
  },
}
