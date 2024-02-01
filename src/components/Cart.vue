<template>
  <div class="container ">
    <div class="row">
      <div class="col-8 p-3">
        <h3>Cart</h3>
        <hr>
        <div
          class="d-flex align-items-center gap-5 border border-primary p-2 mb-3 mt-3"
          v-for="(item, idx) in cart"
          :key="idx"
        >
          <img :src="item.image" alt="" width="150" />
          <h4>{{ item.name }}</h4>
          <h6>Rs. {{ item.price }}</h6>
          <input
            type="number"
            class="form-control"
            v-model="item.qty"
            style="width: 100px"
          />
          <button @click="removeItem(item.id)" class="btn btn-primary">
            D
          </button>
        </div>
      </div>
      <div class="col-4 p-3">
        <div class="card text-center" style="width: 20rem">
          <div class="card-body">
            <h6 class="card-text">Subtotal</h6>
            <hr />
            <h6 class="card-title">
              Rs.
              <span class="">{{ totalPrice }}</span>
            </h6>
            <hr />
            <a href="#" class="btn btn-primary" @click="AddCart">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalPrice() {
      const totalValue = this.$store.state.cart.reduce((total, item) => {
        return total + item.qty * item.price
      }, 0)

      return totalValue
    },
  },
  methods: {
    removeItem(id) {
      const updatedCart = this.$store.state.cart.filter(
        (item) => item.id !== id,
      )

      // Update the cart state with the new array
      this.$store.state.cart = updatedCart

      // Log the updated cart
      //   console.log(this.$store.state.cart)
    },
    AddCart(){
      this.$router.push('/shipping')
    }
  },
}
</script>