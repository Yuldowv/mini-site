/* ===================================================
   SURF & TRAVEL — script.js
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- DATA ---------- */

  const types = [
    { icon:"🏕️", title:"Surf Camp",    days:"Da 3 a 10 giorni" },
    { icon:"🚐", title:"Gruppi",       days:"Da 3 a 10 giorni" },
    { icon:"🏨", title:"Surf Lodge",   days:"Da 3 a 10 giorni" },
    { icon:"🏠", title:"Surf Resort",  days:"Da 3 a 10 giorni" },
    { icon:"⛵", title:"Boat Trip",    days:"Da 3 a 10 giorni" },
    { icon:"🏄", title:"Junior",       days:"Da 3 a 10 giorni" },
    { icon:"🧘", title:"Surf & Yoga",  days:"Da 3 a 10 giorni" },
    { icon:"🚙", title:"Adventures",   days:"Da 3 a 10 giorni" },
    { icon:"👨‍👩‍👧", title:"Family Trip", days:"Da 3 a 10 giorni" },
  ];

  const packages = [
    { img:"images/img2.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
    { img:"images/img4.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
    { img:"images/imga.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
    { img:"images/imgb.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
    { img:"images/imgc.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
    { img:"images/imgd.jpg", loc:"Africa, Marocco", title:"Jeffrey's Bay Surf Camp in Hotel" },
  ];

  const features = [
    { img:"images/imgp.jpg", title:"Attività esclusive", text:"Non solo surf. Con noi potrai scegliere se fare yoga, immersioni, escursioni e tanto altro. Personalizziamo il viaggio con ciò che ami di più." },
    { img:"images/imgs.jpg", title:"Le mete di Surfcamp", text:"Onde per diversi livelli, sicurezza, affidabilità e rispetto per la cultura locale. Ecco cosa puoi aspettarti dalle mete e dalle esperienze di Surf Camp." },
    { img:"images/imgl.jpg", title:"Adatto a tutti quanti", text:"Istruttori e surfisti locali ti porteranno tra le onde migliori per te. Sia che tu non abbia mai preso una tavola in mano, sia che tu sia già a un livello avanzato." },
  ];

  const destinations = [
    { img:"images/img02.jpg", country:"Marocco, Africa", place:"Dakhla" },
    { img:"images/img03.jpg", country:"Marocco, Africa", place:"Dakhla" },
    { img:"images/img04.jpg", country:"Marocco, Africa", place:"Dakhla" },
    { img:"images/img07.jpg", country:"Marocco, Africa", place:"Dakhla" },
    { img:"images/img05.jpg", country:"Marocco, Africa", place:"Dakhla" },
    { img:"images/img06.jpg", country:"Marocco, Africa", place:"Dakhla" },
  ];

  const reviews = [
    { img:"images/img11.jpg", name:"Joe Bio",  loc:"France", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi." },
    { img:"images/img12.jpg", name:"Jane Bio", loc:"France", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi." },
    { img:"images/img13.jpg", name:"Joe Bio",  loc:"France", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi." },
  ];

  /* ---------- RENDER HELPERS ---------- */

  const el = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  const renderTypes = () => {
    const grid = document.getElementById('typesGrid');
    types.forEach(t => {
      grid.appendChild(el(`
        <div class="type-card">
          <div class="type-card__icon">${t.icon}</div>
          <h3>${t.title}</h3>
          <ul>
            <li>${t.days}</li>
            <li>Aria condizionata</li>
          </ul>
        </div>
      `));
    });
  };

  const renderPackages = () => {
    const grid = document.getElementById('packagesGrid');
    packages.forEach(p => {
      grid.appendChild(el(`
        <div class="package-card">
          <div class="package-card__img">
            <img src="${p.img}" alt="${p.title}" onerror="this.closest('.package-card__img').style.background='#e7e0d2'; this.remove();">
            <span class="package-card__badge">Surf Camp</span>
          </div>
          <div class="package-card__body">
            <div class="package-card__loc">${p.loc}</div>
            <div class="package-card__title">${p.title}</div>
          </div>
        </div>
      `));
    });
  };

  const renderFeatures = () => {
    const grid = document.getElementById('featuresGrid');
    features.forEach(f => {
      grid.appendChild(el(`
        <div class="feature-card">
          <div class="feature-card__img">
            <img src="${f.img}" alt="${f.title}" onerror="this.parentElement.style.background='#e7e0d2'; this.remove();">
          </div>
          <h3>${f.title}</h3>
          <p>${f.text}</p>
        </div>
      `));
    });
  };

  const renderDest = () => {
    const grid = document.getElementById('destGrid');
    destinations.forEach(d => {
      grid.appendChild(el(`
        <div class="dest-card">
          <img src="${d.img}" alt="${d.place}" onerror="this.parentElement.style.background='#e7e0d2'; this.remove();">
          <div class="dest-card__tag">
            🌍
            <span><strong>${d.place}</strong>${d.country}</span>
          </div>
        </div>
      `));
    });
  };

  const renderReviews = () => {
    const grid = document.getElementById('reviewsGrid');
    reviews.forEach(r => {
      grid.appendChild(el(`
        <div class="review-card">
          <div class="review-card__head">
            <div class="review-card__avatar">
              <img src="${r.img}" alt="${r.name}" onerror="this.parentElement.style.background='#ccc'; this.remove();">
            </div>
            <div>
              <div class="review-card__name">${r.name}</div>
              <div class="review-card__loc">Visited: ${r.loc}</div>
            </div>
          </div>
          <p class="review-card__text">"${r.text}"</p>
        </div>
      `));
    });
  };

  renderTypes();
  renderPackages();
  renderFeatures();
  renderDest();
  renderReviews();

  /* ---------- MOBILE MENU ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      nav.classList.remove('is-open');
    });
  });

  /* ---------- SEARCH BAR (demo) ---------- */
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('tipi').scrollIntoView({ behavior:'smooth' });
  });

  /* ---------- NEWSLETTER FORM (demo) ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterMsg.textContent = "Grazie per l'iscrizione! 🎉";
    newsletterForm.reset();
  });

  /* ---------- SCROLL TOP BUTTON ---------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('is-visible', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });

});