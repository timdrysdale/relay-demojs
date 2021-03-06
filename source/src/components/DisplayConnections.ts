import { defineComponent } from "vue";
import DisplayConnection from "./DisplayConnection.vue";

export default defineComponent({
  name: "DisplayConnections",
  props: ["streams"],
  components: {
    "display-connection": DisplayConnection,
  },
});
