import * as Bluebird from "bluebird";

// Bluebird is assignable to global.Promise if @types/node@12 is being used.
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/42084
window.Promise = Bluebird;

async function testFn(): Bluebird<void> {
	return Bluebird.delay(100);
}
