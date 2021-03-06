// Here we are creating enhancement task from service catalog. 

// On enhancement form we have created new fields where data is being pushed. 

// set request item number to enhancement name

task.u_enhancement_name = current.number;

// set enhancement short description
// current.number = pull request item number
// current.variable_pool.u_business_software.getDisplayValue() =  For an instance, if business software is a reference field then to retrieve it's text value you need to use getDisplayValue() function which is provided by service-now. 

task.short_description = current.number + " " + "For" + " " + current.variable_pool.u_business_software.getDisplayValue() + " " + "Business Software";

// set enhancement's task assignment group = request item assignment group

task.assignment_group = current.assignment_group;

// set enhancement's cmdb_ci field from catalog item form
task.cmdb_ci = current.variable_pool.u_business_software.u_select_asset;

//set enhancement's portfolio field to IT. Please keep in mind that portlofio field is reference field that's why you are allowed to use sysId of "IT" by passing sysID youc can get text value of record. 

task.u_portfolio = "30e14b3beb131100b749215df106fe0f";

//set enhancement's description field from catalog item
task.description = current.variable_pool.u_description;

//set enhancement's description field from catalog item

task.u_requested_by = current.variable_pool.u_requested_by;

//set enhancement's description field from catalog item
task.requested_for = current.variable_pool.u_requested_by;

//set enhancement's description field from catalog item
task.u_business_software = current.variable_pool.u_business_software;

//set enhancement's priority to Not Provided
task.priority = 6;

////set enhancement's state NEW

task.state = 3;