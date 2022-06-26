import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

export default function cursor() {
  const cursor = new MouseFollower();

  const imageEl = document.querySelectorAll("project-image");

  if (imageEl) {
    imageEl.forEach((imageEl) => {
      imageEl.addEventListener("mouseenter", () => {
        cursor.setText("Helloo");
      });

      imageEl.addEventListener("mouseleave", () => {
        cursor.removeText();
      });
    });
  }
}
