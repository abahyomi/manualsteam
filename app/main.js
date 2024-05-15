paceOptions = {
    ajax: true, 
    document: true
}

Pace.on('done', () => {

  gsap.timeline()
  .to ('.pace' , {
    transform: 'scale (10,1)',
    duration: 0.7
  }, "+=.2") 
  .to ('.pace' , {
    opacity: 0,
    with: '100%'
  }, "-=2.5")

  .to('.prelo_text', {
    duration: 0.7,
    opacity:0,
    yPercent: -300,
    ease: "BezierEasing(0.19,1,0.22,1)"
  })

})

var loader = document.getElementById ("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})


document.addEventListener("DOMContentLoaded", function() {
  const submenus = document.querySelectorAll(".submenu");

  submenus.forEach(function(submenu) {
      const span = submenu.querySelector("span");
      const ul = submenu.querySelector("ul");

      span.addEventListener("click", function() {
          console.log("Span clicked"); // For debugging
          ul.classList.toggle("active");
      });
  });
});



