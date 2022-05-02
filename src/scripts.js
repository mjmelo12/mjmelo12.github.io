// Add scripts here
// For our menu bar

var menu = $('nav#menu');

var watcher = scrollMonitor.create( menu );

watcher.lock();

watcher.stateChange(function() {
  $(menu).toggleClass('scrolled', this.isAboveViewport)
});


//JAVASCRIPT DATABASE TO InsuranceCompanies.HTML TABLE 
// Creating an array of objects for List of Insurance Companies: Table

var information = [{'Company Name': '4 Ever Life Insurance Company', 'phone': '800-621-9125', 'website': 'www.4everlife.com',},
                    {'Company Name': 'Aetna Life Insurance Company', 'phone': '800-872-3862', 'website': 'www.aetna.com',},
                    {'Company Name': 'American General Life Insurance Co.', 'phone': '800-763-8851', 'website': 'www.aig.com',},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com',},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com',},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com',},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com',},
                    {'Company Name': 'American National Insurance Company', 'phone': '800-899-6503', 'website': 'www.anico.com',},
                    ];

// Sorting array by rank order
information.sort((a,b) => b.rank - a.rank);

// Filling in data table rows
information.forEach(function (item, index) {
  $('#data-table tr:last').after('<tr><td>' + item['Company Name'] + '</td><td>' + item['phone'] + '</td><td>' + item['website'] + '</td></tr>');
});
