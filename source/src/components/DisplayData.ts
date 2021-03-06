import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";
import DataElement from "./DataElement.vue";
import axios from "axios";

export default defineComponent({
  name: "DisplayData",
  components: {
    "data-element": DataElement,
  },
  props: ["stream"],
  computed: {
    urlOK: function (): boolean {
      return this.$store.getters.getDataURLObtained;
    },
    streamOK: function (): boolean {
      return this.stream;
    },
    url: function (): string {
      return this.$store.getters.getDataURL;
    },
    getConnectionCount: function (): bigint {
      return this.$store.getters.getConnectionCount;
    },
  },
  methods: {
    getWebsocketConnection() {
      var accessURL = this.stream.url;
      var token = this.stream.token;
      var store = this.$store;
      store.commit("deleteDataURL");
      axios
        .post(accessURL, {}, { headers: { Authorization: token } })
        .then((response) => {
          store.commit("setDataURL", response.data.uri);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    var _this = this;
    var reconnect = function () {
      _this.getWebsocketConnection();
    };
    //make second and subsequent connections
    document.addEventListener("streams:dropped", reconnect);
  },
  watch: {
    streamOK(is: boolean, was: boolean) {
      if (is) {
        //make the first connection
        this.getWebsocketConnection();
      }
    },
  },
});
