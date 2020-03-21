import * as Bluebird from "bluebird";
import * as rp from "request-promise";

// Bluebird is assignable to global.Promise if @types/node@12 is being used.
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/42084
global.Promise = Bluebird;

// "request-promise" returns a `RequestPromise` which is not a regular "native" `Promise`.
const promise: rp.RequestPromise = rp("https://www.google.com");

// `rp(...).promise()` returns the `Bluebird` promise according to the "request-promise" documentation. (Please read it!)
const bluebird: Bluebird<any> = rp("https://www.google.com").promise();

// You can easily assign a `Bluebird` promise to the native `Promise` interface.
const native: Promise<any> = bluebird;
