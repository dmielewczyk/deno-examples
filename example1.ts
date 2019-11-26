console.log('Args', Deno.args);

let fileName = Deno.args[1];

async function main() {
    console.table(Deno.resources());

    const file = await Deno.open(fileName);

    console.log(file);
    console.table(Deno.resources());

    Deno.close(3);

    console.table(Deno.resources());
}

main();