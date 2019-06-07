<template>
    <div class="py-5">
        <div class="container">
            <Title name="Our" title="Collections"/>

            <div class="row">
                <Product v-for="(product,index) in products"  v-bind:product="product"></Product>
            </div>
        </div>
    </div>
</template>

<script>
  import Product from './Product.vue';
  import Title from '../components/Title.vue';
  import {mapGetters} from 'vuex';
  export default {
    components:{
      Product,
      Title
    },
    data(){
      return {
      }
    },
    computed:{
      ...mapGetters([
        'products'
      ])
    }
  }
</script>

<style scoped>

</style>
