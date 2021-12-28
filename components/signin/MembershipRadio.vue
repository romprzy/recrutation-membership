<template>
  <v-radio-group
    v-model="form.membership"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-radio
      v-for="type in types"
      :key="type"
      :label="$vuetify.lang.t(`$vuetify.pages.signIn.membership.${type}`)"
      :value="type"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import {loadItemFromStorage, saveItemToStorage} from '~/helpers'

export default {
  name: 'MembershipRadio',
  data() {
    return {
      types: ['regular', 'premium'],
      form: {}
    }
  },
  created() {
    if (process.client) {
      const savedForm = loadItemFromStorage('formMembershipPersonal')
      // @ts-ignore
      this.form = savedForm
    }
    this.itemsLoaded = true
  },
  watch: {
    form: {
      deep: true,
      handler: function() {
        if(process.client && this.itemsLoaded) {
          saveItemToStorage('formMembershipPersonal', JSON.stringify(this.form))
        }
      },
    },
  },
}
</script>
