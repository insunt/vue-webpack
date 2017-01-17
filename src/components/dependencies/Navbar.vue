<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <a href="#" class="navbar-brand">Website Title</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/gallery">Gallery</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        mounted() {
        }
    }
</script>