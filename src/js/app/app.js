// google.load("visualization", "1", {packages:["table"]});
// google.setOnLoadCallback(init);

// function init() {
//     var table = google.visualization.arrayToDataTable([
//       ['id', '_id', 'Event',    'Gender', 'Number'],
//       [1,    1,     'PlaySong', 'Male',   10],
//       [1,    2,     'PlaySong', 'Female', 5 ],
//       [2,    1,     'NextSong', 'Male',   3 ],
//       [2,    2,     'NextSong', 'Female', 11]
//     ]);

//     var table = new google.visualization.Table(document.getElementById('table_div'));
//     table.draw(table);
// }

$(function () {
    var events, table;

    events    = ['Play Song', 'Next Song'];
    table = ['Female', 'Male', 'Female', 'Male', 'Female', 'Male'];

    var fsc = new FunnelSmartCollection(events);
    fsc.push('Female', 'Play Song', _.random(10), _.random(10));
    fsc.push('Male',   'Play Song', _.random(10), _.random(10));
    fsc.push('Male',   'Next Song', _.random(10), _.random(10));
    fsc.push('Female', 'Next Song', _.random(10), _.random(10));

    console.log(fsc.toCollection());
});
