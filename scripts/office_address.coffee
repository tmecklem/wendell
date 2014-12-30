# Description:
#   Address
#
# Dependencies:
#   None.
#
# Configuration:
#   None.
#
# Commands:
#   hubot /office address/ - where is the office again?
#
# Notes:
#   Where is the office?
#
# Author:
#   cdmwebs

module.exports = (robot) ->
  robot.respond /office address/i, (msg) ->
    msg.reply "here you go:"
    msg.reply "11126 KENWOOD RD STE C, BLUE ASH OH 45242-1897"
