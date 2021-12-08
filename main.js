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
    window.onscroll = function() {
        scrollTop()
    };

    function scrollTop() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
            scrollToTop.style.right = "50px";
        else
            scrollToTop.style.right = "-50px";
    }
// end scroll top

// start search bar
    // show search bar
    const searchBar = document.querySelector(".sidebar--content .search-bar")
    function showSearchBar(){
        searchBar.classList.toggle("show-seacrh-bar")
        input.focus()
    }
    function hideSearchBar(){
        searchBar.classList.add("show-seacrh-bar")
    }


    //clear input field
    const input = document.querySelector(".sidebar--content .search-bar .container input")
    const clearInputBtn = document.querySelector(".sidebar--content .clear-input-btn")
    function showClearInput(){
        if(input.value !==""){
            clearInputBtn.style.display = "block"
        }
        else{
            clearInputBtn.style.display = "none"
        }
    }

    function clearInput(){
        if(input.value !==""){
            input.value ="";
            input.focus()
        }
    }

// end search bar

// start quantity
const qty = document.querySelector(".content .quantity span")
function plus(){
    
    const i = parseInt(qty.textContent)+1;
    qty.textContent=i;
}
function minus(){
    if (parseInt(qty.textContent)> 1){
        const i = parseInt(qty.textContent)-1;
        qty.textContent=i;
    }
}
// end quantity



// start country Selecter

function showCountrySelector(){
    const down = document.querySelector(".checkout-wrapper .info .country i")
    const countrySelector = document.querySelector(".checkout-wrapper .country-selector .wrapper")
    
    if(down.style.transform == "rotate(180deg)"){
        down.style.removeProperty('transform');
        
        Object.assign(countrySelector.style, {
            transform: 'translate(90px, -90px) scale(0.7)',
            opacity: '0'
        })
        
    
        
    }
    else{
        down.style.transform= "rotate(180deg)";
        Object.assign(countrySelector.style, {
            transform: 'translate(0,0) scale(1)',
            opacity: '1'
        })
    }
        
        

        
    
}
// end country Selecter