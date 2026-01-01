console.log('test')

async function makeRequest(url, method = 'GET') {
    let response = await fetch(url, {"method": method})
    if (response.ok) {
        return await response.json();
    } else {
        let error = await response.json()
        throw new Error(error.message)
    }
}

async function onClick(event) {
    event.preventDefault();
    console.log(event.target);
    let btn = event.target;
    let url = btn.href;
    let response = await makeRequest(url);

    if (response.action === 'Liked'){
        btn.innerText = 'Unlike';
    } else {
        btn.innerText = 'Like';
    }

    let counter = document.getElementById(`article-${btn.dataset.articleId}`)
    counter.innerText = response.likes_count


}

function onLoad() {
    let likeButtons = document.querySelectorAll('[data-like="article"]');
    for (let likeBtn of likeButtons){
        likeBtn.addEventListener("click", onClick);
        console.log(likeBtn);
    }

}

window.addEventListener("load", onLoad)