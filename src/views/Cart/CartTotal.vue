<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                <button class="btn btn-outline-danger mb-3 px-5" v-on:click="clearCart">CLEAR CART</button>
                <h5><span class="text-title">Subtotal : </span><b>€{{$store.state.cartSubtotal}}</b></h5>
                <h5><span class="text-title">Tax : </span><b>€{{$store.state.cartTax}}</b></h5>
                <h5><span class="text-title">Cart Total : </span><b>€{{$store.state.cartTotal}}</b></h5>

                <PayPalButton
                        :amount="$store.state.cartTotal"
                        currency="EUR" :client="credentials"
                        @payment-completed="paymentComplete()"
                        env="sandbox">
                </PayPalButton>
            </div>
        </div>
    </div>
</template>

<script>
  import PayPalButton from 'vue-paypal-checkout';
  export default {
    components:{
      PayPalButton,
    },
    data(){
      return {
        credentials: {
          sandbox: process.env.VUE_APP_PAYPAL_ID,
          production: 'YOUR-PRODUCTION-APP-ID'
        },
      }
    },
    methods:{
      clearCart(){
        this.$store.dispatch('clearCart');
      },
      paymentComplete(){
        this.$store.dispatch('paymentComplete');
      }
    },
    created(){
      //console.log('env',process.env.VUE_APP_PAYPAL_ID)
    }
  }
</script>

<style scoped>

</style>
