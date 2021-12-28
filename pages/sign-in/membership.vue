<template>
  <BasicCard>
    <VCardTitle class="primary--text text-h4 font-weight-bold">
      {{ $vuetify.lang.t('$vuetify.pages.signIn.membership.title') }}
    </VCardTitle>
    <VCardText>
      <FormMembershipChoice
        @step-next="$emit('step-next')"
        @step-previous="$emit('step-previous')"
      />
    </VCardText>
  </BasicCard>
</template>

<script>
import BasicCard from '@/components/elements/BasicCard'
import FormMembershipChoice from '@/components/signin/FormMembershipChoice'

export default {
  name: 'membership',
  components: {
    BasicCard,
    FormMembershipChoice,
  },
}
</script>
