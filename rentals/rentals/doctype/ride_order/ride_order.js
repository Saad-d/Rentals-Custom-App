// Copyright (c) 2024, saad and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Ride order", {
 	refresh(frm) {
   if (frm.doc.status !== 'Accepted'){
    frm.add_custom_button("Accept", () => {
         frm.set_value("status","Accepted");
         frm.save();
    })
   }

 	},
    status(frm){
        console.log("status changed")
    }
 });
