/*global QUnit, apaTest*/

sap.ui.define([
    "sap/ui/demo/walkthrough/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
], function (mockserver) {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should opent the Hello dialog", function (Given, When, Then) {
        mockserver.init();

        Given.iStartMyUIComponent({
            componentConfig: {
                name: "sap.ui.demo.walkthrough"
            }
        });

        When.onTheAppPage.iPressTheSayHelloDialogButton();

        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        Then.iTeardownMyApp();
    })
})