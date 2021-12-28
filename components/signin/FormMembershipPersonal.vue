<template>
  <VForm @submit.prevent="onSubmit">
    <label>
      <div class="label-text">{{ $vuetify.lang.t('$vuetify.components.forms.firstname') }}</div>
      <BasicTextField
        v-model="form.firstname"
        :error-messages="errorMessages.firstname"
        full-width
        @blur="validate('firstname')"
      />
    </label>
    <label>
      <div class="label-text">{{ $vuetify.lang.t('$vuetify.components.forms.lastname') }}</div>
      <BasicTextField
        v-model="form.lastname"
        :error-messages="errorMessages.lastname"
        full-width
        @blur="validate('lastname')"
      />
    </label>
    <label>
      <div class="label-text">{{ $vuetify.lang.t('$vuetify.components.forms.email') }}</div>
      <BasicTextField
        v-model="form.email"
        :error-messages="errorMessages.email"
        full-width
        @blur="validate('email')"
      />
    </label>

    <template v-if="form.phones.length">
      <div
        v-for="(phone, index) in form.phones"
        :key="index"
        class="phone-input-wrapper"
      >
        <div class="label-text">{{ $vuetify.lang.t('$vuetify.components.forms.phone') }}</div>

        <div class="d-flex justify-space-between">
          <InputPhone :number.sync="form.phones[index].number">
            <template v-slot:select>
              <BasicSelect
                v-model="form.phones[index].type"
                :items="phonesSelectItems(phone.type)"
                :menu-props="{ bottom: true, offsetY: true }"
                background-color="secondary"
                width="100"
              />
            </template>
          </InputPhone>

          <BasicButton
            @click="removePhone(index)"
            height="48"
            class="delete-button"
            filled
          >Delete</BasicButton>
        </div>
      </div>
    </template>

    <div v-if="unusedPhoneTypes.length">
      <a @click.prevent="addPhone">{{ $vuetify.lang.t('$vuetify.components.forms.addPhone') }}</a>
    </div>

    <BasicButton
      block
      dark
      x-large
      class="primary mt-8 mb-4"
      type="submit"
    >{{ $vuetify.lang.t('$vuetify.components.forms.continue') }}</BasicButton>
  </VForm>
</template>

<script lang="ts">
import InputPhone from '@/components/elements/InputPhone.vue'
import BasicTextField from '@/components/elements/BasicTextField.vue'
import BasicButton from '@/components/elements/BasicButton.vue'
import BasicSelect from '@/components/elements/BasicSelect.vue'
import {PHONE_TYPES, Phone, FormPersonal, PhoneType, FormFieldName} from '~/types'
import { Validatable } from '~/types/validation'
import Vue from 'vue'

interface Data {
  form: FormPersonal
  errorMessages: any
}

export default Vue.extend({
  name: 'FormMembershipPersonal',
  components: {
    InputPhone,
    BasicTextField,
    BasicButton,
    BasicSelect,
  },
  data(): Data {
    return {
      // TODO: check why ts is not validating
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phones: <Phone[]>[
          {
            type: 'home',
            number: '',
          }
        ],
      },
      errorMessages: {
        firstname: [],
        lastname: [],
        email: [],
        phones: [
          {
            number: [],
          }
        ],
      }
    }
  },
  computed: {
    validators() {
      return {
        firstname: {
          required: true,
          minLength: 2,
          maxLength: 120,
        },
        lastname: {
          required: true,
          minLength: 2,
          maxLength: 120,
        },
        email: {
          required: true,
          email: true,
        },
        phoneNumber: {
          required: true,
          minLength: 13,
          maxLength: 13,
        },
      }
    },
    usedPhoneTypes(): PhoneType[] {
      return this.form.phones.map(({ type }) => type)
    },
    unusedPhoneTypes(): PhoneType[] {
      return PHONE_TYPES.filter(type => !this.usedPhoneTypes.some(t => t === type))
    },
  },
  methods: {
    phonesSelectItems(selectedType): object[] {
      return PHONE_TYPES.map(type => ({
        value: type,
        text: this.$vuetify.lang.t(`$vuetify.components.forms.phones.${type}`),
        disabled: selectedType !== type && this.usedPhoneTypes.includes(type),
      }))
    },
    addPhone(): void {
      if (this.form.phones.length < PHONE_TYPES.length) {
        this.form.phones.push({
          type: this.unusedPhoneTypes[0],
          number: '',
        })
      }
    },
    removePhone(index: number) {
      this.form.phones.splice(index, 1)
    },
    validate(fieldName: FormFieldName) {
      this.errorMessages[fieldName] = this.getErrorMessages({
        value: this.form[fieldName],
        label: this.$vuetify.lang.t(`$vuetify.components.forms.${fieldName}`),
        validators: this.validators[fieldName],
      })
    },
    getErrorMessages({value, label, validators}: Validatable) {
      const errors = []
      const stringValue = value.toString()
      const numberValue = +value
      const fieldName = label || 'this field'

      if (validators.required && stringValue.trim() === '')
        errors.push(this.$vuetify.lang.t('$vuetify.validations.required', fieldName))
      if (validators.minLength && stringValue.length >= validators.minLength)
        errors.push(this.$vuetify.lang.t('$vuetify.validations.minLength', fieldName, stringValue.length))
      if (validators.maxLength && stringValue.length <= validators.maxLength)
        errors.push(this.$vuetify.lang.t('$vuetify.validations.maxLength', fieldName, stringValue.length))
      if (validators.min !== undefined && numberValue >= validators.min)
        errors.push(this.$vuetify.lang.t('$vuetify.validations.min', fieldName, numberValue))
      if (validators.max !== undefined && numberValue <= validators.max)
        errors.push(this.$vuetify.lang.t('$vuetify.validations.max', fieldName, numberValue))

      return errors
    },
    onSubmit(): void {
      const fieldNames: keyof typeof FormPersonal[] = ['firstname', 'lastname', 'email']
      fieldNames.forEach(fieldName => {
        this.$set(this.errorMessages, fieldName, this.getErrorMessages({
          value: this.form[fieldName],
          label: this.$vuetify.lang.t(`$vuetify.components.forms.${fieldName}`),
          validators: this.validators[fieldName]
        }))
      })
    },
    addUser() {
      this.$axios.post('http://httpbin.org/post', this.form)
        .then(response => {
          console.log('response', response)
          this.$router.push({ name: 'sign-in-membership' })
        })
        .catch(error => {
          console.error(error)
        })
    },
  },
})
</script>
