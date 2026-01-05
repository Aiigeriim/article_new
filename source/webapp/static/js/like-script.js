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
    let btn = event.target;
    let url = btn.href;
    let response = await makeRequest(url);
    if (response.action === 'Liked') {
        btn.innerText = 'Unlike';
    } else {
        btn.innerText = 'Like';
    }

    let counter = btn.parentElement.getElementsByTagName("span")[0];
    counter.innerText = response.likes_count

}

function onLoad() {
    let likeButtons = document.querySelectorAll('[data-like="like"]');
    for (let likeBtn of likeButtons) {
        likeBtn.addEventListener("click", onClick);
    }

}

window.addEventListener("load", onLoad);