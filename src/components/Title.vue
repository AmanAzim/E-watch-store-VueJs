<template>
    <div class="row mt-2">
        <div class="col-10 mx-auto text-center text-title">
            <h1 class="font-weight-bold">{{name}} <strong class="text-vue">{{title}}</strong></h1>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'title']
}
</script>

<style scoped>

</style>
