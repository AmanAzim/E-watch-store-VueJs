<template>
    <div class="ModalContainer" v-if="$store.state.modalOpen">
        <div class="container">
            <div class="row">
                <div class="col-8 col-md-6 col-lg-4 p-5 mx-auto text-center" id="modal">
                    <h5>Item added to the cart</h5>

                    <img v-bind:src="modalProduct.img" class="img-fluid" alt="Product Image"></img>

                    <h5>{{modalProduct.title}}</h5>

                    <h5 class="text-muted">Price: ${{modalProduct.price}}</h5>

                    <router-link v-bind:to="$route.path">
                        <ButtonContainerDark v-on:click="onCloseModal()">Continue Shopping</ButtonContainerDark>
                    </router-link>

                    <router-link to="/cart"><ButtonContainerDark cart v-on:click="onCloseModal()">Go to Cart</ButtonContainerDark></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {ButtonContainerDark} from '../components/styledComponentButtons';
  export default {
    components:{
      ButtonContainerDark
    },
    computed:{
      modalProduct(){
        return this.$store.getters.modalProduct;
      },
    },
    methods:{
      onCloseModal(){
        this.$store.dispatch('closeModal');
      }
    }
  }
</script>

<style scoped>
    .ModalContainer {
        position: fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #modal {
        background: var(--mainWhite);
    }

</style>
