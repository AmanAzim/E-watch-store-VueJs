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
    }
  }
})
