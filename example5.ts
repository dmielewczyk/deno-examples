import { serve } from 'https://deno.land/std/http/server.ts';

async function main() {
    const s = serve(':80');

    for await (const req of s) {
        req.respond({body: new TextEncoder().encode('Hello world')});
    }
}

main();