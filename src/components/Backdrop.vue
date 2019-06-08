<template>
    <div>
        <div :class="backDropClasses.join(' ')"></div>
    </div>
</template>

<script>
  export default {
    props:['show'],
    data(){
      return {
        backDropClasses:['Backdrop', this.show? 'BackdropOpen':'BackdropClose']
      }
    }
  }
</script>

<style scoped>
    .Backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        z-index: 1;
    }
    .BackdropOpen {
        display: block;
    }
    .BackdropClose {
        display: none;
    }
</style>
