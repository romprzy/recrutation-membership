<template>
  <VForm @submit.prevent="onSubmit">
    <label>
      <div class="label-text">First name</div>
      <BasicTextField v-model="form.firstname" />
    </label>
    <label>
      <div class="label-text">Last name</div>
      <BasicTextField v-model="form.lastname" />
    </label>
    <label>
      <div class="label-text">Email</div>
      <BasicTextField v-model="form.email" />
    </label>

    <template v-if="form.phones.length">
      <div
        v-for="(phone, index) in form.phones"
        :key="index"
        class="phone-input-wrapper"
      >
        <div class="label-text">Phone</div>

        <div class="d-flex justify-space-between">
          <InputPhone :number.sync="form.phones[index].number">
            <template v-slot:select>
              <BasicSelect
                v-model="form.phones[index].type"
                :items="[...phoneInputLabels]"
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
      <a @click="addPhone">Add phone</a>
    </div>

    <BasicButton
      block
      dark
      x-large
      class="primary mt-8 mb-4"
      type="submit"
    >Continue</BasicButton>
  </VForm>
</template>

<script lang="ts">
import InputPhone from '@/components/elements/InputPhone.vue'
import BasicTextField from '@/components/elements/BasicTextField.vue'
import BasicButton from '@/components/elements/BasicButton.vue'
import BasicSelect from '@/components/elements/BasicSelect.vue'
import {PHONE_TYPES, Phone, phoneInputLabels, FormPersonal, PhoneType} from '~/types'
import Vue from 'vue'

interface Data {
  form: FormPersonal
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
            number: '777',
          }
        ],
      },
    }
  },
  computed: {
    phoneInputLabels(): object[] {
      return phoneInputLabels
    },
    usedPhoneTypes(): PhoneType[] {
      return this.form.phones.map(({ type }) => type)
    },
    unusedPhoneTypes(): PhoneType[] {
      return PHONE_TYPES.filter(type => !this.usedPhoneTypes.some(t => t === type))
    },
  },
  methods: {
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
    onSubmit(): void {
      console.log('onSubmit')
      this.$router.push({ name: 'sign-in-membership' })
    },
  },
})
</script>
