// Description:
//   Dance, Gaslighters!
//
// Dependencies:
//   None.
//
// Configuration:
//   None.
//
// Commands:
//   dance @kenny - show a dancing Kenny Glenn!
//   dance @joel - show a dancing Uncle Joel!
//   dance @katherine - show a dancing Katherine!
//   dance @moorechris - show a dancing Moore Chris!
//
// Author:
//   cdmwebs

module.exports = function (robot) {
  robot.hear(/dance @?kenny/i, msg => msg.send('http://i.imgur.com/JW7HIc8.gif'))
  robot.hear(/dance @?joel/i, msg => msg.send('http://i.imgur.com/c8Jh6aQ.gif'))
  robot.hear(/dance @?katherine/i, msg => msg.send('http://i.imgur.com/OzcYsOj.gif'))
  robot.hear(/dance @?moorechris/i, msg => msg.send('http://i.imgur.com/58oEn0r.gif'))
  robot.hear(/dance @?haley/i, msg => msg.send('http://i.imgur.com/92H3YUk.gif'))
}
