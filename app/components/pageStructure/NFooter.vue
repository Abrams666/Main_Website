<template>
    <footer>
        <div class="footer-content" :class="{ active: !isMobile, inactive: isMobile }">
            <div class="content-section">
                <p class="section-title" :class="{ active: !isMobile, inactive: isMobile }">Quick Links:</p>
                <ul>
                    <li><font-awesome-icon icon="fa-solid fa-house" /><a href="/" :class="{ active: !isMobile, inactive: isMobile }">Home</a></li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" /><a href="/contact" :class="{ active: !isMobile, inactive: isMobile }"
                            >Contact</a
                        >
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-trophy" /><a href="/achieve" :class="{ active: !isMobile, inactive: isMobile }"
                            >Achieve.</a
                        >
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-diagram-project" /><a href="/work" :class="{ active: !isMobile, inactive: isMobile }"
                            >Work</a
                        >
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-code" /><a href="/project" :class="{ active: !isMobile, inactive: isMobile }">Project</a>
                    </li>
                </ul>
            </div>
            <div class="content-section">
                <p class="section-title" :class="{ active: !isMobile, inactive: isMobile }">Contact:</p>
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <p :class="{ active: !isMobile, inactive: isMobile }">Email: abrams@g.ncu.edu.tw</p>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                        <a href="https://www.facebook.com/chen.yuan.qian.845782" :class="{ active: !isMobile, inactive: isMobile }">Facebook</a>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                        <a href="https://www.instagram.com/abrams_66" :class="{ active: !isMobile, inactive: isMobile }">Instagram</a>
                    </li>
                </ul>
            </div>
            <div class="content-section">
                <p class="section-title" :class="{ active: !isMobile, inactive: isMobile }">Source:</p>
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-github" /><a
                            href="https://github.com/Abrams666/Main_Website"
                            :class="{ active: !isMobile, inactive: isMobile }"
                            >Github</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2025 Abrams. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
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
footer {
    width: 94vw;
    height: auto;
    padding: 3%;
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: black;
    color: var(--tc1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}

.footer-content.active {
    width: 60%;
}

.footer-content.inactive {
    width: 90%;
}

.content-section {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 5px;
}

.section-title.active {
    font-size: larger;
}

.section-title.inactive {
    font-size: smaller;
}

.copyright {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    border-top: 1px solid var(--tc1);
}

.copyright p {
    width: 100%;
    height: auto;
}

ul {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2px;
}

ul li {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 5px;
}

li p.inactive,
li a.inactive {
    font-size: xx-small;
}
</style>
