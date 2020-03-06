<template>
    <div class="home-page">
        <Header />
        helloword
    </div>
</template>

<script>
import {
    HS_ROOT
} from '../api/config'
import * as util from '~/utils/filters'
import Header from '~/components/header';
export default {
    // middleware: "auth",
    components: {
        Header
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    watch: {
    },
    methods: {
    }
}
</script>
