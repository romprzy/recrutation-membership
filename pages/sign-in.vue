<template>
  <v-stepper
    v-model="stepIndex"
    flat
  >
    <v-stepper-header>
      <template v-for="step in steps">
        <v-stepper-step
          :key="step.id"
          :complete="stepIndex > step.id"
          :step="step.id"
          editable
        >
          {{ step.title }}
        </v-stepper-step>

        <v-divider :key="'d' + step.id" />
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
        v-for="step in steps"
        :key="step.id"
        :step="step.id"
      >
        <div class="d-flex justify-center pa-10">
          <NuxtChild />
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      stepIndex: 1,
      steps: [
        {
          id: 1,
          route: 'personal-info',
          title: 'Personal Info',
        },
        {
          id: 2,
          route: 'membership',
          title: 'Membership',
        },
        {
          id: 3,
          route: 'overview',
          title: 'Overview',
        },
      ],
    }
  },
  computed: {
    currentStep() {
      return this.steps.find(({ route }) => `sign-in-${route}` === this.$route.name) || this.steps[0]
    },
  },
  watch: {
    '$route.name': {
      immediate: true,
      handler: function(routeName, oldValue) {
        if (routeName !== oldValue) {
          this.stepIndex = this.currentStep.id
        }
      },
    },
    stepIndex: {
      immediate: true,
      handler: function(stepIndex, oldValue) {
        if (stepIndex !== oldValue) {
          console.log(`sign-in-${this.steps[stepIndex - 1].route}`)
          this.$router.push({ name: `sign-in-${this.steps[stepIndex - 1].route}`})
        }
      },
    },
  },
}
</script>

