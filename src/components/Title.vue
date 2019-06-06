<template>
    <div class="row">
        <div class="col-10 mx-auto text-center text-title">
            <h1 class="font-weight-bold">{{name}} <strong class="text-red">{{title}}</strong></h1>
        </div>
    </div>
</template>

<script>
  export default {
    props:['name','title']
  }
</script>

<style scoped>

</style>
