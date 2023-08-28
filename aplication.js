// modal pop box


let isOpenMainModal;


const setModal = () => {
    let modalBtn = document.querySelector("#back-project");
    let modal = document.querySelector("#myModal");
    let modalCloseBtn = document.querySelector(".modal-close-btn");

    modalBtn.addEventListener("click", (event) => {
        event.preventDefault();

        isOpenMainModal = true;
        modal.classList.add("open");


    });

    modalCloseBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (isOpenMainModal) {
            modal.classList.remove("open");

        }
    });
};








// bookmark

const setBookmark = () => {

    const bookmark_text = document.querySelector(".bookmark");
    const content = document.querySelector('.bookmark');
    const icon = document.querySelector('.icon-bookmark');



    let bookmarked = false;

    bookmark.addEventListener("click", () => {

        if (bookmarked = !bookmarked) {
            return bookmark_text.innerText = "Bookmarked",
                content.style.color = '#3bb4ad', icon.style.fill = '#3bb4ad',
                content.style.fontWeight = "600";
        } else {
            return bookmark_text.innerText = "Bookmark",
                content.style.color = 'black', icon.style.fill = '#5e5d5d',
                content.style.fontWeight = "400";
        }

    });

}




// thanks modal pop


const setThanks = () => {

    const thanksBtn = document.querySelector('#select1');
    const thanksBox = document.querySelector('#show-hide');
    const closeBtn = document.querySelector('.thanks-btn');


    thanksBtn.addEventListener('click', (event) => {
        event.preventDefault();

        thanksBox.classList.add('show');

    });


    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();

        thanksBox.classList.remove('show');

    });

};




const setThanks2 = () => {

    const thanksBtn = document.querySelector('#select2');
    const thanksBox = document.querySelector('#show-hide');
    const closeBtn = document.querySelector('.thanks-btn');


    thanksBtn.addEventListener('click', (event) => {
        event.preventDefault();

        thanksBox.classList.add('show');
    });


    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();

        thanksBox.classList.remove('show');

    });

};




// auto scroll up


function scrollToTop() {
    window.scrollTo(0, 400);

}


// transition


const transition = () => {
    const trans = document.querySelector('#select1');
    const thanksBox = document.querySelector('#show-hide');

    trans.addEventListener('click', (event) => {
        event.preventDefault();

        thanksBox.classList.add("showModal");
    });
}



// pledge information

const setPledge = () => {
    const pledgeContainer = document.querySelectorAll(".modal-inner");
    const pledgeForms = document.querySelectorAll(".pledge-form");
    const mainModal = document.querySelector(".main-pop");
    const thanksModal = document.querySelector("#show-hide");


    pledgeContainer.forEach((elem) => {
        const radioBtn = elem.querySelector('input[type="radio"');
        const pledgeForm = elem.querySelector(".pledge-form");
        const continueBtn = elem.querySelector(".contBtn");


        radioBtn.addEventListener("click", (event) => {
            pledgeForms.forEach((elem) => {
                elem.classList.add("hidden");

            });

            pledgeForm.classList.remove("hidden");

        });

        if (continueBtn) {
            continueBtn.addEventListener("click", (event) => {
                if (isOpenMainModal) {
                    mainModal.classList.remove("open");
                    isOpenMainModal = false;
                }

                thanksModal.classList.add("show");
            });
        }


    });
};

//color border change



function radioCheck() {

    const Container = document.querySelectorAll(".modal-inner");

    Container.forEach((elem) => {
        const radioBtn = elem.querySelector('input[type="radio"');

        radioBtn.addEventListener('click', (event) => {
            const thisElement = event.target;
            const modalInnerParent = thisElement.parentElement.parentElement;

            Container.forEach((elem) => {
                elem.classList.remove('newBorder');
            });
            modalInnerParent.classList.add('newBorder');
        })
    })
};




const setMenu = () => {

    const subMenuBtn = document.querySelector(".sub-Menu");
    const subMenu = document.querySelector(".subMenu");
    let isMenuOpen = false;
    let total_layer = document.querySelector(".total-layer");
    let sub_menu_icon = document.getElementById("subMenuIcon");

    subMenuBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            subMenu.style.display = "block";
            total_layer.classList.add("show");
            sub_menu_icon.src = "./icons/icon-close-menu.svg";
        } else {
            subMenu.style.display = "none";
            total_layer.classList.remove("show");
            sub_menu_icon.src = "./icons/icon-hamburger.svg";
        }
    });
}





setMenu();
setModal();
setBookmark();
setThanks();
setThanks2();
transition();
setPledge();
