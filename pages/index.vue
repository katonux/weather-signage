<template>
  <section class="container">
    <div v-for="item in data" :key="item">
      日時：{{ new Date(item.dt * 1000) }}<br>
      天気：{{ item.weather[0].main }}<br>
      気温：{{ (item.main.temp - 273).toFixed(1)}}<br>
      湿度：{{ item.main.humidity }}%<br>
      風速：{{ item.wind.speed.toFixed(1) }}<br>
      <br>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get("http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=bd1b3bed582f9a23b45d10332927f2fc")
      .catch(err => {
        console.error('response error', err)
        return false
      })
    return { data: res.list }
  }
}
</script>
