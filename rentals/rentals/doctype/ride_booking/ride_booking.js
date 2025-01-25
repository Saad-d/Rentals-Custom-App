// Copyright (c) 2024, saad and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Ride Booking", {
 	refresh(frm) {

 	},
    rate(frm){
        frm.trigger("update_total_amt")
    },

    update_total_amt(frm){
        let total_d = 0
        for( let item of frm.doc.items){
            total_d += item.distance;
        }
        const  amount = frm.doc.rate * total_d;
        frm.set_value("total","amount")
    }

 });

 frappe.ui.form.on("Ride Booking Item", {
    refresh(frm) {

    },
    distance(frm,cdt,cdn){
       frm.trigger("update_total_amt")
    },
    items_remove(frm){
        frm.trigger("update_total_amt")
    }

});

