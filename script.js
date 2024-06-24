document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".cursor");
    const star = document.querySelector(".star");

    document.addEventListener("mousemove", function(e) {

        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";


        star.style.left = e.pageX + "px";
        star.style.top = e.pageY + "px";


        createStarDust(e.pageX, e.pageY);
    });

    document.addEventListener("mouseenter", function() {
        cursor.style.display = "block";
        star.style.display = "block";
    });

    document.addEventListener("mouseleave", function() {
        cursor.style.display = "none";
        star.style.display = "none";
    });

    function createStarDust(x, y) {
        const starDust = document.createElement("div");
        starDust.classList.add("star-dust");
        starDust.style.left = x + "px";
        starDust.style.top = y + "px";
        document.body.appendChild(starDust);

        setTimeout(() => {
            starDust.remove();
        }, 1000); 
    }
});
