document.querySelectorAll("nav button").forEach(b => {
    b.addEventListener('click', e => {
        document.querySelectorAll(".nav-selected").forEach(bb => {
            bb.classList.remove('nav-selected');
        });
        b.classList.add('nav-selected');
    });
});

const searchInput = document.querySelector("#search input");

searchInput.addEventListener('input', e => {
    
});

feather.replace();