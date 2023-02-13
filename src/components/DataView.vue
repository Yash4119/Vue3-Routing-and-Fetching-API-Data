<template>
  <div class="container">
      <div class="heading">
        <h1>Employee Data</h1>
      </div>
      <div class="grid">
        <div class="grid-item">
          <!-- Column 1 -->
          <div class="postData">
            <input type="text" v-model="resc" placeholder="Enter data you want to post">
          </div>
          <button @click="postData">Post Data</button>
        </div>
        <div class="grid-item">
          <!-- Column 2 -->
          <div class="getCard">
            <button @click="getData">Get Data</button>
            <!-- Put a component that displays fetched data -->
            <DisplayRecords v-if="rawData" :records="rawData"/>
          </div>
        </div>
        <div class="grid-item">
          <!-- Column 3 -->
          <div class="FetchCard">
            <button @click="fetchData">Fetch Data</button>
              <table class="card">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="item in employees" :key="item.id">
                      <tr>
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                      </tr>
                  </template>
                </tbody>
              </table>
            </div>
        </div>
      </div>       
    </div>
    
</template>

<script>
import axios from "axios"
import DisplayRecords from "../components/DisplayRecords.vue"

export default{
    data(){
        return{
            resc:null,
            employees:[],
            rawData:null
        }
    },
    components:{
        DisplayRecords
    },
    methods:{
        async postData(){
          const article = this.resc;
          await axios.post("https://reqres.in/api/articles",article)
              .then(response => {
                console.log(response.data);
                this.articleId = response.data.id
              });
          window.alert("Data posted successfully")
          console.log(this.articleId)
          this.resc = '';  
        },
        getData(){
          axios.get("https://api.npms.io/v2/search?q=vue")
              .then(response => {
                  console.log(response.data)
                  this.rawData = response.data.results;
              })
        }
        ,
        async fetchData(){
            const response = await fetch('https://testapi.jasonwatmore.com/products');
            const json = await response.json();
            this.employees = json;
            console.log(this.employees)
        }
    },
    
}

</script>

<style scoped>
.container{
  display: block;
  margin: auto;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  flex: 1;
  background-color: lightgray;
  text-align: center;
  padding: 16px;
  margin: 8px;
}

</style>