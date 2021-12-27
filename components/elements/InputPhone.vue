<template>
  <div class="input-phone">
    <slot name="select" />
    <slot name="input">
      <BasicTextField
        mask="###.###.###-##"
        :value="number"
        @input="$emit('update:number', $event)"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import BasicTextField from '~/components/elements/BasicTextField.vue'

export default {
  name: 'InputPhone',
  components: {
    BasicTextField
  },
  props: {
    number: String,
    type: String,
  },
}
</script>

<style scoped>

</style>
