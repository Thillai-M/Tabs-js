
// tab-func
let tab_contents = document.getElementsByClassName("tab-content-list");


function tab_change(tab_content_positon) {

    for (let i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = 'none';
    }

    tab_contents[tab_content_positon].style.display = 'block';
}


const tab_btn_Lists = document.querySelectorAll('.tab-btn-list');

for (let tab_btn of tab_btn_Lists) {
    tab_btn.addEventListener('click', function() {
        document.querySelector('.tab-btn-list.active')?.classList.remove('active');
        this.classList.add('active');
    });
}

