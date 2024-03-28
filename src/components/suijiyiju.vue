<template>
    <div class="container">
        <div class="sentence-display">
            <p>{{ randomSentence }}</p>
        </div>
        <div class="button-container">
            <button class="fetch-button" @click="getRandomSentence"></button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sentences: [
                    "革命不是请客吃饭，不是做文章，不是绘画绣花，不能那么雅致，那么从容不迫，文质彬彬，那样温良恭俭让。",
                    "自由的意思是，懂得自己的需要，并且可以为它们而斗争。",
                    "世间的活动，缺点虽多，但仍是美好的。",
                    "人类的悲欢并不相通，我只觉得他们吵闹。",
                    "我的里程碑是思想，没有别的事情能够代替它。"
                ],
                randomSentence: '',
            };
        },
        methods: {
            getRandomSentence() {
                const randomIndex = Math.floor(Math.random() * this.sentences.length);
                this.randomSentence = this.sentences[randomIndex];
            }
        },
        mounted() {
            this.getRandomSentence();
        }
    }
</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
}

.sentence-display {
    display: flex;
    width: 80%;
    height: 8rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    background: rgba(255,255,255,0.8);
    border-radius: 10px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.1);
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.fetch-button {
    all: unset;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4CD137;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
}

.fetch-button:before {
    content: '↺';
}
</style>