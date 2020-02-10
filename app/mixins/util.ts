import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class UtilMixin extends Vue {
  isMounted = false;

  mounted() {
    this.isMounted = true;
  }
}
