Ext.define("MyApp.view.base.GridPanelBase", {
 extend: "Ext.grid.Panel",

 xtype: "gridpanelbase",

 requires: ["MyApp.store.Personnel"],

 title: "Tiendas",

 iconCls: "x-fa fa-qrcode",

 collapsible: true,

 tools: [
  {
   type: "refresh",
   tooltip: "refrescar datos",
   handler: function () {
    Ext.Msg.alert("System", "Usted a refrescado :p");
   },
  },
  {
   type: "help",
  },
 ],

 store: {
  type: "invoices",
 },

 selModel: {
  type: "checkboxmodel",
  mode: "MULTI",
  injectCheckbox: 3,
 },

 features: [
  {
   ftype: "groupingsummary",
  },
  //   {
  //    ftype: "summary",
  //   },
 ],

 plugins: {
  cellediting: {
   clicksToEdit: 1,
  },
 },

 tbar: [
  { text: "Añadir tienda", iconCls: "x-fa fa-plus-circle" },
  "->",
  { xtype: "textfield", emptyText: "Buscando..." },
 ],

 columns: [
  {
   xtype: "rownumberer",
  },
  {
   dataIndex: "name",
   header: "Tienda",
   flex: 1,
   editor: {
    selectOnFocus: true,
   },
   renderer: function (name, meta, record) {
    return "<div>" + name + "</div><div>" + record.data.email + "</div>";
   },
  },
  {
   dataIndex: "monto_venta",
   header: "Total",
   width: 250,
   editor: {
    xtype: "numberfield",
    selectOnFocus: true,
   },
   renderer: Ext.util.Format.usMoney,
   summaryType: "sum",
   summaryRenderer: function (total) {
    return "<b>" + Ext.util.Format.usMoney(total) + "</b>";
   },
   summaryType: "count",
   summaryRenderer: function (total) {
    return "<b> Total: " + total + "</b>";
   },
  },
  {
   xtype: "actioncolumn",
   width: 50,
   items: [
    {
     iconCls: "x-fa fa-trash",
     tooltip: "Press to delete",
     handler: function (grid, rowindex) {
      let rec = grid.store.getAt(rowindex);

      Ext.Msg.confirm("Por favor confirme", "Esta seguro", function (res) {
       if (res == yes) {
        grid.store.remove(rec);
       }
      });
      grid.store.remove(rec);
     },
    },
   ],
  },
 ],
});
