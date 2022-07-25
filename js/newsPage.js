const newsRow = document.getElementById("newsRow");
const btnGroup = document.getElementById("btnGroup");
const latestNews = document.getElementById("latestNews");

const setLatestNews = () => {
    for (var i = news.length - 1; i > news.length - 3; i--) {
        const newsCol = document.createElement("div");
        newsCol.className = "news-section-inner-row-col";
        newsCol.innerHTML = `
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
        `;
        newsRow.appendChild(newsCol)
    }
}

setLatestNews();

const chooseNews = (name, event) => {
    newsRow.innerHTML = '';

    for (var i = 0; i < btnGroup.children.length; i++) {
        btnGroup.children[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");

    if (name === 'latest') {
        setLatestNews()
    } else {
        const newMas = news.filter(v => v.type === name);
        newMas.map((elem, i) => {
            const newsCol = document.createElement("div");
            newsCol.className = "news-section-inner-row-col";
            newsCol.innerHTML = `
                <a href="./news.html#${elem.id}" class="newsBox">
                    <div class="newsBox-top">
                        <img src="${elem.mainImg}" alt="?">
                    </div>
                    <div class="newsBox-bottom">
                        <p class="date">${elem.date}</p>
                        <h4 class="title">${elem.title}</h4>
                        <p class="subtitle">${elem.annotation}</p>
                    </div>
                </a>
            `;
            newsRow.appendChild(newsCol)
        })
    }
}

