<template>
  <div class="container" style="width: 800px">
    <h1>Shipping</h1>
    <form  @submit.prevent="handleSubmit()">
      <div class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" class="form-control" v-model="enteredAddress" required />
      </div>
      <div class="mb-3">
        <label class="form-label">City</label>
        <input type="text" class="form-control" v-model="enteredCity" />
      </div>
      <div class="mb-3">
        <label class="form-label">Postal</label>
        <input type="number" class="form-control" v-model="enteredPostal" />
      </div>
      <div class="mb-3">
        <label class="form-label">Country</label>
        <input type="text" class="form-control" v-model="enteredCountry" />
      </div>
      <button type="submit" class="btn btn-primary">
        Continue
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'shipping',
  data: function () {
    return {
      enteredAddress: '',
      enteredCity: '',
      enteredPostal: null,
      enteredCountry: '',
    }
  },
  methods: {
    handleSubmit() {
      let finAddress =
        this.enteredAddress +
        ', ' +
        this.enteredCity +
        ', ' +
        this.enteredPostal +
        ', ' +
        this.enteredCountry
    
      console.log(finAddress)
      this.$store.state.cartAddress = finAddress
      this.$router.push('/placeorder')
    },
  },
}
</script>