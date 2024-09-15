
const profile = {
  username: 'Jacob',
  playTime: 300,
    
    changeUsername(newName) {
    this.username = newName;
  },

    updatePlayTime(active) {
    this.playTime += active;
  },

    getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

//let profile1 = Object.values(profile)

//console.log (`${profile1.slice(0,1)} has ${profile1.slice(1,2)} active hours!`)

console.log(`${profile.username} has ${profile.playTime} active hours!`);  




console.log(profile); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"