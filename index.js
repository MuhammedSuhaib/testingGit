const sleep = ms => new Promise(r => setTimeout(r, ms));
const spinner = ["/", "-", "\\", "|"];

(async () => {
  for (let i = 0; i <= 100; i += 5) {
    const s = spinner[(i/5) % 4];
    const done = i / 5;
    const left = 20 - done;
    const bar = "[" + "=".repeat(done) + s + " ".repeat(left) + "]";
    process.stdout.write("\r" + bar + " Starting the Linux container");
    await sleep(100);
  }
  console.log();
})();
