<template>
  <v-radio-group
    v-model="membership"
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
export default {
  name: 'MembershipRadio',
  data() {
    return {
      membership: 'regular',
      types: ['regular', 'premium'],
    }
  },
}
</script>

<style scoped>

</style>
