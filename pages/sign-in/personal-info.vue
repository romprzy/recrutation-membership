<template>
  <BasicCard>
    <VCardTitle class="primary--text text-h4 font-weight-bold">
      {{ $vuetify.lang.t('$vuetify.pages.signIn.personalInfo.title') }}
    </VCardTitle>
    <VCardText>
      <FormMembershipPersonal />
    </VCardText>
  </BasicCard>
</template>

<script>
import BasicCard from '@/components/elements/BasicCard'
import FormMembershipPersonal from '@/components/signin/FormMembershipPersonal'

export default {
  name: 'personal-info',
  components: {
    BasicCard,
    FormMembershipPersonal,
  },
}
</script>
