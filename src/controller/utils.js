// Preload images
export const preloadImages = (selector = "img") => {
  const imagesLoaded = require("imagesloaded");
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

export const currentCursorPosition = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event || MouseEvent || TouchEvent;
  posx = e.clientX;
  posy = e.clientY;

  return { x: posx, y: posy };
};

export const isMobile = () => {
  return window.innerWidth < 768;
};

export const innerHeight = () => {
  let x = typeof window !== "undefined" ? window.innerHeight : "";
  return x;
};

const PROJECT_DESCRIPTIONS = [
  "{title} began with a slower brief: spend time before pressing the shutter. The result is a sequence that prizes observation over volume, where each composition earns its place by holding up to a second look. Nothing here was hurried, and nothing was forced. The work asks the same of the viewer.",
  "For {title}, the process was about subtraction. Concepts were proposed, defended, and gradually stripped back until what remained could stand without explanation. The series reads as a single thought returned to from different angles. It does not aim to surprise. It aims to settle.",
  "The frames in {title} were assembled across several short sessions. Light shifted, plans changed, and the final order arrived only in the edit. What seems composed at first glance is, in honesty, the product of patience and a willingness to rework. That tension between certainty and revision is the work's real subject.",
  "{title} occupies a quiet register on purpose. Loud images compete with one another; restrained images leave room for the next. The pacing here favors slowness, and the palette refuses to argue with the subject. Read it the way you might read prose written in short paragraphs.",
  "Built as a study rather than a campaign, {title} treats each frame as a question rather than an answer. Some images repeat motifs. Some break them. The relationship between adjacent compositions matters as much as the images themselves, and the gaps between them are not accidental.",
  "{title} is documentary in spirit and editorial in form. The setups were minimal, the corrections were minimal, and the edit was confined to sequencing. What you see is close to what we saw, with the noise turned down just enough to bring the signal forward.",
  "There is no single thesis behind {title}. The work was made the way notebooks are kept: a few good entries, a handful of false starts, and the slow accumulation of a tone. We did not set out with a deck. We set out with attention, and let the rest follow.",
  "In {title}, restraint is the through line. Each frame was treated as a finished sentence rather than a setup for the next. The series is short on flourish and long on consideration. Anyone looking for a hook will not find one here. Anyone looking for craft will.",
  "{title} sits at the seam between studio practice and field notes. Some images are constructed; some are simply caught. The collection works because it commits to neither mode. Every frame benefits from the other's company, and the order earns its rhythm by leaning into that mix.",
  "What started as a small pitch grew into {title} once the references stopped behaving like references. The look came from the subjects, not from the boards, and the work became more honest for it. Tone, pacing, and wardrobe were decided in the room. The deliverables were decided in the edit.",
  "{title} resists summary. Its strongest frames are the ones that change with rereading: a hand at rest one moment, gesturing the next; a colour that reads as warm before turning cool. The series rewards return visits. It was made by people who like to return.",
  "The aim across {title} was a body of work that holds up at the size it was shot. No tricks of crop, no rescue from grading. The compositions were settled on set, and the edit only confirmed them. That kind of discipline is unfashionable. We think it shows.",
];

// Deterministic hash so SSR and client agree (no hydration mismatch).
const hashString = (str = "") => {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
};

// Pick `count` distinct descriptions for a given title, deterministically.
// Walks the pool with a coprime stride; an explicit seen-set guarantees no
// duplicates even if the pool size or stride math ever change.
export const getProjectDescriptions = (title = "", count = 3) => {
  const total = PROJECT_DESCRIPTIONS.length;
  const safeCount = Math.min(Math.max(count, 1), total);
  const start = hashString(title) % total;
  const STRIDES = [1, 5, 7, 11];
  const stride = STRIDES[hashString(title + "_s") % STRIDES.length];

  const out = [];
  const seen = new Set();
  let idx = start;
  let guard = 0;

  while (out.length < safeCount && guard < total * 2) {
    if (!seen.has(idx)) {
      seen.add(idx);
      out.push(PROJECT_DESCRIPTIONS[idx].replace(/\{title\}/g, title));
    } else {
      idx = (idx + 1) % total;
    }
    idx = (idx + stride) % total;
    guard++;
  }
  return out;
};

export const getProjectDescription = (title = "") =>
  getProjectDescriptions(title, 1)[0];

const ENTER_TYPES = ["", "scale", "left", "right", "scale", "tilt"];
const ROTATE_VALUES = [-4, -2, 0, 2, 3, 5, -3, 4, -5];

// Per-image animation config for image2..image7 (6 entries), deterministic per title.
export const getProjectImageAnimations = (title = "") => {
  const startEnter = hashString(title + "_e") % ENTER_TYPES.length;
  const startRot = hashString(title + "_r") % ROTATE_VALUES.length;
  return Array.from({ length: 6 }, (_, i) => ({
    enter: ENTER_TYPES[(startEnter + i * 3) % ENTER_TYPES.length],
    rotate: ROTATE_VALUES[(startRot + i * 5) % ROTATE_VALUES.length],
  }));
};

const LAYOUT_VARIANTS = [
  {
    name: "drift",
    image2: "mx-auto lg:mx-0 lg:max-w-[80%]",
    image3Justify: "end",
    image3Width: "lg:w-[46.14%]",
    image5Side: "lg:left-[50%]",
    image6Justify: "end mr-[10%]",
    image7Width: "w-full",
  },
  {
    name: "weave",
    image2: "mx-auto lg:ml-[8%] lg:max-w-[72%]",
    image3Justify: "start",
    image3Width: "lg:w-[50%]",
    image5Side: "lg:left-[15%]",
    image6Justify: "start ml-[6%]",
    image7Width: "w-[92%] mx-auto",
  },
  {
    name: "tilt",
    image2: "mx-auto lg:mx-auto lg:max-w-[68%]",
    image3Justify: "end",
    image3Width: "lg:w-[42%]",
    image5Side: "lg:left-[35%]",
    image6Justify: "start ml-[12%]",
    image7Width: "w-full",
  },
];

export const getProjectLayout = (title = "") => {
  const idx = hashString(title + "_layout") % LAYOUT_VARIANTS.length;
  return LAYOUT_VARIANTS[idx];
};
