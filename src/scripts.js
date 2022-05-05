// Add scripts here
// For our menu bar

var menu = $('nav#menu');

// Take this out: var watcher = scrollMonitor.create( menu );

// watcher.lock();

// watcher.stateChange(function() {
//  $(menu).toggleClass('scrolled', this.isAboveViewport)
// });


// Google Maps

$('#show-california').click(function () {
    $('#california').show();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#utah').hide();
});

$('#show-nevada').click(function () {
    $('#nevada').show();
    $('#california').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#utah').hide();
});

$('#show-arizona').click(function () {
    $('#arizona').show();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#california').hide();
    $('#utah').hide();
});

$('#show-oregon').click(function () {
    $('#oregon').show();
    $('#nevada').hide();
    $('#california').hide();
    $('#arizona').hide();
    $('#utah').hide();
});

$('#show-utah').click(function () {
    $('#utah').show();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
});

let caMap, nvMap, arMap, orMap, utMap;

function initMap() {
  caMap = new google.maps.Map(document.getElementById("caMap"), {
    center: { lat: 34.0967, lng: -117.179 },
    zoom: 7,
  });
  nvMap = new google.maps.Map(document.getElementById("nvMap"), {
    center: { lat: -20.0967, lng: 117.179 },
    zoom: 7,
  });
  arMap = new google.maps.Map(document.getElementById("arMap"), {
    center: { lat: 10.0967, lng: -120.179 },
    zoom: 7,
  });
  orMap = new google.maps.Map(document.getElementById("orMap"), {
    center: { lat: 5.0967, lng: 117.179 },
    zoom: 7,
  });
  utMap = new google.maps.Map(document.getElementById("utMap"), {
    center: { lat: 11.0967, lng: -117.179 },
    zoom: 7,
  });
}

window.initMap = initMap;


//JAVASCRIPT DATABASE TO InsuranceCompanies.HTML TABLE 
// Creating an array of objects for List of Insurance Companies: Table

var information = [{'Company Name': '4 Ever Life Insurance Company', 'phone': '800-621-9125', 'website': 'www.4everlife.com'},
                    {'Company Name': 'Aetna Life Insurance Company', 'phone': '800-872-3862', 'website': 'www.aetna.com'},
                    {'Company Name': 'American General Life Insurance Co.', 'phone': '800-763-8851', 'website': 'www.aig.com'},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com'},
                    {'Company Name': 'American National Insurance Company of Texas', 'phone': '800-899-6503', 'website': 'www.anico.com'},
                    {'Company Name': 'American States Insurance Company', 'phone': '888-398-8924', 'website': 'www.libertymutual.com'},
                    {'Company Name': 'Anthem Blue Cross Life and Health Insurance Company', 'phone': '877-875-1223', 'website': 'www.anthem.com'},
                    {'Company Name': 'AXA Equitable Life Insurance Company', 'phone': '888-292-4636', 'website': 'www.equitable.com'},
                    ];

// Sorting array by rank order
// information.sort((a,b) => b.rank - a.rank);

// Filling in data table rows
information.forEach(function (item, index) {
  $('#data-table tr:last').after('<tr><td>' + item['Company Name'] + '</td><td>' + item['phone'] + '</td><td>' + item['website'] + '</td></tr>');
});


