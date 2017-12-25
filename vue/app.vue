

<template>
    <div class="vue-content">
        <div class="page1">page1</div>
        <div class="page2">经典红色华夫饼礼盒装420g</div>
        <div class="page3">
            <div>29.9</div>
            <div>两人团</div>
            <div>单买价：49.9</div>
            <div>已有6789参团</div>
            <div>查看</div>
        </div>
        <div v-once>{{msg}}</div>
        <Demo/>
    </div>
</template>
<style  >
        .page1{
           background-image: url("image/ocpH4D9CLJR.jpg");

            height: 240px;
            width:240px;
        }
        .page2 {
            color: red;
        }
</style>
<script type="text/babel">
   // import Demo from './component/demo.vue';

    export default {

        name: 'page',
        data() {
            return {
                msg: "one111"
            }
        },
        computed: {

        },
        components: {
          //  Demo
        }
    }
</script>




