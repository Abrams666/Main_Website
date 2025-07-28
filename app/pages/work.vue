<template>
    <section>
        <h1><font-awesome-icon icon="fa-solid fa-diagram-project" />Works</h1>
        <div id="container">
            <a v-for="(item, index) in workData" :key="index" :href="`/workdetail/w${item.id}`">
                <div class="imageController">
                    <img :src="`/work/images/w${item.id}n1.webp`" alt="" />
                </div>
                <div class="contentController">
                    <p class="title">{{ item.title }}</p>
                    <p class="description">{{ item.description }}</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup>
//import
import workData from "../assets/json/workData.json";
</script>

<style scoped>
section {
    width: 90vw;
    height: auto;
    min-height: 80vh;
    padding-top: 15vh;
    padding-bottom: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
    background-color: var(--bg2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

h1 {
    width: 100%;
    height: 10vh;
    font-size: 5vh;
    text-align: left;
}

#container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
}

#container a {
    width: 40%;
    height: 30vh;
    padding: 20px;
    min-width: 300px;
    background-color: var(--bg1);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.imageController {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
}

.contentController {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
}

.title {
    height: 10%;
    width: 100%;
    text-align: start;
    font-weight: bold;
}

.description {
    width: 100%;
    height: auto;
    max-height: 90%;
    text-align: start;
    overflow-y: auto;
}
</style>
