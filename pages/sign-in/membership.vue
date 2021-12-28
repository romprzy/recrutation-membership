<template>
  <BasicCard>
    <VCardTitle>
      {{ $vuetify.lang.t('$vuetify.pages.signIn.membership.title') }}
    </VCardTitle>
    <VCardText>
    </VCardText>
  </BasicCard>
</template>

<script>
import BasicCard from '@/components/elements/BasicCard'

export default {
  name: 'membership',
  components: {
    BasicCard,
  },
}
</script>
