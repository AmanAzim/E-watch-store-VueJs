<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                <button class="btn btn-outline-danger mb-3 px-5" v-on:click="clearCart">CLEAR CART</button>
                <h5><span class="text-title">Subtotal : </span><b>${{$store.state.cartSubtotal}}</b></h5>
                <h5><span class="text-title">Tax : </span><b>${{$store.state.cartTax}}</b></h5>
                <h5><span class="text-title">Cart Total : </span><b>${{$store.state.cartTotal}}</b></h5>
                <PayPal :amount="$store.state.cartTotal"
                        currency="EUR"
                        :client="credentials"
                        env="sandbox"></PayPal>
            </div>
        </div>
    </div>
</template>

<script>
  import PayPal from 'vue-paypal-checkout';
  export default {
    components:{
      PayPal,
    },
    data(){
      return {
        credentials: {
          sandbox: process.env.VUE_APP_PAYPAL_ID, //'AU8laELdXXl-7xCUeRdzUN7DKMmXPqukW0cdS6CrUt5aweNtstFzEUvdX8vVdzhDP6GXToI3sq6W5sku',
          production: '<production client id>'
        },
      }
    },
    methods:{
      clearCart(){
        this.$store.dispatch('clearCart');
      }
    },
    created(){
      //console.log('env',process.env.VUE_APP_PAYPAL_ID)
    }
  }
</script>

<style scoped>

</style>
