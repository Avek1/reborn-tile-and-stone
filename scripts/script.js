var reborn = {};

$(document).ready(function () {
    $("#photoGalleryBtn").on("click", reborn.togglePhototGallery);
    $("#testGalleryBtn").on("click", reborn.backToMain);
    $("#link-home").on("click", reborn.closeHamburger);
    // i can probably consolidate these by targeting the <a> tag.
    $("#link-home").on("click", reborn.checkMainStatusForHome);
    $("#link-service").on("click", reborn.checkMainStatusForService);
    $("#link-see-our-work").on("click", reborn.checkMainStatusForSeeOurWork);
    $("#link-about-us").on("click", reborn.checkMainStatusForAboutUs);

    reborn.runLightBoxGallery();
    reborn.runFilteredGallery();

    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });

    $(function () {
        var navMain = $("#myNavbar");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
            console.log("this is within the navMain onClick funciton")
        });
    });

});

reborn.closeHamburger = function(){
    var navMain = $("#myNavbar");
    navMain.collapse('hide');
    console.log("this is within the Reborn Link onClick funciton")
}

reborn.togglePhototGallery = function (event) {
    $(".main-page").addClass("hidden");
    $(".test-gallery").removeClass("hidden");
    $('html,body').scrollTop(0);

}

reborn.backToMain = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
    console.log("this is the Back To Main function.")
}
// CHECK STATUS FOR HOME
reborn.checkMainStatusForHome = function (event) {
    event.preventDefault();
    if (!$(".main-page").hasClass("hidden")) {
        console.log("Are we scrolled to the top?");
        $('html, body').animate({
            // scrollTop: ($('.main-page').offset().top)
            scrollTop: 0
        }, 75);
    } else {
        reborn.backToMainHome();
    }
}

reborn.checkMainStatusForService = function (event) {
    event.preventDefault();
    if (!$('.main-page').hasClass("hidden")) {
        console.log("the main page IS DISPLAYED");
        $('html, body').animate({
            scrollTop: ($('#section-services').offset().top) - 80
        }, 75);
    } else {
        reborn.backToMainServices();
    }
}

reborn.checkMainStatusForSeeOurWork = function (event) {
    event.preventDefault();
    if (!$(".main-page").hasClass("hidden")) {
        console.log("the main page IS DISPLAYED");
        $('html, body').animate({
            scrollTop: ($('#section-see-our-work').offset().top) - 55
        }, 75);
    } else {
        reborn.backToMainSeeOurWork();
    }
}

reborn.checkMainStatusForAboutUs = function (event) {
    event.preventDefault();
    if (!$(".main-page").hasClass("hidden")) {
        console.log("the main page IS DISPLAYED");
        $('html, body').animate({
            scrollTop: ($('#section-about-us').offset().top) - 55
        }, 75);
    } else {
        console.log("the main page IS HIDDEN");
        reborn.backToMainAboutUs();
    }
}
// BACK TO MAIN HOME
reborn.backToMainHome = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
    // $('html, body').animate({
    //     scrollTop: ($('#').offset().top)
    // },100);
    // console.log("back to main > home.");
}

reborn.backToMainServices = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
    $('html, body').animate({
        scrollTop: ($('#section-services').offset().top) - 90
    }, 75);
    console.log("this is the Back To Main via Services Link.");
}

reborn.backToMainSeeOurWork = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
    $('html, body').animate({
        scrollTop: ($('#section-see-our-work').offset().top) - 60
    }, 75);
    console.log("back to main > see-our-work div.");
}

reborn.backToMainAboutUs = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
    $('html, body').animate({
        scrollTop: ($('#section-about-us').offset().top) - 60
    }, 75);
    console.log("back to main > about-us div.");
}

reborn.runLightBoxGallery = function () {
    /* activate the carousel */
    $("#modal-carousel").carousel({ interval: false });

    /* change modal title when slide changes */
    $("#modal-carousel").on("slid.bs.carousel", function () {
        $(".modal-title")
            .html($(this)
                .find(".active img")
                .attr("title"));
    });

    /* when clicking a thumbnail */
    $(".row .thumbnail").click(function () {
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        content.empty();
        title.empty();

        var id = this.id;
        var repo = $("#img-repo .item");
        var repoCopy = repo.filter("#" + id).clone();
        var active = repoCopy.first();

        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repoCopy);

        // show the modal
        $("#modal-gallery").modal("show");
    });

}

reborn.runFilteredGallery = function () {
    console.log("this is the filtered gallery function");
}

$(function () {
    $(".dropdown-menu").on('click', 'li a', function () {
        // $(".btn:first-child").text($(this).text());
        // $(".btn:first-child").val($(this).text());

        $("#btnText").text($(this).text());
        $("#btnText").val($(this).text());
    });
});

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

