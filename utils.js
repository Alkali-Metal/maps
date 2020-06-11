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
};


const download = (file) => {
    var element = document.createElement('a');
    element.setAttribute('href', `./assets/downloads/${file}`);
    element.setAttribute('download', true)
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};


const alert_webhook = (webhook_id, webhook_key) => {}