window.addEventListener("DOMContentLoaded", (event) => {
    //smoothScroll();
    //section_coverage();
});


function smoothScroll(){
    var container = document.querySelector(".home");

    var height = container.clientHeight;
    document.body.style.height = height + "px";

    gsap.to(container, {
        y: -(height - document.documentElement.clientHeight),
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: .8
        }
    });
}

function section_coverage(){

    document.addEventListener("scroll", coverage_section1, false);


    function coverage_section1(){
        gsap.to("header",{
            duration: .2,
            opacity: 0
        })
        gsap.to(".darkorange", {
            duration: .2,
            y: "-90vh"
        })
    }
}