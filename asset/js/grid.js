$(document).ready(function() {
  $("#grid").kendoGrid({
    toolbar: ["create", "excel", "pdf"],
    pdf: {
      allPages: true,
      avoidLinks: true,
      paperSize: "A4",
      margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
      landscape: true,
      repeatHeaders: true,
      template: $("#page-template").html(),
      scale: 0.8
    },
    excel: {
      fileName: "Kendo UI Grid Export.xlsx",
      filterable: true
    },
    dataSource: {
      data: products,
      schema: {
        model: {
          fields: {
            ProductName: { type: "string" },
            UnitPrice: { type: "number" },
            UnitsInStock: { type: "number" },
            Discontinued: { type: "boolean" }
          }
        }
      },
      pageSize: 20
    },
    height: 550,
    scrollable: true,
    groupable: true,
    reorderable: true,
    resizable: true,
    sortable: true,
    filterable: true,
    pageable: {
      input: true,
      numeric: false
    },
    columns: [
      "ProductName",
      {
        field: "UnitPrice",
        title: "Unit Price",
        format: "{0:c}",
        width: "130px"
      },
      { field: "UnitsInStock", title: "Units In Stock", width: "130px" },
      { field: "Discontinued", width: "130px" },
      { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }
    ],
    editable: "inline"
  });
});
