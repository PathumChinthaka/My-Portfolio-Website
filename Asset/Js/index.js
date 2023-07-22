


// add js about content view
var subLinks=document.getElementsByClassName('sub-links');
var subContents=document.getElementsByClassName('sub-content');

function openTab(tabname){
    for(subLink of subLinks){
        subLink.classList.remove('active-link');
    }

    for(subContent of subContents){
        subContent.classList.remove('active-content');
    }

    event.currentTarget.classList.add('active-link');

    document.getElementById(tabname).classList.add('active-content');
}