<template>
    <div id="app">
        <h1>This template has</h1>
        <ul>
            <li v-for="(name, index) in packages" :key="index">{{name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            packages: [
                "vue-devtools",
                "vue-router",
                "vuex",
                "sass",
                "vuelidate"
            ]
        };
    }
};
</script>
<style lang="scss" scoped>
.h1 {
    color: red;
}
</style>
