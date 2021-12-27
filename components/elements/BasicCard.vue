<script>
import { VCard } from 'vuetify/lib/components'

export default {
  name: 'BasicCard',
  extends: VCard,
  props: {
    width: {
      default: 490,
    },
  },
}
</script>
