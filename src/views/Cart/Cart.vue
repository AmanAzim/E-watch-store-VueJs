<template>
    <div>
        <div v-if="$store.state.cart.length<=0">
            <EmptyCart />
        </div>
        <div v-else>
            <Title name="Your" title="Cart"/>
            <CartColumns />
            <CartList />
            <CartTotal />
        </div>
    </div>
</template>

<script>
  import EmptyCart from './EmptyCart.vue';
  import Title from '../../components/Title.vue';
  import CartColumns from './CartColumns.vue';
  import CartList from './CartList.vue';
  import CartTotal from './CartTotal.vue';
  export default {
    components:{
      EmptyCart,
      Title,
      CartColumns,
      CartList,
      CartTotal
    }
  }
</script>

<style scoped>

</style>
