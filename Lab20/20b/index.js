// var url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=5a2f0ff567e64de88e756fbc04beb240';

// var req = new Request(url);

fetch('https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=5a2f0ff567e64de88e756fbc04beb240') 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        console.log(data.totalResults);
        console.log(data.articles[0]);
        createArticles(data.articles);
    });

function createArticles(articles) {
    articles.forEach(element => {
        $('.news-articles').append(`
            <div class="article">
                <h3 class="article-title">{element.title}</h3>
                <h4 class="article-author">{element.author}</h4>
                <img class="article-image" src={element.urlToImage} />
                <p class="article-description">{element.description}</p>
                <a href={element.url}></a>
                <h5 class="article-date">{element.publishedAt}</h5>
            </div>
            `
        );
    });
}