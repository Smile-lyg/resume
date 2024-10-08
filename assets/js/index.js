function myloading() {
    document.getElementsByClassName('avatar')[0].style.display = 'block';
    document.getElementsByClassName('loading')[0].style.display = 'none';
}

function showPic(fname) {
    document.querySelector('#dialogBg').style.display = 'block'
    document.querySelector('#dialogBg>.dialog>.certImg').setAttribute('src', `./assets/images/${fname}.jpg`)
}

window.onload = function () {
    document.querySelector('#dialogBg').addEventListener('click', function () {
        this.style.display = 'none'
    })
}