var Pitagor = Pitagor || {};
var ScoreSVT = 0;

Pitagor.MainMenu = {
  init: function() {
    this.game.stage.backgroundColor = '0x99CCFF';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },
  preload: function() {
   // this.load.image('test', 'assets/images/test.png');
  },
  create: function() {
    this.TextSVT = this.add.text(300,350, 'SVT1');
    this.ScoreSVT = this.add.text(300,300, ScoreSVT.toString());
    this.TextSVT.inputEnabled = true;
    this.TextSVT.events.onInputDown.add(this.SVTStart, this);
  },
  SVTStart: function(){
    this.state.start('SVT');
  },
};