import Phaser from "phaser";
import GameScene from "./scenes/game-scene";
import MenuScene from "./scenes/menu-scene";
import ScoreScene from "./scenes/score-scene";

const SHARED_CONFIG={
  width: 400, //1000
  height: 600, //500
  pixelArt: true,

}
const config={
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics:{
    default:"arcade",
    //pixelAr
    arcade:{
      gravity:{y:400},
      debug: false
    }
    
  },
  scene:[
    new MenuScene(SHARED_CONFIG), 
    new GameScene(SHARED_CONFIG),
    new ScoreScene(SHARED_CONFIG)
  ]
  
}
new Phaser.Game(config);
