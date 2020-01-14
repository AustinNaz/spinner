const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timer = 100;

for (const spin of spinner) {   // ALWAYS DEFINE THE VARIABLE
  setTimeout(() => {
    process.stdout.write(spin);
  }, timer);

  timer += 200
};