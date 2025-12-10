// Fungsi untuk memformat pesan
export function formatPesan(nama, kategori, pesan) {
  return `Halo, saya ${nama} ingin menyampaikan pesan mengenai ${kategori}: ${pesan}`;
}

// Fungsi untuk format harga (ES6)
export const formatHarga = (harga) => {
  return `Rp${harga.toLocaleString("id-ID")}`;
};
