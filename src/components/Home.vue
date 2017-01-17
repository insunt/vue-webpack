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
            this.title = 'Home';
            this.description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
        }
    }
</script>