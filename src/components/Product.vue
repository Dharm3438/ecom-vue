<template>
  <h3 class="mt-2">Products</h3>
  <div class="d-flex flex-row pe-4 mt-3">
    <div
      class="card"
      style="width: 18rem"
      v-for="(item, idx) in products"
      :key="idx"
    >
      <img :src="item.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="/product/ + item.id">{{ item.name }}</router-link>
        </h4>
        <p class="card-text">
          {{ item.description }}
        </p>
        <h5 class="">Rs. {{ item.price }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  computed: {
    products() {
      return this.$store.state.products
    },
  },
}
</script>

<style>
.card {
  margin-right: 20px;
}
</style>