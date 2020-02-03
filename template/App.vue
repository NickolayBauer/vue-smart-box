<template>
    <div id="app">
        <h1>hello</h1>
        <h2>this template has</h2>
        <ul>
            <li v-for="(pack, index) in packages" :key="index">
                {{pack}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            packages: [
                "vuex",
                "vue-router",
                "vue-devtools",
                "sass",
                "vuelidate",
                "bootstrap",
                "jquery"
            ]
        };
    }
};
</script>