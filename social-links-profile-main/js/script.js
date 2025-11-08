const linkNames = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
const linksContainer = document.getElementById("nav-links");

linksContainer.innerHTML = linkNames
  .map(link => `
    <a href="#" class="profile-card__link">${link}</a>
  `)
  .join("");
