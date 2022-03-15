import { Elbwalker } from './types/elbwalker';
import { initHandler, loadHandler } from './lib/handler';
import { Walker } from './types/walker';
import { destination } from './lib/destination';
import { loadProject } from './lib/project';
import { randomString } from './lib/utils';
import { AnyObject } from './types/globals';
import { Destination } from './types/destination';

const w = window;
const d = document;
const elbwalker = {} as Elbwalker.Function;

let group = randomString(); // random id to group events of a run

elbwalker.destinations = [];

elbwalker.go = function (projectId?: string) {
  if (projectId) {
    // load individual project configuration
    loadProject(projectId);
  } else {
    // load custom destination and auto run
    this.destination(destination);
    this.run();
  }
};

elbwalker.run = function () {
  // Generate a new group id for each run
  group = randomString();

  // Pushes for elbwalker
  elbLayerInit();

  // Register all handlers
  initHandler();
};

elbwalker.load = function () {
  loadHandler();
};

elbwalker.push = function (
  event: string,
  data?: AnyObject,
  trigger?: string,
  nested?: Walker.Entities,
): void {
  if (!event) return;

  const [entity, action] = event.split(' ');
  if (!entity || !action) return;

  this.destinations.map((destination) => {
    destination.push({
      entity,
      action,
      data: Object.assign({}, data), // Create a new object for each destination
      trigger,
      nested: nested || [],
      group,
    });
  });
};

function elbLayerInit() {
  // @TODO support to push predefined stack

  const elbLayer = w.elbLayer || [];

  elbLayer.push = function (...args: unknown[]) {
    const [event, data, trigger] = args;

    // @TODO push nested
    w.elbwalker.push(event as string, data as AnyObject, trigger as string);

    return Array.prototype.push.apply(this, [args]);
  };

  w.elbLayer = elbLayer;
}

// @TODO rename to addDestination or use elb command push
// Is that possible? What if there are events before the init
// maybe loop for elb entitiy first
elbwalker.destination = function (
  destination: Destination.Function,
  config: AnyObject = {}, // @TODO better type
) {
  if (config) {
    destination.init(config);
    destination.mapping = (config.mapping as Destination.Mapping) || false;
  }

  this.destinations.push(destination);
};

w.elbwalker = elbwalker;

export default elbwalker;
