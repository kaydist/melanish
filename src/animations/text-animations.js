import gsap from "gsap";

export const textSplit = () => {
  const allParagragh = document.querySelectorAll(".animated-text");
  allParagragh.forEach((paragraph) => {
    let word = paragraph.textContent.split(" ");
    paragraph.textContent = "";

    word.forEach((word) => {
      paragraph.innerHTML += `<span class="word-overflow-container overflow-hidden inline-block"><div class="paragraph-word">${word}</div></span> `;
    });
  });
};

export const textVerticalAnimationIn = () => {
  const allParagragh = document.querySelectorAll(
    ".animated-text.vertical-anim"
  );

  allParagragh.forEach((paragraph) => {
    let text = paragraph.querySelectorAll(".paragraph-word");

    text.forEach((text) => {
      var y = "500%";
      text.style.transform = "translateY:" + y;

      gsap.fromTo(
        text,
        { y: y },
        {
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
          },
        }
      );
    });
  });
};

export const textVerticalAnimationOut = (elem) => {
  const allParagragh = elem;

  allParagragh.forEach((paragraph) => {
    let text = paragraph.querySelectorAll(".paragraph-word");

    text.forEach((text) => {
      var y = "500%";
      text.style.transform = "translateY:" + y;

      gsap.fromTo(
        text,
        { y: 0 },
        {
          y: y,
          duration: 1.5,
          ease: "expo.in",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
          },
        }
      );
    });
  });
};

export const textHorizontalAnimationIn = () => {
  const allParagragh = document.querySelectorAll(
    ".animated-text.horizontal-anim"
  );

  allParagragh.forEach((paragraph) => {
    let text = paragraph.querySelectorAll(".paragraph-word");

    text.forEach((text) => {
      var x = "500%";
      text.style.transform = "translateX:" + x;

      gsap.fromTo(
        text,
        { x: x },
        {
          x: 0,
          duration: 1.5,
          ease: "expo.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
          },
        }
      );
    });
  });
};

export const textHorizontalAnimationOut = (elem) => {
  const allParagragh = elem;

  allParagragh.forEach((paragraph) => {
    let text = paragraph.querySelectorAll(".paragraph-word");

    text.forEach((text) => {
      var x = "500%";

      gsap.fromTo(
        text,
        { x: 0 },
        {
          x: x,
          duration: 1.5,
          ease: "expo.in",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
          },
        }
      );
    });
  });
};
