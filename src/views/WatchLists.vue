<template>
    <div class="py-5">
        <div class="container">
            <Title name="Our" title="Collections"/>

            <div class="row">
                <Watch v-for="(product,index) in products"  v-bind:product="product"></Watch>
            </div>
        </div>
    </div>
</template>

<script>
  import Watch from './Watch.vue';
  import Title from '../components/Title.vue';
  import {mapGetters} from 'vuex';
  export default {
    components:{
      Watch,
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
