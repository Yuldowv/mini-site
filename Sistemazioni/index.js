// Mobil menyu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});

// Faol menyu elementi
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".nav__link")
      .forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Qidiruv formasi
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log("Qidiruv:", data);
  // bu yerda API so'rov yoki sahifaga yo'naltirish qo'shing
});

// Video: play tugmasi
const videoBox = document.getElementById("video");
const videoEl = document.getElementById("videoEl");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  videoEl.setAttribute("controls", "");
  videoEl.play();
  videoBox.classList.add("playing");
});
videoEl.addEventListener("pause", () => {
  if (videoEl.ended || videoEl.currentTime === 0)
    videoBox.classList.remove("playing");
});
videoEl.addEventListener("ended", () => {
  videoEl.removeAttribute("controls");
  videoBox.classList.remove("playing");
});

// Drag bilan aylantiriladigan qatorlar (sichqoncha)
document.querySelectorAll(".scroller").forEach((el) => {
  let down = false,
    startX = 0,
    startLeft = 0,
    moved = false;

  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true;
    moved = false;
    startX = e.clientX;
    startLeft = el.scrollLeft;
  });
  window.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) {
      moved = true;
      el.classList.add("dragging");
    }
    el.scrollLeft = startLeft - dx;
  });
  window.addEventListener("pointerup", () => {
    down = false;
    el.classList.remove("dragging");
  });

  // Drag paytida havolani bosib yubormaslik
  el.addEventListener(
    "click",
    (e) => {
      if (moved) e.preventDefault();
    },
    true,
  );
});

// Newsletter formasi
document.getElementById("newsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log("Newsletter:", data);
  document.getElementById("newsMsg").textContent =
    "Grazie! Iscrizione completata.";
  e.target.reset();
});
