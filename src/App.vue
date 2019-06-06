<template>
  <div id="app">
    <NavBar/>

    <router-view/>

    <Modal/>

    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
export default {
  components:{
    NavBar,
    Modal,
    Footer
  },
  created(){
    this.$store.dispatch('setProducts');
  }
}
</script>

<style>
  /*This is the way to setup css variables that we can use later with the name of the variable "var(--mainBlue)" like shown below in the body*/
  :root {
    --mainVue:#41B883;
    --lightBlue:#009ffd ;
    --mainWhite:#f3f3f3;
    --mainDark:#34495e;
    --mainYellow: #ffb830;
    --lightGray:lightgray;
    --mainBlack:#232528;
  }

  body{
    font-family: 'Oswald', sans-serif !important; /*Because we are using Bootstrap we need !important or else bootstrap will overwrite it  */
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
  }

  .footer {
    background-color: var(--mainVue);
    height: 3rem;
    width: auto;
  }
  .text-title {
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.3rem;
  }
  .text-vue {
    color: var(--mainVue);
  }
  .text-bright {
    color: var(--lightBlue);
  }
  .text-black {
    color:var(--mainBlack);
  }
  .text-underline {
    text-decoration: underline;
    text-decoration-color: lightcoral;
  }

  .btn-black {
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--mainDark);
    border-radius: 0.3rem !important;
    border: 0.1rem solid var(--mainDark) !important;
    cursor: pointer;
  }
  .btn-black:hover {
    background: var(--mainVue) !important;
    color: var(--mainWhite) !important;
  }

  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }

</style>
