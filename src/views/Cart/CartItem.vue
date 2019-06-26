<template>
    <div class="row my-2 text-center text-capitalize">
        {{/*Image Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <img :src="item.imgUrl" :style="{width:'5rem',height:'5rem'}" class="img-fluid" alt="Product Image" />
        </div>

        {{/*Product Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <span class="d-lg-none">Product: </span >{{item.title}}
        </div>

        {{/*Price Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <span class="d-lg-none">Price: </span ><b>€{{item.price}}</b>
        </div>

        {{/*Quantity button Col*/}}
        <div class="col-10 col-lg-2 mx-auto my-2 my-lg-0">
            <div class="d-flex justify-content-center">
                <span class="btn btn-black mx-1" v-on:click="decrement(item.id)">-</span>
                <span class="btn btn-black mx-1">{{item.count}}</span>
                <span class="btn btn-black mx-1" v-on:click="increment(item.id)">+</span>
            </div>
        </div>

        {{/*Remove button Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <div class="cart-icon" v-on:click="removeItem(item.id)">
                <i class="fas fa-trash"></i>
            </div>
        </div>

        {{/*Total Col*/}}
        <div class="col-10 col-lg-2 mx-auto">
            <b>Item total : €{{item.total}}</b>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'removeItem'
    ])
  }
}
</script>

<style scoped>

</style>
