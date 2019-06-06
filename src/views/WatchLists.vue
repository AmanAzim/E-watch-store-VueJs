<template>
    <div class="py-5">
        <div class="container">
            <Title name="Our" title="Collections"/>

            <div class="row">
                <Watch v-for="(watch,index) in watchList" v-bind:watch="watch"></Watch>
            </div>
        </div>
    </div>
</template>

<script>
  import Watch from './Watch.vue';
  import Title from '../components/Title.vue';
  import {storeProducts} from '../data';
  export default {
    components:{
      Watch,
      Title
    },
    data(){
      return {
        watchList:storeProducts,
      }
    }
  }
</script>

<style scoped>

</style>
