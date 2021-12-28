<template>
  <v-dialog
    v-model="dialog"
    width="490"
    persistent
  >
    <BasicCard>
      <VCardTitle class="d-flex justify-space-between">
        <div class="primary--text text-h4 font-weight-bold">
          {{ $vuetify.lang.t('$vuetify.pages.signIn.overview.title') }}
        </div>

        <a
          class="caption grey--text"
          style="text-decoration: none"
          @click="close"
        >{{ $vuetify.lang.t('$vuetify.components.close') }}</a>
      </VCardTitle>
      <VCardText>
        <FormMembershipPersonal save-to-d-b>
          <template v-slot:submit>
            <h3>{{ $vuetify.lang.t('$vuetify.components.forms.membership') }}</h3>

            <MembershipRadio row />

            <BasicButton
              block
              dark
              x-large
              class="primary mt-8 mb-4"
              type="submit"
            >{{ $vuetify.lang.t('$vuetify.components.forms.save') }}</BasicButton>
          </template>
        </FormMembershipPersonal>
      </VCardText>
    </BasicCard>
  </v-dialog>
</template>

<script>
import BasicCard from '@/components/elements/BasicCard'
import FormMembershipPersonal from '@/components/signin/FormMembershipPersonal'
import MembershipRadio from '@/components/signin/MembershipRadio.vue'
import BasicButton from '@/components/elements/BasicButton.vue'

export default {
  name: 'overview',
  components: {
    BasicCard,
    FormMembershipPersonal,
    BasicButton,
    MembershipRadio,
  },
  data() {
    return {
      dialog: true,
    }
  },
  methods: {
    close() {
      this.dialog = false
      this.$router.push({ name: 'sign-in-membership' })
    },
  },
}
</script>
