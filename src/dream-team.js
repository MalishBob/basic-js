const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(typeof(members) === null || typeof(members) === 'undefined' || !Array.isArray(members) || members.length === 0) return false;

  let dreamTeamNameArr = [];
  let dreamTeamName = '';

  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) !== "string") continue;
    dreamTeamNameArr.push(members[i].toUpperCase().trim().charAt(0));
  }

  dreamTeamNameArr.sort();
  dreamTeamName = dreamTeamNameArr.join('');

  return dreamTeamName;
};
