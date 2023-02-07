<template>
    <div class="container">
        <table class="card">
            <thead>
                <tr>
                    <th>Package Name</th>
                    <th>Package Scope</th>
                    <th>Package Version</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="record in records" :key="record.package.version">
                    <tr>
                        <td>{{ record.package.name }}</td>
                        <td>{{ record.package.scope }}</td>
                        <td>{{ record.package.version }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>

export default{
    props:{
        records:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            count:null
        }
    }
}


</script>

<style scoped>

.container .card{
    margin: auto;
}
</style>