document.addEventListener("DOMContentLoaded", () => {
  const galeriItems = document.querySelectorAll(".galeri-item");

  galeriItems.forEach((item) => {
    // Event klik untuk menampilkan nama produk
    item.addEventListener("click", () => {
      const namaProduk = item.getAttribute("data-nama");
      alert(`Anda melihat: ${namaProduk}`);
    });

    // Event hover menggunakan classList
    item.addEventListener("mouseenter", () => {
      item.classList.add("hover-effect");
      item.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover-effect");
      item.style.boxShadow = "2px 2px 8px rgba(0,0,0,0.1)";
    });
  });
});
