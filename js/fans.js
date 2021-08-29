let button = document.getElementsByClassName('message-btn')[0];
let textarea = document.getElementById("message-field");

let allArticles = document.querySelectorAll('article.content-article');
let lastArticle = document.querySelectorAll('article.content-article')[allArticles.length - 1];

button.addEventListener('click', () => {
    let newArticle = document.createElement('article');
    newArticle.className = 'content-article';

    let data = new Date();

    newArticle.innerHTML = `
        <p class="content-text">${textarea.value}</p>

        <div class="signature">
            <div class="signature-time">
                ${data.getDate()}.0${data.getMonth() + 1}.${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}
            </div>
            <div class="signature-author">
                Guest
            </div>
        </div>

        <div class="content-line"></div>
    `;
    
    allArticles = document.querySelectorAll('article.content-article');
    lastArticle = document.querySelectorAll('article.content-article')[allArticles.length - 1];
    lastArticle.after(newArticle);

    textarea.value = null;
});