function generate_schedule(schedule) {

    var today = new Date();

    var schedule_table;
    for (var i = 0; i < schedule.length; i++) {

        var table_entry = $("<div/>");
        if (i % 2 == 0) {
            table_entry.addClass("table-entry-even");
        } else {
            table_entry.addClass("table-entry-odd");
        } 
        
        for (var sub = 0; sub < schedule[i].length; sub++) {

            var present = schedule[i][sub];

            var ent_meta = $("<div/>").addClass("row");
            var ent_detail = $("<div/>").addClass("row comments");

            date_str = new Date(present[0]).toDateString();

            ent_meta.append($("<div/>").addClass("col-md-2").append(date_str));
            ent_meta.append($("<div/>").addClass("col-md-3").append(present[1]));
            ent_meta.append($("<div/>").addClass("col-md-7").append(present[2]));
            ent_detail.append($("<div/>").addClass("col-md-12").append(present[3]));

            table_entry.append(ent_meta);
            table_entry.append(ent_detail);
        }
        $('#pg-body').append(table_entry);

        //< Last Day of Spring semester
    }
}
