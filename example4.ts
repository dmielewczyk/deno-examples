async function main() {
    const status = await Deno.permissions.query({ name: 'write' || 'read' });

    if (status.state === 'prompt') {
        Deno.permissions.request({name: 'write' || 'read'});
    }

    const log = await Deno.open('request.log', 'a+');
    const encoder = new TextEncoder();
    await log.write(encoder.encode('hello\n'));
}

main();