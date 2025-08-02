<template>
    <div class="container">
        <section id="sectionMain" class="section1">
            <h1 :class="{ active: !isMobile, inactive: isMobile }">
                I'm<TextTyping :text="['Student', 'Developer', 'Engineer', 'Programmer']" :time="10000" />
            </h1>
        </section>
        <section class="section2" id="sectionIntroduction">
            <font-awesome-icon id="down" icon="fa-solid fa-angle-up" bounce />
            <div id="myIntro">
                <div class="myText" id="myText1">
                    <h3 class="myTextTitle">Who am I</h3>
                    <p class="myTextContent">
                        你好，我是陳元謙，一位對科技充滿熱情的大學生。目前就讀於國立中央大學太空科學與工程學系，熱愛探索新知識，並樂於動手實作各種專案。不論是寫程式、建模、設計還是組裝，我都喜歡把想法變成實體。
                    </p>
                </div>
                <div class="myText" id="myText2">
                    <h3 class="myTextTitle">Academy</h3>
                    <p class="myTextContent">
                        目前就讀於國立中央大學太空科學與工程學系，專注於太空科技相關領域的學習與實作。除了課堂理論外，也積極參與實作專題，像是立方衛星設計、模擬任務系統與太空資料分析等。
                    </p>
                </div>
                <div class="myText" id="myText3">
                    <h3 class="myTextTitle">Coding</h3>
                    <p class="myTextContent">
                        具備前後端開發經驗，熟悉使用以下工具與技術： 前端：Vue.js、Nuxt、Tailwind CSS 後端：Node.js、Express 版本控制：Git / GitLab
                        也曾開發過團隊網站、IoT 控制介面、動畫互動頁面，並致力於將工程概念結合實際應用。
                    </p>
                </div>
                <div class="myText" id="myText4">
                    <h3 class="myTextTitle">3D 建模與列印</h3>
                    <p class="myTextContent">
                        擅長使用 Fusion 360 進行產品與機構建模，並使用 3D
                        印表機（FDM）進行製作，應用於無人機機殼、立方衛星結構、簡易道具等。具備基本設計到切片、列印與後處理的完整流程經驗。
                    </p>
                </div>
                <img src="" alt="" class="myImg" id="myImg1" />
                <img src="" alt="" class="myImg" id="myImg2" />
                <img src="" alt="" class="myImg" id="myImg3" />
            </div>
        </section>
    </div>
</template>

<script setup>
//import
import TextTyping from "../components/index/textTyping.vue";

//values
const isMobile = ref(false);

//functions

//run
onMounted(() => {
    if (window.innerWidth < window.innerHeight) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
    }
});
</script>

<style scoped>
.container {
    width: 100vw;
    height: 1000vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section {
    height: auto;
    width: 100%;
}

.section1 {
    background-color: var(--bg1);
}

.section2 {
    background-color: var(--bg2);
}

#sectionMain {
    width: 100vw;
    height: 100vh;
    padding: 0;
    background-image: url("/index/bgc2.webp");
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

h1.active {
    font-size: 80px;
}

h1.inactive {
    font-size: 50px;
}

#down {
    font-size: 30px;
    color: var(--tc1);
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
}

#sectionIntroduction {
    height: 100vh;
    position: fixed;
    top: 100vh;
    left: 0;
    animation: scrollToIntro linear forwards;
    animation-timeline: scroll();
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#myIntro {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
}

.myText {
    width: 50%;
    height: 100%;
    overflow-y: auto;
    position: absolute;
    left: 5%;
    top: 110vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
}

.myImg {
    width: 30%;
    height: 80%;
    position: absolute;
}

.myTextTitle {
    color: var(--dc1);
    font-size: xx-large;
}

#myText1 {
    animation: myText1Scroll ease-in-out;
    animation-timeline: scroll(root);
}
#myText2 {
    animation: myText2Scroll ease-in-out;
    animation-timeline: scroll(root);
}
#myText3 {
    animation: myText3Scroll ease-in-out;
    animation-timeline: scroll(root);
}
#myText4 {
    animation: myText4Scroll ease-in-out;
    animation-timeline: scroll(root);
}

@keyframes scrollToIntro {
    0% {
        top: 100vh;
    }
    10% {
        top: 0;
    }
    100% {
        top: 0;
    }
}

@keyframes myText1Scroll {
    0% {
        top: 90vh;
        opacity: 0;
    }
    8% {
        top: 90vh;
        opacity: 0;
    }
    13% {
        top: 50vh;
        opacity: 1;
    }
    18% {
        top: 10vh;
        opacity: 0;
    }
    100% {
        top: -10vh;
        opacity: 0;
    }
}

@keyframes myText2Scroll {
    0% {
        top: 90vh;
        opacity: 0;
    }
    16% {
        top: 90vh;
        opacity: 0;
    }
    21% {
        top: 50vh;
        opacity: 1;
    }
    26% {
        top: 10vh;
        opacity: 0;
    }
    100% {
        top: -10vh;
        opacity: 0;
    }
}
@keyframes myText3Scroll {
    0% {
        top: 90vh;
        opacity: 0;
    }
    24% {
        top: 90vh;
        opacity: 0;
    }
    29% {
        top: 50vh;
        opacity: 1;
    }
    34% {
        top: 10vh;
        opacity: 0;
    }
    100% {
        top: -10vh;
        opacity: 0;
    }
}
@keyframes myText4Scroll {
    0% {
        top: 90vh;
        opacity: 0;
    }
    32% {
        top: 90vh;
        opacity: 0;
    }
    37% {
        top: 50vh;
        opacity: 1;
    }
    42% {
        top: 50vh;
        opacity: 1;
    }
    100% {
        top: 50vh;
        opacity: 1;
    }
}
</style>
