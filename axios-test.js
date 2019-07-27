//天気情報取得テスト

'use strict'
const axios = require('axios')

axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=bd1b3bed582f9a23b45d10332927f2fc')
  .then( (res) => {
    console.log(res.data.list[1])
    console.log(Object.keys(res.data.list).length)
  })
  .catch( (err) => {
    console.error(err)
  })
