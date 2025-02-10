gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        //turn navs blue
        gsap.to(links, {color: "#252525"});

        if(document.activeElement === e.target){
            gsap.to(link, { color: "000000"});
        }
        //wanna move the line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1,0.5)",
        });
    });
});