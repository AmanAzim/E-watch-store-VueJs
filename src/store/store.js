import Vue from 'vue'
import Vuex from 'vuex'
import {storeProducts, detailProduct} from '../data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    detailedProduct:{...detailProduct},
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
    detailedProduct:(state)=>{
      return state.detailedProduct;
    },
  },
  mutations: {
    setProducts:(state, products)=>{
      state.products=products;
    },
    handelDetail:(state, detailedProduct)=>{
      state.detailedProduct=detailedProduct;
    },
    addToCart:(state, payLoad)=>{
      state.products=payLoad.tempProducts;
      state.cart=[...state.cart, payLoad.product];
    },
    addTotal:(state, payLoad)=>{
      state.cartSubtotal=payLoad.subTotal;
      state.cartTax=payLoad.tempTax;
      state.cartTotal=payLoad.total;
    },
    openModal:(state, modalProduct)=>{
      state.modalProduct=modalProduct;
      state.modalOpen=true;
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
      const product=state.products.find(product=>product.id===id);

      commit('handelDetail', product);
    },
    addToCart:({commit, dispatch, state}, id)=>{
      let tempProducts=[...state.products];
      let index=tempProducts.findIndex(product=>product.id===id);
      let product=tempProducts[index];

      product.inCart=true;
      product.count=1;
      product.total=product.price;

      //1st way of making Promise
      let p=new Promise((resolve)=>{
          resolve( commit('addToCart', {tempProducts:tempProducts, product:product}) );
      })
        p.then(()=>{
          dispatch('addTotal')
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

      commit('addTotal', {subTotal:subTotal, tempTax:tempTax, total:total})
    },
    openModal:({commit, state}, id)=>{
      const modalProduct=state.products.find(product=>product.id===id);
      commit('openModal', modalProduct);
    }
  }
})
