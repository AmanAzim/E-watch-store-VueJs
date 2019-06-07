<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                <button class="btn btn-outline-danger mb-3 px-5" v-on:click="clearCart">CLEAR CART</button>
                <h5><span class="text-title">Subtotal : </span><b>${{$store.state.cartSubtotal}}</b></h5>
                <h5><span class="text-title">Tax : </span><b>${{$store.state.cartTax}}</b></h5>
                <h5><span class="text-title">Cart Total : </span><b>${{$store.state.cartTotal}}</b></h5>

            </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods:{
      clearCart(){
        this.$store.dispatch('clearCart');
      }
    }
  }
</script>

<style scoped>

</style>
