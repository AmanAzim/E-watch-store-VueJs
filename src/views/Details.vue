<template>
    <div class="container py-2">
        <div class="row">
            <div class="col-10 mx-auto my-5 text-center text-vue text-underline">
                <h1>{{detailProduct.title}}</h1>
            </div>

            <div class="row">
                <div class="col-md-6 col-10 mx-auto my-3">
                    <img v-bind:src="detailProduct.img" alt="Product image" class="img-fluid"/>
                </div>

                <div class="col-md-6 col-10 mx-auto text-capitalize">
                    <h4 class="text-title mt-3 mb-2 text-black">Made by: {{detailProduct.company}}</h4>
                    <h4 class="text-muted">Price: ${{detailProduct.price}}</h4>
                    <p class="mt-3 mb-0 text-black"><u><b>Product Info:</b></u></p>
                    <p class="text-muted">{{detailProduct.info}}</p>

                    {{/*Buttons*/}}
                    <div>
                        <router-link to="/"><ButtonContainerDark>Back to Products</ButtonContainerDark></router-link>
                        <ButtonContainerDark cart v-bind:disabled="detailProduct.inCart" v-on:click="addToCart(detailProduct.id); openModal(detailProduct.id)">
                            <span v-if="detailProduct.inCart">In Cart</span>
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
      ...mapActions([
        'addToCart',
        'openModal',
      ]),
      detailProduct(){
        return this.$store.getters.detailProduct;
      }
    }
  }
</script>

<style scoped>

</style>
