
// tab-func
let tab_contents = document.getElementsByClassName("tab-content-list");


function tab_change(tab_content_positon) {

    for (let i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = 'none';
    }

    tab_contents[tab_content_positon].style.display = 'block';
}


// active-bg
const tab_btn_Lists = document.querySelectorAll('.tab-btn-list');

tab_btn_Lists.forEach((tab_btn_List) => {
    tab_btn_List.addEventListener('click', () => {
        tab_btn_Lists.forEach((item) => {
            if (item !== this && item.classList.contains('active')){
                item.classList.remove('active')
            };
        });
        tab_btn_List.classList.add('active');
    });
});


