// main.js -------------------------------------

// page loading functions -------------------------------------
// home
function showHome () {
  $("#page2Div").hide();
  $("#galleryDiv").hide();
  $("#mapDiv").hide();
  $("#infoDiv").hide();
  $("#homeDiv").show();
  $("a").removeClass('active');
  $("#homeLink").addClass('active');
}

// page 2
function showPage2 () {
  $("#homeDiv").hide();
  $("#galleryDiv").hide();
  $("#mapDiv").hide();
  $("#infoDiv").hide();
  $("#page2Div").show();
  $("a").removeClass('active');
  $("#page2Link").addClass('active');
}

// gallery
function showGallery () {
  $("#homeDiv").hide();
  $("#page2Div").hide();
  $("#mapDiv").hide();
  $("#infoDiv").hide();
  $("#galleryDiv").show();
  $("a").removeClass('active');
  $("#galleryLink").addClass('active');
  createGallery();
}

// map
function showMap () {
  $("#homeDiv").hide();
  $("#page2Div").hide();
  $("#galleryDiv").hide();
  $("#infoDiv").hide();
  $("#mapDiv").show();
  $("a").removeClass('active');
  $("#mapLink").addClass('active');
  // reloads map tiles
  loadMap();
  mymap.invalidateSize();
}

// info
function showInfo () {
  $("#homeDiv").hide();
  $("#page2Div").hide();
  $("#galleryDiv").hide();
  $("#mapDiv").hide();
  $("#infoDiv").show();
  $("a").removeClass('active');
  $("#infoLink").addClass('active');
}


// Gallery -------------------------------------
function createGallery() {
  var mySwiper = new Swiper ('.swiper-container', {
    // optional parameters
    direction: 'horizontal',
    autoHeight: true,
    loop: true,

    // pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // scrollbar
    scrollbar: '.swiper-scrollbar',
  });
}


// Map -------------------------------------
var mymap = L.map('myMap').setView([52.5164297879642, 13.381347656250002], 13);

function loadMap () {

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  L.marker([52.5164297879642, 13.381347656250002]).addTo(mymap)
      .bindPopup('Example Location')
      .openPopup();

}
