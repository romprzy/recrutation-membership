<script>
import { VBtn } from 'vuetify/lib/components'

export default {
  name: 'BasicButton',
  extends: VBtn,
  props: {
    outlined: {
      default: true,
    },
  },
}
</script>
