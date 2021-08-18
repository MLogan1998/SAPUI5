sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
          var onBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = onBundle.getText("helloMsg", [sRecipient]);
          MessageToast.show(sMsg);
        }
    });
});
