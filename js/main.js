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
