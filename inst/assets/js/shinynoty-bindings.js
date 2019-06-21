/*!
 * Copyright (c) 2019 dreamRs
 *
 * shinynoty, JavaScript bindings use
 * custom notifications
 * https://github.com/dreamRs/shinylnoty
 *
 * @version 0.1.0
 */

// noty
Shiny.addCustomMessageHandler("shinynoty-noty", function(data) {
  new Noty(data).show();
});

Shiny.addCustomMessageHandler("shinynoty-noty-close", function(data) {
  Noty.closeAll();
});

