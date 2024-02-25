const progressEL = document.querySelector(".progress");
const openBtn=document.querySelector(".open-btn")
const closeBtn=document.querySelector(".close-btn")
const modalContainer=document.querySelector(".modal-container")


openBtn.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})


window.onscroll = () => scrollProgress();

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scroll = (scrollTop / pageHeight) * 100;
    progressEL.style.visibility = "visible";
    progressEL.style.width = scroll + "%";
}

