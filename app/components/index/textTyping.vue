<template>
    <div id="container">
        <p id="text">{{ currentText }}</p>
        <div id="cursor"></div>
    </div>
</template>

<script setup>
//values
let currentText = ref("");
let totalSteps = 0;
let remainText = "";
const props = defineProps({
    text: Array,
    time: Number,
});

//functions
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//run
for (let i = 0; i < props.text.length; i++) {
    totalSteps += props.text[i].length * 2;
}

onMounted(async () => {
    while (true) {
        currentText.value = "";
        for (let i = 0; i < props.text.length; i++) {
            for (let j = 0; j < props.text[i].length; j++) {
                currentText.value += props.text[i][j];
                await sleep(props.time / totalSteps);
            }

            await sleep(1000);

            for (let j = props.text[i].length - 1; j >= 0; j--) {
                remainText = "";
                for (let k = 0; k < j; k++) {
                    remainText += props.text[i][k];
                }
                currentText.value = remainText;
                await sleep(props.time / totalSteps);
            }

            await sleep(1000);
        }
    }
});
</script>

<style scoped>
#container {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#text {
    font-size: 80px;
    margin-right: 5px;
}

#cursor {
    width: 20px;
    height: 80px;
    background-color: var(--dc1);
    animation: blink 1.5s infinite;
}

@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
