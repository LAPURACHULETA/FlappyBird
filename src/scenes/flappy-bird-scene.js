export default class FlappyBirdScene extends Phaser.Scene {
    constructor(sceneName, config){
        super(sceneName);
        this.config = config;
        this.backgroundLayer = {
            background: null,
            game: null,
            ui: null   
        }
        this.activateMenu;
    } 

    create() {
        //instancea laayerr
        this.backgroundLayer.background = this.add.layer();
        this.backgroundLayer.game = this.add.layer();
        this.backgroundLayer.ui = this.add.layer();

        //instantiate game objects
        var fondo=this.add.image(0,0,"fondo").setOrigin(0.415,0.15);
        this.backgroundLayer.background.add(fondo);

    }

    showMenu(menu){
        this.hideMenu();
        let yPos = menu.firstItemPosition.y; 
         this.activateMenu=this.add.group();
        menu.items.forEach(item => {
            const textObject = this.add.text(menu.firstItemPosition.x, yPos, item.label, item.style)
            .setOrigin(menu.origin.x, menu.origin.y)
            .setInteractive(); 
            yPos += menu.spacing; 
            textObject.on("pointerup",  item.onClick, this); 
            textObject.on("pointerover", () => { item.onMouseEnter(textObject)}, this); 
            textObject.on("pointerout", () => {item.onMouseExit(textObject)}, this);
            this.activateMenu.add(textObject);
        });
    }
    hideMenu(){
        if(this.activateMenu)this.activateMenu.clear(true,true);
     this.activateMenu=null;
    }
}