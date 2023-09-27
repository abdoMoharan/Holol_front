const button = document.querySelector(".btn-welcome");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Define your GSAP animation here
  gsap.to(button, {
    duration: 1,
    opacity: 0,
    ease: "power2.inOut" // Example easing function
  });
  gsap.to(".preloader", {
    duration: 1,
    delay: 0.5,
    y: "100vh",
    ease: "power2.inOut",
    onComplete: function() {
      //fade out each target when it completes
      gsap.to(this.targets()[0], { display: "none" });
    }
  });
});
