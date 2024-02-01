<template>
  <div class="d-flex mt-5" v-if="current">
    <div class="me-3">
      <img :src="current.image" alt="" class="img-fluid" />
    </div>
    <div class="me-3">
      <h2>{{ current.name }}</h2>
      <hr />
      <h5>5 Star</h5>
      <hr />
      <h5>{{ current.price }}</h5>
      <hr />
      <p>{{ current.description }}</p>
    </div>
    <div>
      <div class="card" style="width: 20rem">
        <div class="card-body">
          <h6 class="card-text">
            Price<span class="ps-5">Rs. {{ calculatedPrice }}</span>
          </h6>
          <hr />
          <h6 class="card-title">
            Status
            <span class="ps-5">{{
              current.status == 1 ? 'In Stock' : 'Out of Stock'
            }}</span>
          </h6>
          <hr />
          <h6 class="card-title">
            Qty
            <span class="ps-5"
              ><input
                type="number"
                v-model="qty"
                class="form-control d-inline"
                min="1"
                max="10"
                style="width: 70px"
            /></span>
          </h6>
          <hr />
          <a href="#" class="btn btn-primary" @click="AddCart">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'productDetail',
  props: ['id'],
  data() {
    return {
      qty: 1,
      current: null,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    calculatedPrice() {
      return this.current.price * this.qty
    },
    cart() {
      return this.$store.state.cart
    },
  },
  mounted() {
    this.updateCurrentProduct(this.id)
  },
  methods: {
    updateCurrentProduct(id) {
      this.current = this.products.find((item) => item.id == id)
    },
    AddCart() {
      const existingItem = this.$store.state.cart.find(
        (item) => item.id === this.current.id,
      )

      if (existingItem) {
        // Item is already in the cart, update the quantity
        existingItem.qty += this.qty
      } else {
        // Item is not in the cart, add it
        const newItem = {
          id: this.current.id,
          qty: this.qty,
          name: this.current.name,
          price: this.current.price,
          image: this.current.image,
        }
        this.$store.state.cart.push(newItem)
      }

      // Log the updated cart
    //   console.log(this.$store.state.cart)
    },
  },
}
</script>
  
