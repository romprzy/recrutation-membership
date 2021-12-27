<script lang="ts">
import Vue from 'vue'
import { VSelect } from 'vuetify/lib/components'
const component = VSelect as any

export default Vue.extend({
  name: 'BasicSelect',
  extends: VSelect,
  props: {
    outlined: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes (): object {
      return {
        ...component.options.computed.classes.call(this),
        'basic-select': true,
      }
    },
  },
})
</script>
