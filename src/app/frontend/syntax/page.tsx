import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Frontend Syntax',
	description:
		'Temen-temen pernah ngga ngebayangin kalau logika berpikir manusia itu bisa dituangkan kedalam kode ya walaupun terbatas sih ngga kaya AI wkwk',
}

export default function Components() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Berpikir sistematis</h1>
			<p>
				Temen-temen pernah ngga ngebayangin kalau logika berpikir
				manusia itu bisa dituangkan kedalam kode ya walaupun terbatas
				sih ngga kaya AI wkwk. Yuk kita kenalan sama..
			</p>
			<h2>Javascript</h2>
			<p>
				Tahu ngga kalau kalian belajar satu bahasa ini saja, kalian
				bisa jadi pengembang web fullstack, mobile, desktop dan masih
				banyak lagi. Ngga heran kalau bahasa ini paling populer dan
				kekinian. Penasaran pingin tahu lebih dalam?
			</p>
			<h3>Stand alone vs Terhubung HTML</h3>
			<p>
				Javascript bisa di jalankan dengan 2 cara entah melalui HTML
				dan berdiri sendiri. Hah? gimana tuh maksudnya? mari simak
			</p>
			<ul>
				<li>
					<h3>Stand alone</h3>
					<p>
						Javascript bisa dijalankan dengan runtime dimana yang
						awalnya hanya bisa dijalankan dengan bantuan HTML seperti
						kaya CSS tadi, disini kita bisa langsung eksekusi melalui
						terminal dengan{' '}
						<a href='https://nodejs.org/en/download'>Node.js</a>. Jika
						sudah terinstall, di terminal tinggal ketik perintah{' '}
						<code>node namafile.js</code>.
					</p>
					<pre>
						<code>{`node main.js`}</code>
					</pre>
				</li>
				<li>
					<h3>Terhubung HTML</h3>
					<p>
						Seperti pada konsep CSS tadi kita import juga filenya
						dengan cara buat file baru misalnya <code>main.js</code>.
						Lalu, import didalam tag body.
					</p>
					<pre>
						<code>
							{`<!DOCTYPE html>
<html lang="en">
	<head>
    	<title>Document</title>
	</head>
	<body>
    	<script src="main.js"></script> <!-- import seperti ini -->
	</body>
</html>`}
						</code>
					</pre>
				</li>
			</ul>
			<h2>Konsep pemograman</h2>
			<p>
				Ini adalah konsep-konsep basic sebuah bahasa pemograman
				khususnya Javascript, tentunya konsep ini bisa dipakai ke
				bahasa lainnya seperti Python, Java, Golang, dll.
			</p>
			<ul>
				<li>
					<h3>Komentar</h3>
					<p>
						Sama seperti di HTML,CSS dan semua bahasa pemograman
						harusnya, disini menulis komentar juga bisa walau beda aja
						syntaxnya, pakai <code>{`//`}</code>.
					</p>
					<pre>
						<code>{`// Ini adalah komentar`}</code>
					</pre>
				</li>
				<li>
					<h3>Variabel</h3>
					<h4>Syntax</h4>
					<p>
						Ada 2 syntax yang umum digunakan
						<code>let dan const</code> untuk mendefinisikan variable
						yang berfungsi untuk menyimpan nilai dengan tipe tertentu
						seperti:
					</p>
					<ul>
						<li>
							<h4>Let</h4>
							<p>
								Digunakan untuk membuat variabel yang tidak tetap atau
								mau diubah-ubah setelahnya. Nah di contoh ini, nilai
								umurnya diubah dari 10 ke 12.
							</p>
							<pre>
								<code>{`let umur = 10
umur = 12`}</code>
							</pre>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Const</h4>
							<p>
								Digunakan untuk membuat variabel yang tetap, konstan
								tidak berubah. Kalau kalian ubah nilainya bakalan
								error.
							</p>
							<pre>
								<code>{`const nama = "John"
nama = "Dewi" // ini akan menyebabkan error`}</code>
							</pre>
						</li>
					</ul>
					<h4>Aturan penamaan</h4>
					<ul>
						<li>
							<h4>Tidak boleh ada spasi</h4>
							<p>
								Contoh salah:{' '}
								<code>{`let nama lengkap = "john doe"`}</code>
							</p>
						</li>
						<li>
							<h4>Camel case</h4>
							<p>
								Contoh benar:{' '}
								<code>{`let namaLengkap = "john doe"`}</code>
							</p>
						</li>
						<li>
							<h4>Snake case</h4>
							<p>
								Contoh benar:{' '}
								<code>{`let nama_lengkap = "john doe"`}</code>
							</p>
						</li>
					</ul>
				</li>
				<li>
					<h3>Tipe data</h3>
					<p>
						Nilai yang kita inisialisasikan di variabel tadi itu ada
						banyak macem tipenya. Ini adalah beberapa tipe data yang
						umum digunakan. Kalau mau lengkapnya bisa cek di{' '}
						<a href='https://codingstudio.id/blog/tipe-data-javascript/'>
							Tipe data dalam Javascript
						</a>
						.
					</p>
					<ul>
						<li>
							<h4>String</h4>
							<p>
								Harus diapit dengan kutip dua atau satu seperti:{' '}
								<code>{`"bla bla"`}</code>. Dengan kata lain, ini tipe
								text.
							</p>
							<pre>
								<code>{`const teks = "Selamat datang"`}</code>
							</pre>
						</li>
						<li>
							<h4>Boolean</h4>
							<p>
								Bernilai <b>true</b>, <b>false</b> atau 1 untuk true
								dan 0 untuk false. Biasanya untuk sebuah kondisi atau
								informasi tertentu.
							</p>
							<pre>
								<code>{`const menikah = false`}</code>
							</pre>
						</li>
						<li>
							<h4>Integer</h4>
							<p>
								Bernilai bilangan bulat apapun seperti 8, 1, 3, 100,
								dll.
							</p>
							<pre>
								<code>{`const tahun = 2025`}</code>
							</pre>
						</li>
						<li>
							<h4>Array</h4>
							<p>
								Berisi banyak tipe data yang digabungkan jadi satu
								variabel. Hah gimana tuh? Ini nih contohnya
							</p>
							<pre>
								<code>{`const container = ['joko', 19, true]`}</code>
							</pre>
						</li>
						<li>
							<h4>Object</h4>
							<p>
								Berisi informasi terperinci dengan konsep key dan
								value.
							</p>
							<pre>
								<code>{`const user = {
	username: 'john doe',
	age: 12,
	isMarried: false
}`}</code>
							</pre>
						</li>
					</ul>
				</li>
				<li>
					<h3>Kondisi</h3>
					<p>
						Disini kita bisa menggabungkan ilmu kita untuk membuat
						program yang lebih kompleks dengan menerapkan kondisional
						(if) dan operator logika, seperti:
					</p>
					<ul>
						<li>
							<h4>If</h4>
							<p>
								If bisa banyak kombinasinya bisa yang simple seperti
								ini, bercabang menggunakan else atau else if bisa juga
								digabungkan atau bahkan if didalam if, wkwk.
							</p>
							<pre>
								<code>{`if (true) {
    // tindakan
}`}</code>
							</pre>
						</li>
						<li>
							<h4>Operator logika</h4>
							<p>
								Ini adalah sebagian contoh saja dari operatornya ya.
								Misal ada variabel{' '}
								<code>{`const sekolah = false; const umur = 3`}</code>
								. Contohnya seperti:
							</p>
							<ul>
								<li>
									<code>{`!sekolah`}</code> tanda <b>!</b> merupakan
									negasi atau kebalikannya. Jadinya bernilai true.
								</li>
								<li>
									<code>{`sekolah && umur > 1`}</code> tanda <b>&&</b>{' '}
									digunakan jika ada 2 atau lebih pernyataan, bila
									seluruh pernyataannya bernilai true jadi
									keseluruhannya true, bila salah satunya saja
									bernilai false maka keseluruhannya <b>false</b>
								</li>
								<li>
									<code>{`sekolah || umur > 1`}</code> tanda <b>||</b>{' '}
									digunakan jika ada 2 atau lebih pernyataan, bila
									seluruh pernyataannya bernilai true jadi
									keseluruhannya true, bila salah satunya saja
									bernilai false maka keseluruhannya akan tetap{' '}
									<b>true</b>
								</li>
							</ul>
						</li>
					</ul>
					<p>
						Kalau sudah mengerti, coba tebak output dari kode ini!
					</p>
					<pre>
						<code>
							{`const menikah = false
const umur = 28

if (menikah) {
	console.log('selamat')
} else if (!menikah && umur > 30) {
	console.log('semoga dapat jodoh')
} else {
	console.log('sabar ya')
}
`}
						</code>
					</pre>
				</li>
				<li>
					<h3>Function</h3>
					<p>
						Kalian pasti tahu fungsi dalam pembelajaran matematika di
						sekolah? tujuannya apa sih..? sebenarnya untuk membungkus
						serangkaian baris kode jadi satu wadah yang mana ada
						parameternya kaya fungsi tuh ada f(x), x nya itu
						parameter. kita bisa tuh olah nilai x nya dan return
						sesuatu. Fungsi di Javascript ada 2 macem fungsi ada yang
						fungsi bawaan dan user-defined function.
					</p>
					<ul>
						<li>
							<h4>Fungsi bawaan</h4>
							<p>
								Banyak sekali fungsi bawaan di Javascript dan kalian
								harus coba coba, bisa terhadap variabel, objek, class,
								array, dll. Dibawah ini contohnya fungsi{' '}
								<code>concat</code>. Sebenarnya kalau kita bekerja
								dengan library nanti banyak fungsi bawaan yang bisa
								kita pakai!
							</p>
							<pre>
								<code>{`const namaKota = 'DKI'
namaKota.concat('Jakarta')	`}</code>
							</pre>
						</li>
					</ul>
					<ul>
						<li>
							<h4>User-defined function</h4>
							<p>
								Kita bisa buat fungsi kita sendiri lho. Ingat ya, kita
								bisa nulis parameter lebih dari satu dan fungsi itu
								bisa mengembalikan <code>return</code> nilai ataupun
								engga seperti alih-alih return, hanya{' '}
								<code>console.log</code> aja misalnya.
							</p>
							<pre>
								<code>{`function add(a, b) {
	return a + b
}`}</code>
							</pre>
						</li>
					</ul>
				</li>
			</ul>
			<h2>DOM</h2>
			<p>
				DOM atau <i>Document Object Manipulation</i> adalah salah satu
				kegunaan Javascript untuk memanipulasi elemen atau membuat
				website kita jadi interaktif. Tentunya kalian harus sudah
				paham dengan konsep yang di atas ya.
			</p>
			<h3>Tahap 1: Pengambilan elemen</h3>
			<p>
				Kita bisa import elemen dalam HTML kita menjadi sebuah
				variabel. <code>document</code> ini adalah sebuah variabel
				global namanya yang banyak manfaatnya salah satunya adalah
				ini. <code>querySelector()</code> adalah salah satu fungsi
				bawaannya.
			</p>
			<pre>
				<code>{`const judul = document.querySelector('h1') // select menggunakan nama tag
const header = document.querySelector('.header') // select menggunakan identifier classnya`}</code>
			</pre>
			<h3>Tahap 2: Menambahkan event</h3>
			<p>
				Nah setelahnya adalah menambahkan kondisi atau event pada
				elementnya, disini kita contohkan <code>click</code>. Jadi
				saat judulnya diklik maka alert di browser akan muncul. Perlu
				diperhatikan disini{' '}
				<code>addEventListener(event, function)</code> menerima 2
				parameter bawaan yaitu <b>event</b> dan <b>function</b>.
			</p>
			<pre>
				<code>{`const judul = document.querySelector('.header') // tahap 1
judul.addEventListener('click', function(){
    alert('Selamat datang!')
})`}</code>
			</pre>
			<h2>Sudah siap?</h2>
			<p>
				Yuk kita implementasikan pemahaman ini dengan membuat project
				yang telah kami rancang biar kamu lebih mengerti!
			</p>
			<Link href='/frontend/projects'>Lanjut, sudah siap!</Link>
		</main>
	)
}
