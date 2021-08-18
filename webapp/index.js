sap.ui.define([
        "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    "use strict";

    XMLView.create({
            viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oview) {
            oview.placeAt("content");
    });
});
