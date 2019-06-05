<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar,
  }
}
</script>

<style>
  /*This is the way to setup css variables that we can use later with the name of the variable "var(--mainBlue)" like shown below in the body*/
  :root {
    --mainRed:#41B883;
    --lightBlue:#009ffd ;
    --mainWhite:#f3f3f3;
    --mainDark:#232528;
    --mainYellow: #ffb830;
    --lightGray:lightgray;
  }

  body{
    font-family: 'Oswald', sans-serif !important; /*Because we are using Bootstrap we need !important or else bootstrap will overwrite it  */
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
  }


  .text-title {
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.3rem;

  }
  .text-red {
    color: var(--mainRed);
  }
  .text-bright {
    color: var(--lightBlue);
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
    background: var(--mainRed) !important;
    color: var(--mainWhite) !important;
  }

  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }

</style>
