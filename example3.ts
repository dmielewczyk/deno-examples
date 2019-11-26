const { listen } = Deno;

async function main() {
    const server = listen({port: 8080});

    console.log('listening on 0.0.0.0:8080');
    for await (const conn of server) {
        Deno.copy(conn, conn);
    }
}

main();