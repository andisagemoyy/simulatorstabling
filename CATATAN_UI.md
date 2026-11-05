# SF DUKSAR pada Simulator DAO

Revisi terbaru menambahkan tombol SF DUKSAR tepat di samping L datang JAKK.
Klik untuk melihat 52 perjalanan KA (26 datang dan 26 berangkat), lengkap
nomor, nama, pasangan, susunan SF, total kereta, dan halaman sumber Duksar.
Gunakan pencarian nomor/nama/jenis kereta dan filter perjalanan.
Tutup dengan tombol X, Escape, atau klik di luar panel. L datang dan SF
DUKSAR bergantian tampil. Keduanya dapat dipakai dalam layar penuh.

Data mengikuti REKAP SF KA DAO JAKK.pdf (3 halaman), sumber aktual yang telah
dikonfirmasi pengguna. Nomor, nama, komposisi, dan total SF disalin langsung
per rangkaian dari 52 baris sumber. Nama Pandalungan 2 pada KA 45/46 mengikuti
file aktual tersebut. Keterangan halaman pada tabel menunjuk halaman rekap
aktual. Lokomotif tidak masuk jumlah kereta. Jenis sarana dipertahankan.

Panel SF berfungsi sebagai referensi. Jadwal, konstanta DATA, DAOEngine,
kapasitas, validasi penempatan, dan penyimpanan skenario tidak diubah.
Seluruh data SF ditanam di berkas sehingga dapat dibuka tanpa internet.

Buka index.html dari paket ZIP atau gunakan satu berkas
Stabling_Kereta_DAO_Offline.html yang sudah memuat CSS dan JavaScript.


Pemeriksaan revisi SF: 52 nomor, nama, jenis, dan total sesuai 52 baris PDF
aktual. Pop-up menampilkan 52 data, filter datang 26 dan berangkat 26,
pencarian, hasil kosong, tombol tutup/Escape, dan pergantian dengan L datang
sudah diperiksa. Tampilan 390 px, layar penuh, serta versi satu HTML sudah
diperiksa di browser. Drag keluar/masuk jalur, LD, undo/redo, pergantian versi,
dan pembentukan lembar cetak (12 baris jalur) tetap berfungsi.


---

# Stabling Kereta DAO — form ringkas dan panah perpindahan

Buka index.html setelah mengekstrak ZIP. index.html, style.css, dan script.js
harus berada dalam satu folder. Versi Stabling_Kereta_DAO_Offline.html berisi
semuanya dalam satu file dan dapat langsung dibuka tanpa internet.

## Revisi terbaru

- Di denah terdapat panah kecil antara bagian rangkaian di jalur asal dan jalur
  tujuan, dengan tulisan lengkap seperti 7 → 8. Panah menyesuaikan ukuran denah.
- Penanda kecil pada kedua balok juga menyebut jalur asal dan tujuan lengkap.
- Form Skema langsir pindah jalur hanya memiliki dua kolom: Jalur asal dan
  Jalur tujuan. Isian jam, hari, lok, rute, penumpukan, daftar kegiatan, dan
  penjelasan panjang di form sudah dihilangkan.
- Waktu dan lok pada skema yang sudah tersimpan tetap dipertahankan. Jadwal
  sumber dan DAOEngine tidak berubah.

## Cara memakai

1. Klik balok rangkaian.
2. Klik LANGSIR PINDAH JALUR di bawah LL dan LD.
3. Pilih Jalur tujuan, lalu Pindahkan.

Untuk memilih dengan drag, gunakan Seret di denah, lalu seret rangkaian ke
jalur tujuan. Mode ini tetap khusus untuk skema langsir; drag biasa mengikuti
aturan penempatan biasa. Batal seret langsir atau Escape membatalkan mode.

Untuk mengembalikan skema ke jalur asal, pilih tujuan yang sama dengan Jalur
asal lalu Pindahkan. Urungkan dan Ulangi juga tetap tersedia. Bila terjadi
bentrok, perubahan ditolak dan susunan lama dipertahankan.

Skema yang sudah tersimpan dibuka kembali dengan waktu yang sama. Untuk skema
baru, acuan waktu internal simulator yang sudah ada tetap dipakai. Jam stabling
setiap rangkaian tetap dapat diubah melalui Ubah jam pada panel rincian.

Panah penghubung menunjukkan perpindahan pada diagram waktu, bukan rute wesel
fisik. Jika perpindahan melintasi 24.00–00.00, penandanya berada di tepi diagram.
Pada hasil cetak, label asal → tujuan tetap ditampilkan pada kedua balok dan
rekap perpindahan. Garis SVG penghubung layar disembunyikan pada cetakan agar
label tetap mengikuti tata letak cetak.

## Fitur yang tetap ada

Mode JAKK/Custom DAO, parameter datang +10 dan berangkat −25 yang dapat diubah,
kapasitas kereta di bawah nomor jalur, menit L datang berwarna merah, LL/LD,
arsiran pelayanan lok dinas tanpa tulisan 1 PLR, penumpukan lapisan belakang,
undo/redo, simpan lokal, cetak, dan layar penuh tetap tersedia.

Jalur 11/11A tetap cadangan. Penumpukan pasangan hanya melalui skema langsir.
Pemeriksaan mencakup waktu, penggunaan jalur dan lok, serta rute yang telah
terkonfigurasi. Panjang rangkaian dan akses wesel fisik belum dimodelkan.

## Berkas dan pemeriksaan

- index.html: antarmuka dasar dipertahankan.
- script.js: form dua kolom, pemakaian metadata skema lama, penanda asal–tujuan
  lengkap, dan panah kecil yang mengikuti ukuran denah.
- style.css: tata letak form ringkas dan tampilan panah.

38 pemeriksaan logika sebelumnya tetap lulus. Pemeriksaan browser mencakup dua
kolom form, ubah tujuan, pemeliharaan waktu skema lama, undo/redo, simpan/muat,
contoh panah 7 → 8, penanda cetak, dan ukuran layar laptop/HP. Versi satu HTML
memiliki CSS dan JS yang sama dengan paket ZIP serta tidak memakai aset luar.
