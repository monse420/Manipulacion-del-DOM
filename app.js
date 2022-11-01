$(document).ready(function() {
    var table = $('#tarea').DataTable({ 
          select: false,
          "columnDefs": [{
              className: "Name", 
              "targets":[0],
              "visible": false,
              "searchable":false
          }]
      });
  
    $('#tarea tbody').on( 'click', 'tr', function () {
      alert(table.row( this ).data()[0]);
  });
  });