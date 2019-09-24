
const position = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let countTimer = 100;
position.forEach((element) => {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, countTimer)
  countTimer += 200;
});