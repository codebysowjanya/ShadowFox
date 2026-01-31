function openImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = img.src;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeImage() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    document.querySelectorAll(".project").forEach(p =>
      p.classList.remove("touch-active")
    );
    project.classList.add("touch-active");
    project.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});
const contactForm = document.querySelector(".contact-form");
const toast = document.getElementById("toast");
const sendBtn = document.getElementById("sendBtn");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (sendBtn.classList.contains("sent")) return;
  toast.classList.add("show");
  sendBtn.classList.add("sent");
  sendBtn.innerHTML = '<i class="fas fa-check"></i> Sent';
  sendBtn.disabled = true;
  contactForm.reset();
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});