# Stabling Kereta DAO — header mengikuti foto referensi kedua

## Cara menjalankan
Ekstrak ZIP. Simpan index.html, style.css dan script.js dalam satu folder, lalu buka index.html. Jika mengganti file lama pada alamat yang sama, tekan Ctrl+F5. Aplikasi tetap berjalan offline tanpa CDN, font eksternal, framework atau build tool.

## Perubahan terbaru
1. Header mengikuti foto referensi kedua: latar hijau keabu-abuan dengan efek kabur lembut, logo KAI gelap, menu horizontal tanpa kotak, garis pemisah, dan tombol Layar penuh berbentuk pil emas. Teks, label dan fungsi tombol tetap sama. Logo tetap tertanam di HTML. Revisi terakhir ini hanya menambah CSS yang dibatasi pada header; index.html dan script.js identik dengan versi sebelumnya.
2. Layar penuh memprioritaskan denah jam 0–24 dan seluruh jalur. Header serta kontrol versi dibuat ringkas, dengan sidebar rangkaian selebar 176 px pada laptop besar. Pada laptop lebih sempit sidebar menjadi 152 px. Pemilihan rangkaian menampilkan kontrol ringkas di bagian bawah sidebar, tanpa mengurangi ruang denah. Pilihan JAKK/DAO, selisih DAO, undo/redo, cetak, dan keluar layar penuh tetap tersedia.
3. Tulisan KAPASITAS, 1 RANGKAIAN, 2 RANGKAIAN dan keterangan muat 2 pada pilihan jalur dihapus. Nomor jalur tetap ada. Jalur 11 dan 11A tetap berlabel CADANGAN. Aturan kapasitas dan validasi bentrok tetap seperti semula.

## Berkas yang berubah
- **index.html:** simbol kereta pada header diganti gambar logo KAI tertanam; catatan bawah grafik disederhanakan menjadi keterangan fungsi jalur tanpa angka kapasitas. Seluruh ID dan data-* yang dipakai script dipertahankan.
- **style.css:** warna dan presentasi logo header, menu datar, tombol emas, serta efek tombol. Revisi terakhir hanya menambahkan aturan header, sedangkan aturan layar penuh sebelumnya tetap dipertahankan. Grid dan balok menyesuaikan tinggi layar. Sidebar, kontrol pilihan rangkaian, notifikasi, mode gelap, dan layar kecil disesuaikan. Aturan cetak sebelumnya tetap dipertahankan; aturan mode layar penuh hanya berlaku untuk media screen.
- **script.js:** perubahan hanya pada keluaran antarmuka: axis() menghapus kata KAPASITAS; chartHTML() menghapus teks kapasitas pada label jalur; teks opsi jalur pada renderSelection() tidak lagi menyebut muat 2; syncFullscreen() menambahkan/menghapus class denah-fullscreen; syncFullscreen() dipanggil setelah render awal agar status tampilan sesuai. DATA, SCHEDULE, DAOEngine, perhitungan waktu, pemilihan lok, simpan, undo/redo dan validasi tidak diubah.

## Pemeriksaan header referensi kedua
- Header normal setinggi 106 px dan header mode fokus tetap 54 px.
- Tombol Layar penuh dan keluar layar penuh tetap berfungsi. Area denah mode fokus tetap 1161 × 816 px dengan ukuran konten yang sama.
- Pada viewport HP 390 px, lebar isi halaman dan scrollWidth sama-sama 375 px: tidak ada pelebaran halaman.
- Logo KAI, teks tombol, ID, HTML dan JavaScript identik dengan versi sebelumnya. Seluruh perubahan CSS baru dibatasi pada header beserta elemen di dalamnya.
- Cetak, jadwal, perhitungan dan data tidak diubah pada revisi header ini.

## Hasil pemeriksaan versi sebelumnya
- Logo KAI berhasil dimuat dari data URI dengan lebar sumber 100 px.
- Mode layar penuh/fokus aktif dan dapat keluar kembali ke tampilan biasa. Browser pengujian memakai jalur fallback mode fokus karena API fullscreen dibatasi; CSS yang sama dipakai melalui class dari syncFullscreen() pada fullscreen asli.
- Laptop 1280 × 768: area denah 1078 × 648 px; lebar dan tinggi konten sama dengan area tampil. Seluruh 12 baris jalur dan jam 0–24 muat tanpa gulir horizontal maupun vertikal pada ukuran ini.
- Viewport 1363 × 936: area denah 1161 × 816 px, seluruh jalur dan jam 0–24 muat. Sidebar hanya 176 px.
- Tidak ditemukan label kapasitas pada teks denah. Label jalur yang tampil adalah 1–10, 11 CADANGAN dan 11A CADANGAN.
- Pada versi JAKK dan DAO dengan selisih uji 40 menit, pemeriksaan ukuran DOM tidak menemukan nama rangkaian yang meluap dari balok pada viewport laptop.
- Rangkaian 15/16 berhasil digeser keluar ke sidebar lalu dimasukkan lagi ke jalur 1. Bayangan pratinjau terlihat pada posisi jam jadwal. Undo/redo menampilkan jumlah 24/25 rangkaian sesuai tindakan.
- Pemilihan rangkaian melalui sidebar dan penempatan menggunakan pilihan jalur tetap bekerja. Panel kontrol pilihan tetap berada di sidebar, bukan di atas denah.
- JAKK/DAO tetap dapat diganti dalam mode layar penuh. KA 126 tetap 09.12 pada versi JAKK dan 08.32 pada versi DAO dengan selisih uji 40 menit. Nilai awal aplikasi tetap 25 menit.
- Mode gelap mengikuti preferensi sistem/iframe; latar, kontrol dan denah tetap terbaca.
- Pemeriksaan regresi menunjukkan keluaran HTML cetak JAKK dan DAO sama dengan sebelum revisi ini. Printer fisik tidak dijalankan.
- Pemeriksaan sintaks script.js lulus. Bagian DATA, SCHEDULE dan DAOEngine dibandingkan identik dengan versi sebelum revisi. ID dan data-* pada HTML dibandingkan dan tetap lengkap.

## Selector dan kait antarmuka yang dipertahankan
- `#app-subtitle`
- `#chart`
- `#count`
- `#dao-lead`
- `#dao-lead-form`
- `#dialog`
- `#dialog .error-box`
- `#drag-preview-info`
- `#empty-plan`
- `#feedback`
- `#fullscreen`
- `#history-log`
- `#load-poa`
- `#loco-arrivals-close`
- `#loco-arrivals-panel`
- `#loco-arrivals-panel,#loco-arrivals-toggle`
- `#loco-arrivals-rows`
- `#loco-arrivals-toggle`
- `#print`
- `#print-sheet`
- `#redo`
- `#search`
- `#selection`
- `#source-table`
- `#stabling-time-summary`
- `#storage-status`
- `#sync-schedule`
- `#target-track`
- `#train-list`
- `#undo`
- `#version-description`
- `.bar`
- `.drag-source`
- `.drop-preview`
- `.poa-row`
- `.target-ok,.target-no,.pool-target`
- `.track-canvas`
- `[data-action="edit-stabling"]`
- `[data-action="reset-stabling"]`
- `[data-activity]`
- `[data-drop]`
- `[data-form="stabling-time"]`
- `[data-train]`
- `[data-version="dao"]`
- `[data-version]`
- `button`
- `input,select,textarea,dialog`

ID yang diperiksa oleh event terdelegasi juga tetap ada: place-selected, remove-selected, attach-selected dan clear-selection. Semua data-version, data-action, data-form, data-id, data-kind, data-train, data-train-id, data-drop, data-track, data-activity dan data-lane tetap dipertahankan.

Class baru untuk tata letak mode fokus: denah-fullscreen. Class ini hanya mengubah tampilan.

## Fitur sumber
Antarmuka ekspor/impor JSON memang tidak ada pada versi sumber, sesuai revisi sebelumnya. Penyimpanan lokal otomatis tetap berjalan.

SHA-256 bagian DATA/SCHEDULE/DAOEngine, sama sebelum dan sesudah revisi:
48d4acf2d9745b42403a3800ef83b83231dcfa94fb132856930698d3b06e31ce
