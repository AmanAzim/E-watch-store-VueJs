import Vue from 'vue'
import Vuex from 'vuex'
import {storeProducts, detailProduct} from '../data';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    detailedProduct:null,
    cart:[],
    modalOpen:false,
    modalProduct:null,
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
    modalProduct:(state)=>{
      return state.modalProduct;
    },
    cart:(state)=>{
      return state.cart;
    }
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
    },
    closeModal:(state)=>{
      state.modalOpen=false;
    },
    increment:(state, cart)=>{
      state.cart=cart;
    },
    decrement:(state, cart)=>{
      state.cart=cart;
    },
    removeItem:(state, payLoad)=>{
      state.products=payLoad.products;
      state.cart=payLoad.cart;
    },
    clearCart:(state, tempProducts)=>{
        state.products=tempProducts;
        state.cartSubtotal=0;
        state.cartTax=0;
        state.cartTotal=0;
        state.cart=[];
    }
  },
  actions: {
    setProducts:({commit, dispatch})=>{
      let tempProducts=[];
      /*
        storeProducts.forEach(item=>{
        const tempItem={...item};
        tempProducts=[...tempProducts, tempItem];
        });
        commit('setProducts', tempProducts);
      */
      //axios.put('https://e-watch-store.firebaseio.com/storeWatches.json', tempProducts);
        axios.get('https://e-watch-store.firebaseio.com/storeWatches.json')
        .then(res=>{
            tempProducts=res.data;
            commit('setProducts', tempProducts);
            console.log('serveradata',tempProducts);
        }).then(()=>{
              dispatch('loadDetailOnReload')
        }).catch(err=>console.log(err));
    },
    handelDetail:({commit, state}, id)=>{
      let product=state.products.find(product=>product.id===id);
      commit('handelDetail', product);
      let index=state.products.findIndex(product=>product.id===id);
      localStorage.setItem('detailProductIndex', index);
    },
    loadDetailOnReload:({commit, dispatch, state})=>{
      if(state.detailedProduct!==null){
        return;
      }else {
        const index=localStorage.getItem('detailProductIndex');
        commit('handelDetail', state.products[index])
      }
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
    },
    closeModal:({commit})=>{
      commit('closeModal');
    },
    increment:({commit, dispatch, state}, id)=>{
      const tempCart=[...state.cart];
      const index=tempCart.findIndex(item=>item.id===id);
      const product=tempCart[index];
      product.count++;
      product.total +=product.price;

      return new Promise(resolve=>{
        resolve(commit('increment', tempCart));
      }).then(()=>{
        dispatch('addTotal');
      })
    },
    decrement:({commit, dispatch, state}, id)=>{
      const tempCart=[...state.cart];
      const index=tempCart.findIndex(item=>item.id===id);
      const product=tempCart[index];
      product.count--;
      product.total -=product.price;

      if(product.count<=0){
          dispatch('removeItem', id);
      }else {

          return new Promise(resolve=>{
            resolve(commit('decrement', tempCart));
          }).then(()=>{
               dispatch('addTotal');
          })
      }
    },
    removeItem:({commit, dispatch, state}, id)=>{
      const tempProducts=[...state.products];
      const index=tempProducts.findIndex(item=>item.id===id);
      const product=tempProducts[index];
      product.inCart=false;
      product.count=0;
      product.total=0;

      let tempCart=state.cart.filter(item=>item.id!==id);

      return new Promise(resolve=>{
          resolve( commit('removeItem', {products:tempProducts, cart:tempCart}) );
      }).then(()=>{
          dispatch('addTotal');
      })
    },
    clearCart:({commit, state})=>{
      let tempProducts=[...state.products];
      tempProducts.map(item=>{
        item.inCart=false;
        item.count=0;
        item.total=0;
      });

      commit('clearCart', tempProducts);
    },
    paymentComplete:({dispatch})=>{
      dispatch('clearCart');
      localStorage.removeItem('detailProductIndex');
      router.replace('/');
    }
  }
})
