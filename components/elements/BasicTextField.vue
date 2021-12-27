<script lang="ts">
import Vue from 'vue'
import { VTextField } from 'vuetify/lib/components'
const component = VTextField as any

export default Vue.extend({
  name: 'BasicTextField',
  extends: VTextField,
  props: {
    outlined: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes(): object {
      return {
        ...component.options.computed.classes.call(this),
        'basic-text-field': true,
      }
    },
  },
})
</script>
