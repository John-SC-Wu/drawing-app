const utils = {};

utils.flaggedUsers = [1663882102141, 1663900040545, 16644859383220]; // hotfix: large dimension user

utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
};

// --- print out the pregress in percent within command line ---
utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(count / max);
  process.stdout.write(count + "/" + max + "(" + percent + ")");
};

utils.groupBy = (objArray, key) => {
  const groups = {};
  for (let obj of objArray) {
    const val = obj[key];
    if (groups[val] == null) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }
  return groups;
};

if (typeof module !== "undefined") {
  module.exports = utils;
}
