var root = document.querySelector(":root")


//start onload page
// function myFunction(){



//     const opt1 = document.querySelector(".sidebar--content .option a:nth-child(2)")
//     const nav2 = document.querySelector(".fotter .right a:nth-child(2)")

//     const href = document.location.href;
//     const lastPathSegment = href.substr(href.lastIndexOf('/') + 1); //get file html (eg: index.html, shop.html,...)

//     if (lastPathSegment == "index.html"){
//         opt1.style.setProperty("--orangeLineWidth", "80px")
//     }
//     else if (lastPathSegment == "shop.html"){
//         nav2
//     }

// }

//end onload page



// start scroll top

const scrollToTop = document.querySelector(".scroll-up")
window.onscroll = function () {
    scrollTop()
};

function scrollTop() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
        scrollToTop.style.right = "50px";
    else
        scrollToTop.style.right = "-80px";
}
// end scroll top




// start search bar
// show search bar
const searchBar = document.querySelector(".sidebar--content .search-bar")
function showSearchBar() {
    searchBar.classList.toggle("show-seacrh-bar")
    input.focus()
}
function hideSearchBar() {
    searchBar.classList.add("show-seacrh-bar")
}


//clear input field
const input = document.querySelector(".sidebar--content .search-bar .container input")
const clearInputBtn = document.querySelector(".sidebar--content .clear-input-btn")
function showClearInput() {
    if (input.value !== "") {
        clearInputBtn.style.display = "block"
    }
    else {
        clearInputBtn.style.display = "none"
    }
}

function clearInput() {
    if (input.value !== "") {
        input.value = "";
        input.focus()
    }
}

// end search bar

// start quantity
const qty = document.querySelector(".content .quantity span")
function plus() {
    const i = parseInt(qty.textContent) + 1;
    qty.textContent = i;

}
function minus(className) {
    if (parseInt(qty.textContent) > 0) {
        const i = parseInt(qty.textContent) - 1;
        qty.textContent = i;
    }
}


// end quantity



// start country Selector

function showCountrySelector() {
    const down = document.querySelector(".checkout-wrapper .info .country i")
    const countrySelector = document.querySelector(".checkout-wrapper .country-selector .wrapper")

    if (down.style.transform == "rotate(180deg)") {
        down.style.removeProperty('transform');

        Object.assign(countrySelector.style, {
            transform: 'translate(300px, -190px) scale(0)',
            opacity: "0"

        })



    }
    else {
        down.style.transform = "rotate(180deg)";
        Object.assign(countrySelector.style, {
            transform: 'translate(0,0) scale(1)',
            opacity: "1"

        })
    }


}

function selectedCountry(x) {

    const down = document.querySelector(".checkout-wrapper .info .country i")

    const countryName = document.querySelector(".checkout-wrapper .info .country input")
    const countrySelector = document.querySelector(".checkout-wrapper .country-selector .wrapper")

    countryName.value = x.textContent.trim()
    down.style.removeProperty('transform');
    Object.assign(countrySelector.style, {
        transform: 'translate(300px, -190px) scale(0)',
        opacity: "0"

    })
}



// end country Selecter





//start chatbox
//start open & close chatbox
function openChatBox() {
    let chatBox = document.querySelector(".chat .chat-box ")
    let chatImg = document.querySelector(".chat .chat-icon ")
    let chatNoti = document.querySelector(".chat .chat-notification")
    Object.assign(chatBox.style, {
        height: "400px",
        width: "300px",
        transform: 'translate(0px,0px) scale(1)',
        opacity: "1"
    })
    Object.assign(chatImg.style, {
        transform: 'translate(40px, 40px) scale(0)',
        opacity: "0"
    })
    Object.assign(chatNoti.style, {
        opacity: "0"
    })
}

function closeChatBox() {
    let chatBox = document.querySelector(".chat .chat-box ")
    let chatImg = document.querySelector(".chat .chat-icon ")

    Object.assign(chatBox.style, {
        transform: 'translate(150px, 200px) scale(0)',
        opacity: "0"
    })
    Object.assign(chatImg.style, {
        transform: 'translate(0px, 0px) scale(1)',
        opacity: "1"
    })
}
//end open & close chatbox


//start send message

function sendMess() {
    let mess = document.querySelector(".chat-box .type-zone .message");
    let conversation = document.querySelector(".chat-box .conversation")
    let rightConversation = document.querySelector(".chat-box .conversation .right .mess-container")
    let myMessage = document.createElement('div')
    let chatBox = document.querySelector(".chat-box");

    if (mess.value) {
        if (rightConversation) {
            let newMess = document.createElement('p')
            newMess.classList.add('mess')
            newMess.innerText = `${mess.value}`
            rightConversation.appendChild(newMess)
        }
        else {
            myMessage.classList.add('group', 'right')

            myMessage.innerHTML =
                `
                <div class="avatar">
                    <img src="./assets/img/icon/user.jpg" alt="" class="">
                </div>
                <div class="mess-container">
                    <p class="mess">${mess.value}</p>
                </div>
                `
            conversation.appendChild(myMessage)

        }
        conversation.scrollTo(0, conversation.scrollHeight);
        mess.value = ""
        mess.focus()

    }

}
    //End send message

//End chatbox
