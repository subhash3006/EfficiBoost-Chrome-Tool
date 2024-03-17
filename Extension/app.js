// Get the Url
const site =window.location.hostname;

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

const site_list =[
"www.youtube.com","www.facebook.com",
"www.twitter.com","www.instagram.com",
"www.pinterest.com","www.telegram.com",
"www.fmovies.com"
]
if (site_list.includes(site)) {
    alert("You choosed to block this site just to chase your dreams,             Wait here is a message for you")
    document.querySelector("html").innerHTML = ""

  Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Aboreto");
        * {
            user-select: none !important;
            pointer-events: none !important;
        }

        html {
            background-color: #2234ae;
            background-image: linear-gradient(315deg, #2234ae 0%, #191714 74%);
        }

        #access-denied {
            font-family: "Aboreto";
            display: block !important;
            color: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            z-index: 999999999999;
        }
    `)
    Create_Custom_Element(
    "div",
    "id",
    "access-denied",
    `The more you invest in your goals,<br> the more you honor your parents' sacrifices.`
    )
}