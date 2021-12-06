let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

//console.log(myCollection);

function describeItem(item) {
    //one item = "I have a name. Here's what I like about it: whatILike"
    if (item.count === 1) {
        console.log(`I have a ${item.name}. Here's what I like about it: whatILike`);
    }
    //more than one = "I have count names. Here's what I like about them: whatILike"
}