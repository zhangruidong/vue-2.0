<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
import qs from 'qs'
export default {
  name: 'app',
//  jsonp(url, opts, fn)
  created() {
    jsonp('https://s.taobao.com/api?_ksTS=1508565430163_235&ajax=true&m=customized&sourceId=tb.index&_input_charset=utf-8&bcoffset=0&commend=all&suggest=0_1&source=suggest&search_type=item&ssid=s5-e&suggest_query=a&spm=a21bo.2017.201856-taobao-item.2&q=a%E5%AD%97%E8%A3%99&s=36&initiative_id=tbindexz_20170306&imgfile=&wq=a&ie=utf8&rn=2bc7e9868d375ef07667d9179cb93ac8', {
      param: "callback",
      name: "zrd"
    }, function (err, data) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data);
      }
    });
    /*axios({
      method: 'get',
      url: 'http://easy-mock.com/mock/59da45ce9d342f449f30c631/example/user',
//      url:'http://jeasyui.com/demo/main/datagrid2_getdata.php'
    }).then( (res) => {
      console.log(res.data.data);
    }).catch( (error) => {
      console.log(error);
    })*/

  }
}
</script>

<style>
#app {

}
</style>
