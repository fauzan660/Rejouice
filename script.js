var page1 = document.querySelector(".page1-content");
var cursor = document.querySelector(".cursor");

function cursorEvent() {

    page1.addEventListener("mousemove", (details) => {
        gsap.to(cursor, {
            y: details.y,
            x: details.x
        });
    });
};

cursorEvent();


function cursorleave() {
    
    page1.addEventListener("mouseenter", () => {
        gsap.from(cursor, {
            delay: 1
        });
    });
};