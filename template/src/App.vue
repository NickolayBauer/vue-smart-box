<template>
    <div id="app" class="m-5">
        <h1>hello</h1>
        <router-link :to="{name:'home'}">Click me</router-link>
        <router-view></router-view>
    </div>
</template>