document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#button")

    button.addEventListener("click", () => {
        window.location.href = "redirect.html"
    })
})
