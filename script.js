// Change this one URL when a booking system replaces WhatsApp.
const BOOKING_URL = "https://wa.me/6285198887881";

document.querySelectorAll("[data-booking]").forEach((link) => {
  link.href = BOOKING_URL;
});

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

function closeNavigation() {
  navToggle?.setAttribute("aria-expanded", "false");
  primaryNav?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  primaryNav?.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("nav-open", willOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
