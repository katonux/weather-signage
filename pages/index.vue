<template>
  <section class="container">
    <b-row>
      <div v-for="item in data" :key="item" class="text-center text-white">
        {{ item.dt_txt }}<br >
        <img :src="'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png'"
          width="100"
          height="100">
        <br>
        {{ item.weather[0].main }}<br >
        {{ (item.main.temp - 273).toFixed(1) }}°C<br >
        {{ item.main.humidity }}%<br >
        {{ item.wind.speed.toFixed(1) }}m/s<br >
        <br >
      </div>
    </b-row>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios
      .$get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=bd1b3bed582f9a23b45d10332927f2fc"
      )
      .catch(err => {
        console.error("response error", err)
        return false
      })
    return { data: res.list }
  }
}
</script>
