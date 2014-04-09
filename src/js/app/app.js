$(function () {
    var events, table;

    events    = ['Play Song', 'Next Song', 'Next Song'];
    table = ['Female', 'Male', 'Female', 'Male', 'Female', 'Male'];

    var fsc = new FunnelSmartCollection(events.length);
    fsc.push(1, 'Female', 'Play Song', _.random(10), _.random(10));
    fsc.push(1, 'Male',   'Play Song', _.random(10), _.random(10));
    fsc.push(2, 'Male',   'Next Song', _.random(10), _.random(10));
    fsc.push(2, 'Female', 'Next Song', _.random(10), _.random(10));
    fsc.push(3, 'Female', 'Next Song', _.random(10), _.random(10));
    fsc.push(3, 'Female', 'Next Song', _.random(10), _.random(10));

    console.log(fsc.toCollection());
});
