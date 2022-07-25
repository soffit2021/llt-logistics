let newId = window.location.hash.slice(1);
let chosenNews = news.filter(v => v.id == newId)[0];

const latestNews = document.getElementById("latestNews")
const mainNews = document.getElementById("mainNews");
const swiperWrapper = document.getElementById("swiperWrapper")

const setLatestNews = () => {
    latestNews.innerHTML = '';
    for (var i = news.length - 1; i > news.length - 3; i--) {
        const a = document.createElement("a");
        a.className = "newsBox";
        a.href = `./news.html#${news[i].id}`;
        a.innerHTML = `
                <div class="newsBox-top">
                    <img src="${news[i].mainImg}" alt="?">
                </div>
                <div class="newsBox-bottom">
                    <p class="date">${news[i].date}</p>
                    <h4 class="title">${news[i].title}</h4>
                    <p class="subtitle">${news[i].annotation}</p>
                </div>
        `;
        latestNews.appendChild(a)
    }
}

const LatestNewsSwiper = () => {
    swiperWrapper.innerHTML = '';
    for (var i = news.length - 1; i > news.length - 3; i--) {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <a href="./news.html#${news[i].id}" class="newsBox">
                <div class="newsBox-top">
                    <img src="${news[i].mainImg}" alt="?">
                </div>
                <div class="newsBox-bottom">
                    <p class="date">${news[i].date}</p>
                    <h4 class="title">${news[i].title}</h4>
                    <p class="subtitle">${news[i].annotation}</p>
                </div>
            </a>
        `
        swiperWrapper.appendChild(slide)
    }
}

if (window.screen.width > 1023) {
    setLatestNews();
} else {
    LatestNewsSwiper();
}

window.addEventListener(`resize`, event => {
    const windowWidth = window.screen.width;
    if (windowWidth > 1023) {
        setLatestNews();
    } else {
        LatestNewsSwiper();
    }
}, false);

let p = chosenNews.newsSections.map((elem, i) => {
    return `<p class="subtitle">${elem}</p>`
})

mainNews.innerHTML = `
    <img src="${chosenNews.mainImg}" alt="?">
    <p class="date">${chosenNews.date}</p>
    <h1 class="title">${chosenNews.title}</h1>
    ${p.join("")}
`