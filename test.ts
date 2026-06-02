// test.ts

import MySDK from "./src";

MySDK.init({
  apiKey: "test-key",
});

MySDK.track("button_clicked");