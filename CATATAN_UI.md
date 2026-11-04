# Stabling Kereta DAO — tombol L datang JAKK pada header

## Cara menjalankan
Ekstrak ZIP, lalu buka index.html. Ketiga berkas aplikasi harus berada pada folder yang sama. Jika mengganti berkas lama pada alamat yang sama, tekan Ctrl+F5. Aplikasi tetap berjalan offline.

## Revisi terbaru
- Tombol L datang JAKK dipindahkan dari pojok bawah menjadi tombol tetap pada header, tepat di bawah Layar penuh.
- Pop-up daftar lokomotif terbuka di bawah tombol tersebut, dengan posisi yang mengikuti header. Tombol bawah sudah tidak ada lagi.
- Dalam mode layar penuh, tombol L datang JAKK tetap berada tepat di bawah tombol Keluar layar penuh, pada baris kontrol atas. Ruang denah tetap dipertahankan.
- Data tetap 26 lokomotif dinas, dengan nomor, nama dan jam datang JAKK yang sama.

## Perubahan berkas
- index.html: tombol dan panel lokomotif dipindahkan ke pembungkus header-utility-stack bersama tombol Layar penuh. ID, class, atribut data, aria-expanded, aria-controls, isi tabel dan label aksesibel tetap ada; setiap ID tetap unik.
- style.css: posisi tombol menjadi bagian header, pop-up ditambatkan di bawahnya, ukuran panel menyesuaikan layar, dan ruang notifikasi mode layar penuh disesuaikan agar tidak menutup tombol. Area sentuh tombol minimal 40 px.
- script.js: identik dengan versi sebelumnya. Logika buka/tutup pop-up, data jadwal, DAOEngine dan perhitungan tidak diubah.

## Pemeriksaan
- Posisi tombol normal: Layar penuh y=18–66 px; L datang JAKK y=71–111 px. Kedua tombol berada pada kolom yang sama.
- Pop-up terbuka dan menampilkan 26 baris. Baris terakhir L80F-1 Gajayana Fakultatif tetap 22.41.
- Tombol tutup dan Escape menutup panel; aria-expanded kembali false.
- Dalam mode fokus, tombol berada di bawah Keluar layar penuh. Denah tetap berukuran 1161 × 816 px, sama dengan ukuran kontennya, tanpa tambahan gulir.
- Pada viewport HP 390 × 844 px, panel berada di dalam layar. Lebarnya disesuaikan dengan ruang yang tersedia.
- Semua ID HTML dibandingkan dengan versi sebelumnya dan tetap lengkap serta unik.
- script.js dibandingkan secara biner dan tetap identik.

## Perubahan sebelumnya yang tetap tersedia
Header mengikuti foto referensi hijau keabu-abuan dengan logo KAI dan tombol emas. Mode layar penuh mengutamakan denah 0–24 dengan sidebar kecil. Tulisan kapasitas jalur tetap disembunyikan. Versi JAKK/DAO dan selisih DAO yang dapat dicustom, drag-drop, bayangan pratinjau, LL/LD, ubah jam, undo/redo, penyimpanan lokal dan cetak tetap mengikuti implementasi sebelumnya.

## Selector yang dipertahankan
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

SHA-256 script.js, sama sebelum dan sesudah pemindahan tombol:
84e7eca1e4171b23c78f7c6359a1ad7d04868ba074c54448be46f81def7da43f
