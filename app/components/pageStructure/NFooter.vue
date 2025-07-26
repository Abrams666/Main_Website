<template>
    <footer>
        <div class="footer-content">
            <div class="content-section">
                <p class="section-title">Quick Links:</p>
                <ul>
                    <li><font-awesome-icon icon="fa-solid fa-house" /><a href="/">Home</a></li>
                    <li><font-awesome-icon icon="fa-solid fa-circle-info" /><a href="/about">About</a></li>
                    <li><font-awesome-icon icon="fa-solid fa-envelope" /><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="content-section">
                <p class="section-title">Contact:</p>
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <p>Email: abrams@g.ncu.edu.tw</p>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                        <a href="https://www.facebook.com/chen.yuan.qian.845782">Facebook</a>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                        <a href="https://www.instagram.com/abrams_66">Instagram</a>
                    </li>
                </ul>
            </div>
            <div class="content-section">
                <p class="section-title">Source:</p>
                <ul>
                    <li><font-awesome-icon icon="fa-brands fa-github" /><a href="https://github.com/Abrams666/Main_Website">Github</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2025 Abrams. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
footer {
    width: 94vw;
    height: 20vh;
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
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
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

.section-title {
    font-size: larger;
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
</style>
