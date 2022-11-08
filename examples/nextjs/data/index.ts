import Elbwalker, { elb, WebDestination } from "@elbwalker/walker.js";

export default function setupAnalytics() {
  window.elbLayer = [];
  window.elbwalker = Elbwalker();
  window.elb = elb;

  elb("walker destination", {
    push: console.log,
  } as WebDestination.Function);

  elb("walker run");
}
