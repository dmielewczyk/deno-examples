import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

test({
  name: 'testing example',
  fn(): void {
    assertEquals('world', 'world');
    assertEquals({ hello: 'world' }, { hello: 'world' });
  }
});

runTests();