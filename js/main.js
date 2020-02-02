jQuery(document).ready(() => {
  const $logo = $("#logo");

  if (location.href.indexOf("#") !== -1) {
    $logo.show();
  }

  $(".menu .tabs a").click(() => {
    $logo.fadeIn("slow");
  });

  $(".tab-profile").click(() => {
    $logo.fadeOut("slow");
  });

  $("#yellow-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "yellow");
  });

  $("#red-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "red");
  });

  $("#blue-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "blue");
  });

  $("#green-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "green");
  });

  $("#setting-icon").click(function(e) {
    $(".color-box").toggleClass("main");
  });

  const $content = $("#content");

  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: "slideDown",
    transitionOut: "slideUp",
    animationSpeed: 600,
    tabs: ".tmenu",
    tabActiveClass: "active"
  });

  $content.find(".tabs li a").hover(
    function() {
      $(this)
        .stop()
        .animate({ marginTop: "-7px" }, 200);
    },
    function() {
      $(this)
        .stop()
        .animate({ marginTop: "0px" }, 300);
    }
  );
});
