import Mainscene from "./js/scene/mainscene.js"
const config ={
    type: Phaser.AUTO,
    width:800,
    height:600,
    backgroundColor:0xBDBFBF,
    scene:[Mainscene],
    scale:{
        parent:'cuocduakithu',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true // thêm các thẻ html
    },

}
var game = new Phaser.Game(config)