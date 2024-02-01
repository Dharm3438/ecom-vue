<template>
    <h2>Order {{orderId}}</h2>
    <div class="container">
    <div class="row">
      <div class="col-8 p-3">
        <div>
          <h3>Shipping</h3>
          <p>Address: {{ address }}</p>
        </div>
        <hr />
        <div>
          <h3>Payment</h3>
          <p>Method: PayPal</p>
        </div>
        <hr />
        <h3>Order Items:</h3>
        <div
          class="d-flex align-items-center gap-5 border border-primary p-1 mt-3 mb-3"
          v-for="(item, idx) in cart"
          :key="idx"
        >
          <img :src="item.image" alt="" width="60" />
          <h6>{{ item.name }}</h6>
          <p>
            {{ item.qty }} * Rs.{{ item.price }} = Rs.
            {{ item.qty * item.price }}
          </p>
        </div>
      </div>
      <div class="col-4 p-3">
        <div class="card" style="width: 20rem">
          <h3 class="text-center p-2">Order Summary</h3>
          <hr />
          <div class="card-body">
            <h6 class="card-text">
              Items: <span class="">Rs. {{ totalPrice }}</span>
            </h6>
            <hr />
            <h6 class="card-title">Shipping: <span class="">Rs. 100</span></h6>
            <hr />
            <h6>Tax: <span class="">Rs. 50</span></h6>
            <hr />
            <h6>
              Total: <span class="">Rs. {{ totalPrice + 100 + 50 }}</span>
            </h6>
            <hr />
            <a href="#" class="btn btn-primary" @click="orderPlaced"
              >Place Order</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'order',
    props: ['orderId'],
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
    address() {
      return this.$store.state.cartAddress
    },
  },
}
</script>