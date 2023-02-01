const { collection } = require('forest-express-sequelize');

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('appointments', {
  actions: [{
    name: 'Send email reminder'
  }, {
    name: 'Reschedule',
    type: 'single',
    fields: [{
      field: 'Set new date and time',
      type: 'Date'
    }, {
      field: 'Reason for change',
      type: 'Enum',
      enums: ['Emergency', 'Transportation issues', 'Conflict with other commitments','Scheduling error']
    }]
  }],
  fields: [],
  segments: [],

});
