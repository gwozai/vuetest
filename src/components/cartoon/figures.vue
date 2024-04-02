<template>
    <div>
        <h1>Figures</h1>
    </div>
    <!-- 点击数字增加，和还能归零 ，动画-->
    <div>
        <h2>数字增加</h2>
        <button @click="add">增加</button>
        <button @click="reset">归零</button>
        <p>{{ count }}</p>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++
        },
        reset() {
            this.count = 0
        }
    }

}
</script>

<style>
.container {
    font-family: "Arial", sans-serif;
    color: #2c3e50;
}
.greeting {
    font-size: 2em;
    color: #1a1a1a;
}

</style>