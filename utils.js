const toggle_visibility = (element_id) => {
    // Get the element requested
    let element = document.getElementById(element_id);
    console.log(element)
    // Confirm if the element is hidden or not, then toggle state
    if (element.getAttribute("data-hidden") === "false") {
        element.setAttribute("data-hidden", "true")
    } else {
        element.setAttribute("data-hidden", "false")
    }
}