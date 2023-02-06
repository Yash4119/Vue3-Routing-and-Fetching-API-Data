<template>
    <div class="container">
        <h1>Employee Data</h1>
        <input type="text" v-model="id" placeholder="Enter Id of employee whose data you want">
        <button @click="fetchData">Fetch Data</button>
        <div class="dataCard">
            <table>
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
    
</template>

<script>
export default{
    data(){
        return{
            id:null,
            employees:[]
        }
    },
    methods:{
        getData(){
            console.log("Done");
        },
        async fetchData(){
            const response = await fetch('https://testapi.jasonwatmore.com/products');
            const json = await response.json();
            this.employees = json;
            console.log(this.employees)
        }
    },
}

</script>