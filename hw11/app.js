
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText))

    }
}

const http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/albums', (res) => {
    const parsedAlbums = JSON.parse(res);
    const albumForRender = new Albums();
    parsedAlbums.forEach(post => {
        albumForRender.render(post);
    });
});

class Albums {
    constructor () {
        this.wrapper = document.querySelector('#left');
    }
    handleClick(event) {
        http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + event.target.dataset.id, (res) => {
            const parsedPhotos = JSON.parse(res);
            const listOfPhoto = new Photos();
            listOfPhoto.refreshAlbum();
            parsedPhotos.forEach(post => {
                listOfPhoto.render(post);
            })
        });
    };
    render(post) {
        const newAlbum = document.createElement('div');
        newAlbum.innerText = post.title;
        newAlbum.setAttribute('data-id', post.id);
        newAlbum.addEventListener('click', this.handleClick);
        this.wrapper.append(newAlbum);
    };
};

class Photos {
    constructor () {
        this.wrapper = document.querySelector('#right');
    }
    render(post) {
         this.wrapper.insertAdjacentHTML('beforeend', `
            <div class="img-wrapper" data-id="${post.id}">
                <a href="${post.url}">
                    <img src="${post.thumbnailUrl}">
                </a>
            </div>`);
    };
    refreshAlbum(){
        this.wrapper.innerText = '';    
    }
};



