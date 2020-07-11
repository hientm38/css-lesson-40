var btn = document.getElementById('language-btn');
var links = document.getElementById('language-links');

btn.addEventListener('click', showHide);


function showHide() {
    if (links.style.display == 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

document.addEventListener('mouseup', function(e) {
    if (!btn.contains(e.target))
    {
        if (!links.contains(e.target)) {
            links.style.display = 'none';
        }
    }
});