<template>
  <section class="container">
    <div>
      {{ data }}
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=bd1b3bed582f9a23b45d10332927f2fc")
      .catch(err => {
        console.error('response error', err)
        return false
      })
    return { data: res }
  }
}
</script>
