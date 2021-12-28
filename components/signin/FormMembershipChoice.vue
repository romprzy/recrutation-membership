<template>
  <div>
    <MembershipRadio />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna, ligula eget maecenas. At pharetra fermentum augue egestas. Sed morbi sed est, ultrices in vel maecenas.
    </p>
    <BasicButton
      block
      dark
      x-large
      class="primary mt-8 mb-4"
      :to="{ name: 'sign-in-overview' }"
    >{{ $vuetify.lang.t('$vuetify.components.forms.continue') }}</BasicButton>
    <BasicButton
      block
      dark
      x-large
      class="primary--text mb-4"
      :to="{ name: 'sign-in-personal-info' }"
    >{{ $vuetify.lang.t('$vuetify.components.forms.back') }}</BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '@/components/elements/BasicButton.vue'
import MembershipRadio from '@/components/signin/MembershipRadio.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'FormMembershipChoice',
  components: {
    BasicButton,
    MembershipRadio,
  },
})
</script>
