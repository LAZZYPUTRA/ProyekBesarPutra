/* ========================================= */
/* script.js - Logika Interaktif */
/* ========================================= */

// --- 1. LOGIKA GANTI WARNA BACKGROUND ---
const colorInput = document.getElementById('warna');

colorInput.addEventListener('input', function() {
    const colorValue = this.value;
    document.documentElement.style.setProperty('--bg-body', colorValue);
});


// --- 2. LOGIKA PREVIEW FOTO UPLOAD ---
const fotoInput = document.getElementById('foto');
const previewImg = document.getElementById('previewFoto');

fotoInput.addEventListener('change', function() {
    // Ambil file pertama yang dipilih user
    const file = this.files[0];

    if (file) {
        // Buat FileReader untuk membaca file gambar
        const reader = new FileReader();

        // Ketika file selesai dibaca...
        reader.onload = function(e) {
            // Masukkan hasil bacaan (URL gambar) ke src elemen img
            previewImg.src = e.target.result;
            // Tampilkan elemen img (ubah dari 'none' ke 'block')
            previewImg.style.display = 'block';
        }

        // Mulai proses membaca file sebagai Data URL
        reader.readAsDataURL(file);
    } else {
        // Jika user membatalkan pilihan (cancel), sembunyikan gambar
        previewImg.style.display = 'none';
        previewImg.src = '#';
    }
});
