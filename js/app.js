import "../css/style.css"
const as = document.getElementsByTagName("a");
const lis = document.getElementsByTagName("li");
document.getElementById("route-0").style.display = "block";
const routes = document.getElementsByClassName("route");

for (let i = 0; i < as.length; i++) {
    const aEl = as[i];
    aEl.addEventListener("click", (ev) => {
        if (lis[i - 1] && !lis[i - 1].classList.contains("active")) return;
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            element.parentElement.classList.remove("active")
        }
        for (let index = 0; index <= i; index++) {
            const element = as[index];
            element.parentElement.classList.add("active")
        }
        for (let ir = 0; ir < routes.length; ir++) {
            const route = routes[ir];
            route.style.display = "none";
        }
        routes[i].style.display = "block"
    })
}

document.getElementById("btn-title").addEventListener("click", () => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        route.style.display = "none";
    }
    document.getElementById("route-1").style.display = "block"
    for (let index = 0; index < 2; index++) {
        const element = as[index];
        element.parentElement.classList.remove("active")
    }
    for (let index = 0; index < 2; index++) {
        const element = as[index];
        element.parentElement.classList.add("active")
    }
})

document.getElementById("btn-back-1").addEventListener("click", () => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        route.style.display = "none";
    }
    document.getElementById("route-0").style.display = "block"
    for (let index = 0; index < 1; index++) {
        const element = as[index];
        element.parentElement.classList.remove("active")
    }
    for (let index = 0; index < 1; index++) {
        const element = as[index];
        element.parentElement.classList.add("active")
    }

})