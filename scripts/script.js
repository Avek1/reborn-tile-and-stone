var reborn = {};

$(document).ready(function () {

    $("#photoGalleryBtn").on("click", reborn.togglePhototGallery);
    // $("#toGalleryFromNavbar").on("click", reborn.togglePhototGallery2);
    $("#testGalleryBtn").on("click", reborn.backToMain);
    reborn.runLightBoxGallery();
    reborn.runFilteredGallery();



});

reborn.togglePhototGallery = function (event) {
    console.log("Cholas are here!");
    $(".main-page").addClass("hidden");
    $(".test-gallery").removeClass("hidden");
    // $('html, body').animate({ scrollTop: 0 }, 'fast');
    $('html,body').scrollTop(0);
}

// reborn.togglePhototGallery2 = function (event) {
//     console.log("Cholas are here!");
//     $(".main-page").addClass("hidden");
//     $(".test-gallery").removeClass("hidden");
// }

reborn.backToMain = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
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