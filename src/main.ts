import type { Schema } from "./amplify/data/resource"
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api"
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient<Schema>()


client.queries.sayHello({
  name: "Amplify",
})

createApp(App).mount("#app");
