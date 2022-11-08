export const trackScroll = async (entity: string) => {
  const { elb } = await import("@elbwalker/walker.js");
  elb(`${entity} scrolledToBottom`, { domain: "localhost" }, "scrolling", {
    test: "scrolling behavior",
  });
};

export const trackInput = async (
  e: React.ChangeEvent<HTMLInputElement>,
  action: string
) => {
  const { elb } = await import("@elbwalker/walker.js");
  elb(action, { domain: "localhost", inputField: e.target.id }, "focus", {
    test: "input field engagement",
  });
};

