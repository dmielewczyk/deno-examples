async function main() {
    const writePermission = await Deno.permissions.query({ name: 'write', path: 'request.log' });

    if (writePermission.state === 'prompt') {
        await Deno.permissions.request({name: 'write', path: 'request.log'});
    }

    const log = await Deno.open('request.log', 'w');
    const encoder = new TextEncoder();
    await log.write(encoder.encode('hello\n'));

    await Deno.permissions.revoke({name: 'write', path: 'request.log'});
}

main();