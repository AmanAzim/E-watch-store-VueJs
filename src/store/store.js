import Vue from 'vue'
import Vuex from 'vuex'
import {storeProducts, detailProduct} from '../data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    detailProduct:{...detailProduct},
    cart:[],
    modalOpen:false,
    modalProduct:{...detailProduct},
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0,
  },
  getters:{
    products:(state)=>{
      return state.products;
    },
    detailProduct:(state)=>{
      return state.detailProduct;
    },
  },
  mutations: {
    setProducts:(state, products)=>{
      state.products=products;
    },
    handelDetail:(state, detailedProduct)=>{
      state.detailProduct=detailedProduct;
    },
    addToCart:(state, tempProduct, product)=>{
      state.products=tempProduct;
      state.cart=[...state.cart, product];
    },
    addTotal:(state, subTotal, tempTax, total)=>{
      state.cartSubtotal=subTotal;
      state.cartTax=tempTax;
      state.cartTotal=total;
    }
  },
  actions: {
    setProducts:({commit})=>{
      let tempProducts=[];
      storeProducts.forEach(item=>{
        const tempItem={...item};
        tempProducts=[...tempProducts, tempItem];
      });

      commit('setProducts', tempProducts);
    },
    handelDetail:({commit, state}, id)=>{
      const product= state.products.find((product) => {
        return product.id === id;
      });

      commit('handelDetail', product);
    },
    addToCart:({commit, dispatch, state}, id)=>{
      let tempProducts=[...store.products];
      let index=tempProducts.findIndex(product=>product.id===id);
      let product=tempProducts[index];

      product.inCart=true;
      product.count=1;
      product.total=product.price;
      console.log('tempProducts',tempProducts);
      //1st way of making Promise
      return new Promise((resolve)=>{
        if(commit('addToCart', tempProducts, product)){
          resolve(dispatch('addTotal'))
        }
      })
    },
    addTotal:({commit, state})=>{
      let subTotal=0;
      for(let i=0;i<state.cart.length;i++){
        subTotal +=state.cart[i].total;
      }

      let tempTax=subTotal*0.1;
      tempTax=parseFloat(tempTax.toFixed(2));

      let total=subTotal+tempTax;

      commit('addTotal', subTotal, tempTax, total)
    }
  }
})
