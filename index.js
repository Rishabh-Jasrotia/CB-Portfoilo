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
    boxes.forEach(ele => {
        if(isInViewport(ele))
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