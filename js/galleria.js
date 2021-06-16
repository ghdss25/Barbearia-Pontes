// selecting all required elements 

const filterItem = document.querySelector(".items"); 
const filterImg = document.querySelectorAll(".image");  

// Once window loaded
window.onload = ()=>{

    // When user clicked on filterItem div
    filterItem.onclick = (selectedItem)=>{

        // if user click element has .item class
        if(selectedItem.target.classList.contains("item")) {

            // remove the active class which is in the first element
            filterItem.querySelector(".active").classList.remove("active");

            // add that active class on the user selected element or item
            selectedItem.target.classList.add("active");

            // getting data-name value of the user selected item and storing in a filtername 
            // variable 
            let filterName = selectedItem.target.getAttribute("data-name");

            filterImg.forEach((image)=> {

                // getting image data-name value 
                let filterImages = image.getAttribute("data-name"); 
                
                /* if user selected item data-name value is equal to image data-name value 
                or user selected item data-name value is equal to "crespo"*/
                if((filterImages == filterName) || filterName == "tipo") {

                    image.classList.remove("hide");
                    image.classList.add("show"); 

                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });

        } 
    }

    for (let index = 0; index < filterImg.length; index++) {

        // adding onclick attribute in all avaibale images
        filterImg[index].setAttribute("onclick", "preview(this)");
    }
}

// selecting all required elements 
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"), 
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

// fullscreen preview image function 
function preview(element) {

    // once user click on any image then remove the scrollbar of the body, so user
    // cant scroll up or down 
    document.querySelector("body").style.overflow = "hidden";

    // getting user clicked image source link and store in a variable
    let selectedPrevImg = element.querySelector("img").src; 

    // getting user clicked data-name value
    let selectedImgCategory = element.getAttribute("data-name");

    // passing the data-name value to category name variable 
    categoryName.textContent = selectedImgCategory;

    // passing the user clicked image source in the preview image source
    previewImg.src = selectedPrevImg;

    // show the preview box
    previewBox.classList.add("show"); 

    // show the light gey background 
    shadow.classList.add("show"); 

    // if user click on the close icon of the preview box
    closeIcon.onclick = ()=>{

        // hide the preview box
        previewBox.classList.remove("show");

        // hide the light gey background 
        shadow.classList.remove("show");

        // show the scroll bar of body
        document.querySelector("body").style.overflow = "scroll";
    }
}
