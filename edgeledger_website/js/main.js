// Initialize and add the map
function initMap()
{
    //Your Location
    const loc={lat:10.776530,lng:106.700980};
    const map=new google.maps.Map(document.querySelector('.map')
    ,{
        zoom:14,
        center:loc
    });
    //The maker, possitioned at location
    const maker=new google.maps.maker({position: loc,map:map});
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});