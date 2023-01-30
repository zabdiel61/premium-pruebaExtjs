Ext.define("MyApp.view.base.StoreComun", {
 extend: "Ext.data.Store",

 alias: "store.invoices",

 groupField: "ciudad",

 fields: [
  "name",
  {
   name: "ciudad",
  },
  {
   name: "monto_venta",
   type: "float",
  },
  {
   name: "fecha",
   type: "date",
   dateFormat: "Y-m-d",
  },
 ],

 data: [
  {
   foto: "",
   name: "PizzaHut",
   ciudad: "San Salvador",
   monto_venta: "222",
   fecha: "2021-01-26",
   email: "pizzahut@gmail.com",
  },
  {
   foto: "",
   name: "Starbuks",
   ciudad: "Santa Ana",
   monto_venta: "142",
   fecha: "2021-01-26",
   email: "starbuks@gmail.com",
  },
 ],
});
