var Pitagor = Pitagor || {};

Pitagor.game = new Phaser.Game(1024, 672, Phaser.CANVAS, '', this);

Pitagor.game.state.add('MainMenu', Pitagor.MainMenu);
Pitagor.game.state.add('SVT', Pitagor.SVT);

Pitagor.game.state.start('MainMenu');
