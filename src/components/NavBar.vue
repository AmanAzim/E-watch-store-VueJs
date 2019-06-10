<template>
    <NavWrapper class="navbar navbar-expand-sm navbar-dark px-sm-5">
        <router-link to="/"><img v-bind:src="logo" alt="E-Handy Shop" class="myLogo navbar-brand"/></router-link>
        <ul class="navbar-nav align-items-center">
            <li class="nav-item ml-5">
                <router-link to="/" class="nav-link">Watches</router-link>
            </li>
        </ul>

        <router-link to="/cart" class="ml-auto">
            <ButtonContainer><span class="mr-2"><i class="fas fa-cart-plus"/></span> My Cart</ButtonContainer>
        </router-link>
    </NavWrapper>
</template>

<script>
import logo from '../logo.svg'
import { ButtonContainer } from './styledComponentButtons'
import styled from 'vue-styled-components'

const NavWrapper = styled.nav`
    background:var(--mainVue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.5rem;
    }
`

export default {
  components: {
    NavWrapper,
    ButtonContainer
  },
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
    .myLogo {
        height: 3.9rem;
        width: 5rem;
    }
</style>
