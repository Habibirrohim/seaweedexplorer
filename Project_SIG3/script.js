// Membuat peta dengan koordinat tengah di Banten
var map = L.map('map').setView([-6.4058, 106.0640], 10);

// Menambahkan layer peta
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/"></a>',
    maxZoom: 18
        }).addTo(map);


// Menambahkan marker untuk setiap lokasi
var locations = [
    {name: 'Gudang Rumput Laut " Surya Anugrah "', lat: -6.063061, lng: 106.126431, image: 'img/suryaanungrah2.jpg', description: 'Pantai Anyer adalah salah satu pantai terkenal di Banten.', } ,
    {name: 'Gudang Rumput Laut Kelompok Saluyu', lat: -6.008369, lng: 106.276080, image: 'img/saluyu.png', description: 'Tempat budidaya terlatak di Kubang Puji, Pontang, Serang, Banten. Rumput laut yang telah dipanen langsung disimpan di gudang penyimpanan rumput laut Kelompok Saluyu. Jenis rumput laut pada wilayah ini adalah Eucheuma Cottoni.'},
    {name: 'Panglong Rumput Laut Bang Jun', lat: -5.970242, lng: 106.308039, image: 'img/bangjun.jpg', description: 'Terdapat budidaya rumput laut di Desa Lontar, Kecamatan Tirtayasa, Serang, Banten. Jenis rumput laut yang dibudidaya pada wilayah ini adalah Gracillaria.'},
    {name: 'Desa Taman Jaya ', lat: -6.399844, lng: 106.128994, image: 'img/tamanjaya.jpg', description: 'Terlatak di Kecamatan Sumur, Desa Taman Jaya, Kabupaten Pandeglang Banten. Jenis rumput laut yang dibudidaya pada wilayah ini ada jenis Gracillaria.'},
    {name: 'Ujung Kulon ', lat: -6.746413, lng: 105.331220, image: 'img/ujungkulon.jpg', description: 'Terletak di Ujung Kulon, Kabupaten Pandeglang, Banten dengan jenis rumput laut yang dibudidaya adalah Eucheuma Cottoni dan Gracillaria.'},
    {name: ' Desa cipanon ', lat: -6.512431, lng: 105.676429, image: 'img/cipanon.jpg', description: 'Terletak di Kampung Cipanon, Desa Citeureup, Kabupaten Pandeglang, Banten. Rumput laut yang dibudidaya pada wilayah ini adalah Eucheuma Cottoni.'},
    {name: ' Desa Ujung Jaya ', lat: -6.800693, lng: 105.505863, image: 'img/ujungjaya.jpg', description: 'Terletak di Desa Ujung Jaya, Kabupaten Pandeglang, Banten. Rumput laut yang dibudidaya pada wilayah ini adalah Eucheuma Cottoni.'},
    {name: ' Desa Binuangeun ', lat: -6.844806, lng: 105.881827, image: 'img/binuangeun.jpeg', description: 'Rumput laut yang terletak di Pantai Binuangeun, Desa Binuangeun, Kabupaten Lebak, Banten adalah divisi rumput laut coklat atau Phaeophyceae.'},
    {name: ' Desa sawarna ', lat: -6.984468, lng: 106.306816, image: 'img/sawarna.jpeg', description: 'Terletak di Pantai Sawarna, Kabupaten Lebak, Banten dengan jenis rumput laut yang dibudidaya, yaitu jenis Eucheuma Cottoni dan Gracillaria.'},
    {name: ' Pelabuhan Karangantu', lat: -6.03659, lng: 106.16295, image: 'img/karangantu.jpg', description: 'Budidaya rumput laut di Karangantu terletak di Kabupaten Serang, Serang, Banten. Jenis rumput laut yang banyak dibudidaya pada wilayah ini adalah jenis Gracillaria.'},
    {name: ' Pulau panjang', lat: -5.926668, lng: 106.152171, image: 'img/ppanjang.jpg', description: 'Lokasi budidaya terletak di Pulau Panjang, Kabupaten Serang, Serang, Banten. Pada wilayah ini, jenis rumput laut yang dibudidaya adalah Euchema cottonii atau Kappaphycus alvarezii.'},
    {name: ' Desa Cigorondong', lat: -6.735666, lng: 105.512603, image: 'img/cigorondong.jpg', description: 'Terlatak di Kecamatan Sumur, Desa Cigorondong, Kabupaten Pandeglang Banten. Jenis rumput laut yang dibudidaya pada wilayah ini ada jenis Gracillaria'},
    {name: ' Pantai Bayah', lat: -6.936159, lng: 106.243083, image: 'img/bayah.jpg', description: 'Terletak di Pantai Bayah, Kabupaten Lebak, Banten rumput laut yang dibudidaya pada wilayah ini adalah Gracillaria.'},

];

locations.forEach(function(location) {
    var marker = L.marker([location.lat, location.lng]).addTo(map);

    // Membuat konten popup dengan nama lokasi, gambar, dan tombol penjelasan
    var popupContent = `
        <h3>${location.name} </h3>
        <img src="${location.image}" alt="${location.name}" style="width:40%;height:auto; ">
        <p>${location.description}</p>`;

      ///button onclick="showDetail()">Detail</button'    `;

    marker.bindPopup(popupContent);
});
//var detailButton = L.control({ position: 'topright' });

 // detailButton.onAdd = function(map) {
   // var div = L.DomUtil.create('div', 'detail-button leaflet-bar leaflet-control');
    //div.innerHTML = '<button onclick="showDetail()">Detail</button>';
    //return div;
  //};

 // detailButton.addTo(mymap);

  // Fungsi untuk menampilkan detail
  //function showDetail() {
    //alert('Ini adalah detail yang lebih lengkap.');
    // Di sini Anda bisa menambahkan logika untuk menampilkan detail sesuai kebutuhan.
  //}
// Fungsi untuk menampilkan penjelasan lokasi
//function showDescription(locationName) {
    //alert("Penjelasan untuk lokasi " + locationName);
//}

// Menambahkan popup pertama ke marker
//marker.bindPopup("<b>Nama Lokasi</b><br>Gambar: <img src='gambar.jpg' width='100'><br><button onclick='showDetail()'>Detail Lebih Lanjut</button>");

// Fungsi untuk menampilkan detail lebih lanjut
//function showDetail() {
  // Redirect ke halaman detail
  //window.location.href = "detail.html";
//}