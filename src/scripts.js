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
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-nevada').click(function () {
    $('#nevada').show();
    $('#california').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#utah').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-arizona').click(function () {
    $('#arizona').show();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#california').hide();
    $('#utah').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-oregon').click(function () {
    $('#oregon').show();
    $('#nevada').hide();
    $('#california').hide();
    $('#arizona').hide();
    $('#utah').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-utah').click(function () {
    $('#utah').show();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-arkansas').click(function () {
    $('#utah').hide();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
    $('#arkansas').show();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-colorado').click(function () {
    $('#utah').hide();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
    $('#arkansas').hide();
    $('#colorado').show();
    $('#montana').hide();
    $('#oklahoma').hide();
});

$('#show-montana').click(function () {
    $('#utah').hide();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').show();
    $('#oklahoma').hide();
});

$('#show-oklahoma').click(function () {
    $('#utah').hide();
    $('#nevada').hide();
    $('#oregon').hide();
    $('#arizona').hide();
    $('#california').hide();
    $('#arkansas').hide();
    $('#colorado').hide();
    $('#montana').hide();
    $('#oklahoma').show();
});

let caMap, nvMap, arMap, orMap, utMap, arkMap, coMap, moMap, okMap;

function initMap() {
  caMap = new google.maps.Map(document.getElementById("caMap"), {
    center: { lat: 36.778, lng: -119.417 },
    zoom: 7,
  });
  nvMap = new google.maps.Map(document.getElementById("nvMap"), {
    center: { lat: 38.802, lng: -117.419 },
    zoom: 7,
  });
  arMap = new google.maps.Map(document.getElementById("arMap"), {
    center: { lat: 34.048, lng: -111.093 },
    zoom: 7,
  });
  orMap = new google.maps.Map(document.getElementById("orMap"), {
    center: { lat: 46.804, lng: -120.554 },
    zoom: 7,
  });
  utMap = new google.maps.Map(document.getElementById("utMap"), {
    center: { lat: 39.321, lng: -111.093 },
    zoom: 7,
  });
  arkMap = new google.maps.Map(document.getElementById("arkMap"), {
    center: { lat: 35.201, lng: -91.831 },
    zoom: 7,
  });
  coMap = new google.maps.Map(document.getElementById("coMap"), {
    center: { lat: 39.550, lng: -105.782 },
    zoom: 7,
  });
  moMap = new google.maps.Map(document.getElementById("moMap"), {
    center: { lat: 46.879, lng: -110.362 },
    zoom: 7,
  });
  okMap = new google.maps.Map(document.getElementById("okMap"), {
    center: { lat: 35.467, lng: -97.516 },
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
                    {'Company Name': 'Blue Shield of California Life and Health Insurance Company', 'phone': '800-393-6130', 'website': 'www.blueshieldca.com'},
                    {'Company Name': 'CIGNA Health and Life Insurance Company', 'phone': '800-244-6244', 'website': 'www.cigna.com'},
                    {'Company Name': 'Cincinnati Life Insurance Company', 'phone': '800-783-4479', 'website': 'www.cinfin.com'},
                    {'Company Name': 'Connecticut General Life Insurance Company', 'phone': '800-244-6224', 'website': 'www.cigna.com'},
                   {'Company Name': 'Delaware American Life Insurance Company', 'phone': '800-638-5433', 'website': 'www.metlife.com'},
                   {'Company Name': 'Golden Rule Insurance Company', 'phone': '800-657-8205', 'website': 'www.uhone.com'},
                   {'Company Name': 'Guardian Life Insurance Company of America', 'phone': '888-482-7342', 'website': 'www.guardianlife.com'},
                   {'Company Name': 'Health Net Life Insurance Company', 'phone': '800-522-0088', 'website': 'www.healthnet.com'},
                   {'Company Name': 'John Hancock Life Insurance Company (U.S.A.)', 'phone': '800-377-7311', 'website': 'www.johnhancock.com'},
                   {'Company Name': 'Kaiser Permanente Insurance Company', 'phone': '888-503-0055', 'website': 'www.kp.org'},
                   {'Company Name': 'Liberty Mutual Insurance Company', 'phone': '888-398-8924', 'website': 'www.libertymutual.com'},
                   {'Company Name': 'Metropolitan Life Insurance Company', 'phone': '800-638-5433', 'website': 'www.metlife.com'},
                   {'Company Name': 'Mony Life Insurance Company', 'phone': '800-268-1000', 'website': 'www.protective.com'},
                   {'Company Name': 'Mutual of Omaha Insurance Company', 'phone': '800-775-6000', 'website': 'www.mutualofomaha.com'},
                   {'Company Name': 'National Benefit Life Insurance Company', 'phone': '800-222-2062', 'website': 'www.nationalbenefitlife.com'},
                   {'Company Name': 'National Foundation Life Insurance Company of America', 'phone': '800-221-9039', 'website': 'www.myushg.com'},
                   {'Company Name': 'National Health Insurance Company', 'phone': '888-781-0585', 'website': 'www.natgenhealth.com'},
                   {'Company Name': 'Nippon Life Insurance Company of America', 'phone': '800-374-1835', 'website': 'www.nipponlifebenefits.com'},
                   {'Company Name': 'Sierra Health And Life Insurance Company, Inc.', 'phone': '800-888-2264', 'website': 'www.uhc.com'},
                   {'Company Name': 'State Farm Mutual Automobile Insurance Company', 'phone': '800-782-8332', 'website': 'www.statefarm.com'},
                   {'Company Name': 'Sutter Health and Aetna Insurance Company', 'phone': '888-600-7834', 'website': 'www.sutterhealthaetna.com'},
                   {'Company Name': 'Teachers Insurance and Annuity Association of America', 'phone': '800-842-2733', 'website': 'www.tiaa.org'},
                   {'Company Name': 'Thrivent Financial for Lutherans', 'phone': '800-847-4836', 'website': 'www.transamerica.com'},
                   {'Company Name': 'Transamerica Life Insurance Company', 'phone': '800-625-4212', 'website': 'www.transamerica.com'},
                   {'Company Name': 'Trustmark Insurance Company', 'phone': '800-666-6977', 'website': 'www.trustmarkbenefits.com'},
                   {'Company Name': 'United HealthCare Insurance Company', 'phone': '877-294-1429', 'website': 'www.uhc.com'},
                   {'Company Name': 'United States Life Insurance Company in the City of New York', 'phone': '800-763-8851', 'website': 'www.aig.com'},
                    ];

// Sorting array by rank order
// information.sort((a,b) => b.rank - a.rank);

// Filling in data table rows
information.forEach(function (item, index) {
  $('#data-table tr:last').after('<tr><td>' + item['Company Name'] + '</td><td>' + item['phone'] + '</td><td>' + item['website'] + '</td></tr>');
});


