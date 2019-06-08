<template>
    <div class="container py-2">
        <div class="row">
            <div class="col-10 mx-auto my-5 text-center text-vue text-underline">
                <h1>{{detailedProduct.title}}</h1>
            </div>

            <div class="row">
                <div class="col-md-6 col-10 mx-auto my-3">
                    <img v-bind:src="detailedProduct.img" alt="Product image" class="img-fluid"/>
                </div>

                <div class="col-md-6 col-10 mx-auto text-capitalize">
                    <h4 class="text-title mt-3 mb-2">Made by: {{detailedProduct.company}}</h4>
                    <h4 class="text-muted">Price: €{{detailedProduct.price}}</h4>
                    <p class="mt-3 mb-0"><u><b>Product Info:</b></u></p>
                    <p class="text-muted">{{detailedProduct.info}}</p>

                    {{/*Buttons*/}}
                    <div>
                        <router-link to="/"><ButtonContainerDark>Back to Products</ButtonContainerDark></router-link>
                        <ButtonContainerDark v-bind:disabled="detailedProduct.inCart" v-on:click="addToCart(detailedProduct.id); openModal(detailedProduct.id)">
                            <span v-if="detailedProduct.inCart">In Cart</span>
                            <span v-else>Add to Cart</span>
                        </ButtonContainerDark>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {ButtonContainerDark} from '../components/styledComponentButtons';
  import {mapActions} from 'vuex';
  export default {
    components:{
      ButtonContainerDark,
    },
    computed:{
      detailedProduct(){
        return this.$store.getters.detailedProduct;
      }
    },
    methods:{
      ...mapActions([
        'addToCart',
        'openModal',
      ]),
    },
    created(){
     // this.$store.dispatch('loadDetailOnReload');
    }
  }
</script>

<style scoped>
    .text-dark {
        color:var(--mainDark);
    }
</style>
