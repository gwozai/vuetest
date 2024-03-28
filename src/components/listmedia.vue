<template>
    <div>
        <h2>资源列表:</h2>
        <ul>
            <li v-for="(link, index) in audioLinksList" :key="index">
                {{ link }} 
                <button @click="removeLink(link)">删除</button>
                <button @click="playLink(link)">播放</button>
            </li>
        </ul>
        <h2>资源添加:</h2>
        <input v-model="newLink" placeholder="输入要播放的资源链接..."/>
        <button @click="addLink(newLink)">添加</button>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    
    // 创建包含默认链接的播放列表
    const audioLinksList = ref(["http://1.15.7.2:9000/album/%E9%86%89%E7%BA%A2%E9%A2%9C_%E5%88%98%E4%BE%9D%E6%9C%B5.flac","/1.mp3","/obj_wo3DlMOGwrbDjj7DisKw_26273634012_a205_52a8_2af8_18a28fd85860e30f2065db73380912e7.flac"])
    
    // 新链接变量
    const newLink = ref('')
    
    // 保存当前播放的音频对象，这个变量可以确保同时只播放一个音频
    let playingAudio = null
    
    // 创建一个函数来添加新的链接到播放列表
    const addLink = (newLink) => {
        audioLinksList.value.push(newLink)
        newLink.value = '' // 清空输入框
    }
    
    // 创建一个函数来删除特定的链接从播放列表
    const removeLink = (linkToRemove) => {
        // 如果正在播放的链接是要删除的链接，先停止播放
        if (playingAudio && playingAudio.src === linkToRemove) {
            playingAudio.pause()
            playingAudio = null // 移除引用
        }
    
        // 从列表中删除链接
        audioLinksList.value = audioLinksList.value.filter(link => link !== linkToRemove)
    }
    
    // 创建一个函数来播放特定的链接
    const playLink = (linkToPlay) => {
        // 如果有正在播放的音频，暂停它
        if (playingAudio) {
            playingAudio.pause()
        }

        // 创建新的音频对象并播放
        playingAudio = new Audio(linkToPlay)
        playingAudio.onerror = function() {
        console.error('播放音频时发生问题：' + linkToPlay);
        };
        playingAudio.play()
    }
    </script>