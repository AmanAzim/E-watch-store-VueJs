<template>
    <div class="col-lg-3 col-md-6 col-9 mx-auto my-3">
        <div class="card">

            <div class="img-container py-5" v-on:click="handelDetail(product.id)">
                <router-link to="/details"><img v-bind:src="product.img" alt="product" class="card-img-top"/></router-link>

                <button class="cart-btn" v-bind:disabled="product.inCart" v-on:click="addToCart(product.id); openModal(product.id)">
                    <p class="mb-0" v-if="product.inCart">In Cart</p>
                    <i v-else class="fas fa-cart-plus"/>
                </button>
            </div>

            <div class="card-footer d-flex justify-content-between">
                <p class="align-self-center mb-0">{{product.title}}</p>
                <h5 class="text-vue mb-0"><span class="mr-1">$</span>{{product.price}}</h5>
            </div>

        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props:['product'],
    methods:{
      ...mapActions([
        'handelDetail',
        'addToCart',
        'openModal',
      ])
    }
  }
</script>

<style scoped>
    .card {
        border-color:transparent;
        transition:all 1s linear;
    }
    .card:hover {
        border: 0.4rem solid rgba(0,0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background:transparent;
        border-top:transparent;
        transition:all 1s linear;
    }
    .card-footer:hover {
        background:rgba(247,247,247);
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
        transition: all 0.5s linear;
    }
    .cart-btn {
        position:absolute;
        bottom:0;
        right:0;
        padding: 0.2rem 0.4rem;
        background:var(--mainVue);
        color:var(--mainWhite) !important;
        border:none;
        font-size:1.3rem;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%, 100%);
    }
    .img-container:hover .cart-btn {
        transform:translate(0, 0);
        transition:all 0.5s linear;
    }
    .cart-btn:hover {
        background: lightgray;
        color:var(--mainVue) !important;
    }

</style>
