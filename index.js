import myCollection from './collection.js';
import chalk from "chalk";

const itemNameStyle = chalk.bgBlueBright.bold;
const itemCountStyle = chalk.bgYellowBright.bold;
const itemWhatILikeStyle = chalk.bgGreenBright.bold;

function describeItem(item) {
    if (item.count === 1) {
        console.log(`I have a ${itemNameStyle(item.name)}. Here's what I like about it: ${itemWhatILikeStyle(item.whatILike)}`);
    } else {
      console.log(`"I have ${itemCountStyle(item.count)} ${itemNameStyle(item.name)}s. Here's what I like about them: ${itemWhatILikeStyle(item.whatILike)}`);
    }
}

function describeCollection(array) {
  array.forEach(describeItem);
}

describeCollection(myCollection);