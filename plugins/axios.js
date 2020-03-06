import Vue from 'vue'
var vm = new Vue({})    //获取vue实例

export default function ({ $axios, redirect }) {
  if (process.browser) {
    // $axios.onRequest(config => {
    //   vm.$loading()
    // })

    $axios.onResponse(response => {
      console.log("respppp:", response)
      // if (response.data.code == 103 || response.data.code == 102 || response.data.code == 101) {
      //   vm.$message({
      //     message: '登录超时',
      //     type: 'warning'
      //   });
      // }
    })

    $axios.defaults.withCredentials = true
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }
}
