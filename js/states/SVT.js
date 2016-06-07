var Pitagor = Pitagor || {};

var Ycoord = [120,250,500,630];
var XmostCoord = [280, 435, 590, 745];
var Otgovori = [];
var Time = [];
var TimeText = [];
var BallsSpeed = [];
var TextSpeed = [];
var Speed = [0,0,0,0];
var Balls = [];
var Prujini = [];
var Butala = [];
var Uleite = [];
var Dupki = [];
var Mostove = [];
var ProjX = [1.2,1.2,1.2,1.2]
var MScaleX= 0.75; var MScaleY=2;
var LvlScore = 0;
var Medals = [];
var UleiScor = 4;
var Err = 2;
var Shaker = 0;
var YouWL = {};
var howtoplay;
//Sounds
var skarcane; var hit;

Pitagor.SVT = {

  preload: function() {
    this.load.path = 'assets/images/';
    this.load.image('BG');
    for (var i = 0; i <= 9; i++)this.load.image(i);
    this.load.image('platform');
    this.load.image('ulei');
    this.load.image('prujina');
    this.load.image('butalo');
    this.load.spritesheet('ball1','ball1.png', 68, 68);
    this.load.spritesheet('ball2','ball2.png', 68, 68);
    this.load.spritesheet('ball3','ball3.png', 68, 68);
    this.load.image('forNumbers');
    this.load.image('most');
    this.load.image('EXIT');
    this.load.image('Bronze');
    this.load.image('Silver');
    this.load.image('Gold');
    this.load.image('dupka');
    this.load.image('youwin');
    this.load.image('youloose');
    this.load.image('HowToPlay');
    this.load.path = 'assets/Sound/';
    this.load.audio('skarcane', 'skarcane.wav');
    this.load.audio('hit', 'hit.wav');
},
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.BG = this.add.sprite(0,0,'BG');
    this.BG.width = this.game.width;
    this.BG.height = this.game.height;

    this.plt = this.add.sprite(0,this.game.height/2+31,'platform');
    this.plt.anchor.set(0.5);
    this.plt.scale.setTo(1,2);

    this.plt = this.add.sprite(this.game.width,this.game.height/2+31,'platform');
    this.plt.anchor.set(0.5);
    this.plt.scale.setTo(1,2);

    this.exit = this.add.sprite(10,10,'EXIT');
    this.exit.inputEnabled = true;
    this.exit.events.onInputDown.add(function(){this.state.start('MainMenu');}, this);

    this.bronze = this.add.sprite(170,40,'Bronze');
    this.bronze.anchor.set(0.5);
    this.bronze.scale.setTo(0.5);
    this.bronze.alpha = 0;
    Medals[0]=this.bronze;

    this.silver = this.add.sprite(170,40,'Silver');
    this.silver.anchor.set(0.5);
    this.silver.scale.setTo(0.5);
    this.silver.alpha = 0;
    Medals[1]=this.silver;

    this.gold = this.add.sprite(170,40,'Gold');
    this.gold.anchor.set(0.5);
    this.gold.scale.setTo(0.5);
    this.gold.alpha = 0;
    Medals[2]=this.gold;


    for (var i = 0; i < 4; i++) {
      this.most = this.add.sprite(XmostCoord[i],this.game.height/2+31,'most');
      this.most.anchor.set(0.5);
      this.most.scale.setTo(0);
      Mostove[i]=this.most;

      this.ulei = this.add.sprite(200,Ycoord[i],'ulei');
      this.ulei.scale.setTo(2.5,2);
      this.ulei.anchor.set(0,0.5);
      Uleite[i] = this.ulei;

      TextSpeed[i] = this.add.text(240,Ycoord[i],0);
      TextSpeed[i].anchor.set(0.5);
      TextSpeed[i].alpha = 0;

      BallsSpeed[i] = this.rnd.integerInRange(1, 3);
      this.ball = this.add.sprite(145,Ycoord[i], 'ball'+BallsSpeed[i]);
      this.ball.anchor.set(0,0.5);
      this.ball.animations.add('left', [0, 1, 2], 5*BallsSpeed[i], true);
      this.ball.animations.play('left');
      Balls[i]=this.ball;

      this.prujina = this.add.sprite(20,Ycoord[i],'prujina');
      this.prujina.scale.setTo(1.2);
      this.prujina.anchor.set(0,0.5);
      Prujini[i]=this.prujina;

      this.butalo = this.add.sprite(125,Ycoord[i],'butalo');
      this.butalo.scale.setTo(1.2);
      this.butalo.anchor.set(0,0.5);
      Butala[i]=this.butalo;

      this.ulei.inputEnabled = true;
      this.ulei.events.onInputDown.add(this.onDown,{index: i}, this);
      this.ulei.events.onInputUp.add(this.onUp,{index: i}, this);
    };
    this.SetAnswers();
    for (var i = 0; i < 4; i++) {

      this.dupka = this.add.sprite(Otgovori[i],Ycoord[i], 'dupka');
      this.dupka.anchor.set(0.5);
      this.dupka.scale.setTo(0,1);
      Dupki[i]=this.dupka;

      this.forNumbers = this.add.sprite(Otgovori[i],Ycoord[i]-50,'forNumbers');
      this.forNumbers.scale.setTo(0.4);
      this.forNumbers.anchor.set(0.5);
      for (var j = 0; j < 3; j++) {
        this.OtgI = Otgovori[i].toString()[j];
        this.numb = this.add.sprite(Otgovori[i]+j*15-15,Ycoord[i]-40,this.OtgI);
        this.numb.anchor.set(0.5);
        this.numb.scale.setTo(0.05);
      };

      this.timeText = this.add.text(Otgovori[i],Ycoord[i],Time[i]);
      this.timeText.anchor.set(0.5);
      TimeText[i]=this.timeText;
      Balls[i].bringToTop();
      Butala[i].bringToTop();
    };
    //Sounds
    skarcane = this.add.audio('skarcane');
    hit = this.add.audio('hit');

    this.HTPtext = this.add.text(this.game.width-200,5, 'Как се играе');
    this.HTPtext.inputEnabled = true;
    this.HTPtext.events.onInputDown.add(this.HTPOpen, this);

    howtoplay = this.add.sprite(this.game.width/2,this.game.height/2,'HowToPlay');
    howtoplay.anchor.set(0.5);
    howtoplay.scale.setTo(0);
    howtoplay.inputEnabled = true;
    howtoplay.events.onInputDown.add(this.HTPClose, this);

    YouWL.win = this.add.sprite(this.game.width/2,this.game.height/2,'youwin');
    YouWL.win.anchor.set(0.5);
    YouWL.win.scale.setTo(0);
    YouWL.win.inputEnabled = true;
    YouWL.win.events.onInputDown.add(this.Menu, this);

    YouWL.loose = this.add.sprite(this.game.width/2,this.game.height/2,'youloose');
    YouWL.loose.anchor.set(0.5);
    YouWL.loose.scale.setTo(0);
    YouWL.loose.inputEnabled = true;
    YouWL.loose.events.onInputDown.add(this.Menu, this);

  },
  onDown: function(){
    skarcane.loopFull(1);
    TextSpeed[this.index].alpha = 1;
    Pitagor.game.time.events.start();
    this.addSpeed = Pitagor.game.time.events.loop(300, function(){
      Speed[this.index] += 5;
      TextSpeed[this.index].text = Speed[this.index].toString();
      if(ProjX[this.index]>0.2)
      {
        ProjX[this.index] -= 0.02;
        Prujini[this.index].scale.setTo(ProjX[this.index],1.2);
        Butala[this.index].x -=2;

      }


    }, this, []);



  },
  onUp: function(){
    skarcane.stop();
    hit.play();
    TextSpeed[this.index].alpha = 0;
    Pitagor.game.time.events.stop();
    ProjX[this.index] = 1.2;
    Prujini[this.index].scale.setTo(ProjX[this.index]);
    Butala[this.index].x = 125;

    this.SpeedBall = Speed[this.index]*Time[this.index]*BallsSpeed[this.index];

    if(this.SpeedBall>200)
    {
        Uleite[this.index].inputEnabled = false;
        this.timeValue = {};
        this.timeValue.score = Time[this.index];
        var timeTween = Pitagor.game.add.tween(this.timeValue).to({score: 0}, Time[this.index]*500, "Linear", true);
        timeTween.onUpdateCallback(function(){
          TimeText[this.index].text = Math.floor(this.timeValue.score);
        }, this);

        var dupkaTween = Pitagor.game.add.tween(Dupki[this.index].scale).to({x: 1,}, Time[this.index]*500, 'Linear', true);

        var tween1 = Pitagor.game.add.tween(Balls[this.index]).to( { x: this.SpeedBall-34}, Time[this.index]*500, 'Linear', true);
        var tween2 = Pitagor.game.add.tween(Balls[this.index]).to( { alpha: 0 }, 2000, "Linear", false);
        tween1.chain(tween2);
        tween2.onComplete.add(function(){
          Dupki[this.index].scale.x = 0;
          if(this.SpeedBall===Otgovori[this.index])
          {
            TimeText[this.index].text = '';
            UleiScor -=1;
            Pitagor.game.add.tween(Mostove[this.index].scale).to({x: MScaleX, y: MScaleY}, 2000, 'Linear', true);

            LvlScore = 0;
            if(UleiScor<=0 && Shaker < Err)
            {
              LvlScore = 1;
              if(Shaker==0)
              {
                LvlScore =2;
              }
            }
            Medals[LvlScore].alpha=1;

            if(UleiScor==0)//youwin
            {
              var tweenWin = Pitagor.game.add.tween(YouWL.win.scale).to( { x: 1, y: 1 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            }

          }
          else
          {
            Uleite[this.index].inputEnabled = true;
            Balls[this.index].x = 145;
            Balls[this.index].y = Ycoord[this.index];
            Balls[this.index].alpha = 1;
            TimeText[this.index].text = Time[this.index];

            Shaker += 1;
            if(Shaker>Err)//You Loose
            {
              for (var i = 0; i < 4; i++) {
                Pitagor.game.add.tween(Mostove[i].scale).to({x: 0, y: 0}, 1000, 'Linear', true);
              };
              LvlScore = 0;
              var tweenLoose = Pitagor.game.add.tween(YouWL.loose.scale).to( { x: 1, y: 1 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            }
            for (var i = 0; i < 4; i++) {        
              if (i%2===0)var tween1 = Pitagor.game.add.tween(Mostove[i]).to({angle: + Shaker }, 100, "Linear", true, 0, -1, true);
              else var tween1 = Pitagor.game.add.tween(Mostove[i]).to({angle: - Shaker }, 100, "Linear", true, 0, -1, true);
            };
            

          }

        },this);
    }
    Speed[this.index] = 0;
    TextSpeed[this.index].text = '0';
  },
  SetAnswers: function(){
    for(var i=0; i<4; i++)
    {
        var BallSpeed = BallsSpeed[i];
        Time[i] = this.rnd.integerInRange(4, 10);
        var otg = this.rnd.integerInRange(350, 920);
        while (((otg/(Time[i]*BallSpeed))%5) !== 0) otg--;
        console.log(otg, Time[i], BallSpeed, "Otg=", otg/(Time[i]*BallSpeed));
        Otgovori[i]= otg;
    }
  },
  Menu: function(){
    ScoreSVT = LvlScore;
    this.state.start('MainMenu');
  },
  HTPOpen: function(){
    howtoplay.scale.setTo(1);
  },
  HTPClose: function(){
    howtoplay.scale.setTo(0);
  },
};
