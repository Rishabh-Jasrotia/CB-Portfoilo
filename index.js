function isInViewport(element)
{
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -250 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
var boxes= document.querySelectorAll(".services-box");
window.addEventListener('scroll',e =>{
    var w=window.outerWidth;
    boxes.forEach(ele => {
        if(isInViewport(ele) && w>760)
        {
            if(ele.id==="box-tech")
                ele.classList.add("anim-2");
            else
                ele.classList.add("anim-1")
        }
        else
        {
            if(ele.id==="box-tech")
                ele.classList.remove("anim-2");
            else
                ele.classList.remove("anim-1")
        }
    });
});
var navopen=false
document.getElementById("hamburger").addEventListener('click', ele => {
    if(!navopen)
    {
        document.getElementById("nav-overlay").classList.add("nav-anim");
        document.querySelector("body").style.overflowY="hidden";
        navopen=true;
    }
    else
    {
        document.getElementById("nav-overlay").classList.remove("nav-anim");
        document.querySelector("body").style.overflowY="visible";
        navopen=false;
    }
});
document.querySelectorAll("#nav-overlay a").forEach(ele => {
    ele.addEventListener('click',e => {
        document.getElementById("nav-overlay").classList.remove("nav-anim");
        document.querySelector("body").style.overflowY="visible";
        navopen=false;
    });
});