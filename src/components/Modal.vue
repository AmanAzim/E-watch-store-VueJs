<template>
    <span>
        <transition name="myModal" type="animation">
           <div class="ModalContainer" v-if="$store.state.modalOpen">
             <div class="container">
                <div class="row">
                   <div class="col-8 col-md-6 col-lg-4 p-5 mx-auto text-center" id="modal">
                       <h5>Item added to the cart</h5>

                       <img v-bind:src="modalProduct.imgUrl" class="img-fluid" alt="Product Image"></img>

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
        </transition>

        <BackDrop :show="$store.state.modalOpen" :key="$store.state.modalOpen"/> {{/*:key="condition" it is added so that when the Key*condition changes the component gets rerender and load with deffferent properties depending on the changed condition. React does it normally but vue needs :key="" for this rerendering component on props update */}}
    </span>
</template>

<script>
import { ButtonContainerDark } from '../components/styledComponentButtons'
import BackDrop from './Backdrop.vue'
export default {
  components: {
    ButtonContainerDark,
    BackDrop
  },
  computed: {
    modalProduct () {
      return this.$store.getters.modalProduct
    }
  },
  methods: {
    onCloseModal () {
      this.$store.dispatch('closeModal')
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
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    #modal {
        background: var(--mainWhite);
    }

    .myModal-enter {}
    .myModal-enter-active {
        animation: openModal 0.4s ease-out forwards;
    }
    .myModal-leave {}
    .myModal-leave-active {
        animation: closeModal 0.7s ease-out forwards;
    }

    @keyframes openModal {
        0%{
            opacity: 0;
            transform: translateY(-200%);
        }
        50%{
            opacity: 0.8;
            transform: translateY(50%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes closeModal {
        0%{
            opacity: 1;
            transform: translateY(0);
        }
        50%{
            opacity: 0.8;
            transform: translateY(50%);
        }
        100%{
            opacity: 0;
            transform: translateY(-200%);
        }
    }
</style>
