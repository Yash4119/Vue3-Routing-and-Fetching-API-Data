<script setup>
import { ref} from 'vue';
const products = ref(null);

async function fetchData(){
    const res = await fetch('https://testapi.jasonwatmore.com/products');
    const json = await res.json();
    products.value = json;
    console.log("Successfully Fetched data")
}

// onMounted(fetchData)

</script>

<template>
    <div class="card m-3">
        <h5 class="card-header text-center">Vue 3 fetch data from API</h5>

        <button @click="fetchData">click</button>

        <div class="card-body">
            <div v-if="products">
                <h5>Products</h5>
                <ul class="mb-0">
                    <li v-for="product in products" :key="product.id">{{product.name}}</li>
                </ul>
            </div>
            <div v-if="!products" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>