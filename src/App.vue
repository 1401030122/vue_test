<template>
    <div>
       
        <h1>axios.get得到数据为:{{boom.id}}</h1>
        <button @click="getBoom">TestAxios</button><br><hr>
        <h1>axios直接访问得到数据为:{{boom1.number}}</h1>
        <button @click="getBoom1">TestAxios</button><br><hr>
        <h1>axios封装测试:{{boom2.id}}</h1>
        <button @click="getBoom2">TestAxios</button><br><hr>
    </div>
    <!--App -->
</template>

<script>
    import request from './utils/request'
    export default {
        name:'app',
        data() {
            return {
                boom:'',
                boom1:'',
                boom2:''
            }
        },
        methods: {
            // 通过axios.get()函数获取数据
            getBoom(){
                this.boom = '',
                this.boom1 = '',
                this.$axios
                .get("/api/boom",{
                    params:{
                        id: 10
                    }
                })
                .then(res => {
                this.boom = res.data;         
                })
            },
            // 直接通过axios函数获取后端数据
            getBoom1(){
                this.boom = '',
                this.boom1 = '',
                this.$axios({
                    url: '/api/boom',
                    method: 'get',
                    params:{
                        id: 10
                    }
                })
                .then(res => {
                this.boom1 = res.data;         
                })
            },  
            getBoom2(){
                this.boom = '',
                this.boom1 = '',
                this.boom2 = ''
                request({
                    url: '/api/boom',
                    method: 'get',
                    params:{
                        id: 10
                    }
                })
                .then(res => {
                this.boom2 = res.data;         
                })
            },                                     
        },

    }
</script>

<style>

</style>