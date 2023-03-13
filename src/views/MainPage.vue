<template>
    <div >
    <div>
        <Header/>
        <CurrentList/>
    </div>
    

    </div>
</template>

<script setup>
    import CurrentList from "@/components/CurrentList.vue";
    import Header from "@/components/Header.vue";
    import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>

</style>