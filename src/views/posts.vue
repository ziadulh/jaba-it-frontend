<template>
  <div class="about">
        <h2>Let the borders collapse</h2>

        <table>
        <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
        </tr>
        <tr v-for="d in data" :key="d.id">
            <td>{{d.title}}</td>
            <td>{{d.body}}</td>
            <td><button type="button">View</button></td>
        </tr>
        </table>
  </div>
</template>

<script>
import axios from 'axios'


export default {

  name: 'Posts',

  data(){
    return{
      data: null,
    }
  },

  methods: {
   
  },

  mounted () {
    var self = this;
    axios.get("https://jsonplaceholder.typicode.com/posts").then(function (res){
      self.data = res.data;
      console.log(res.data);
    })
  }
  
}
</script>


<style scoped>
table, td, th {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>
