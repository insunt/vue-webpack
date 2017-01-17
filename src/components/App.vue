<template>
    <div class="wrapper">
        <header>
            <navbar></navbar>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <custom-footer></custom-footer>
        </footer>
    </div>
</template>
<script>
    import Navbar from './dependencies/Navbar.vue';
    import Footer from './dependencies/Footer.vue';

    export default {
        components: {
            'navbar': Navbar,
            'custom-footer': Footer
        },
        mounted() {
            console.log('App / website started');
        }
    }
</script>