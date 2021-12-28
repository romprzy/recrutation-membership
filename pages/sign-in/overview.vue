<template>
  <BasicCard>
    <VCardTitle>
      {{ $vuetify.lang.t('$vuetify.pages.signIn.overview.title') }}
    </VCardTitle>
    <VCardText>
    </VCardText>
  </BasicCard>
</template>

<script>
import BasicCard from '@/components/elements/BasicCard'

export default {
  name: 'overview',
  components: {
    BasicCard,
  },
}
</script>
