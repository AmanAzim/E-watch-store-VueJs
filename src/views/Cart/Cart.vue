<template>
    <div>
        <div v-if="$store.state.cart.length<=0">
            <EmptyCart />
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script>
  import EmptyCart from './EmptyCart.vue';
  export default {
    components:{
      EmptyCart,
    }
  }
</script>

<style scoped>

</style>
