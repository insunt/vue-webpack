<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-push-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        {{ title }} Page
                    </div>
                    <div class="panel-body">
                        <p>{{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
        mounted() {
            this.title = 'Gallery';
            this.description = ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.s';
        }
    }
</script>