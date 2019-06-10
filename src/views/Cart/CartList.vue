<template>
    <div>
        <CartItem v-for="(item, index) in cart"  v-bind:item="item"/>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
  components: {
    CartItem
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    }
  }
}
</script>

<style scoped>

</style>
