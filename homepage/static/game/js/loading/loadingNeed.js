import Option from "./option.js"
export default class LoadingNeed{
    static preload(scene){
        scene.load.image('btnNext','../assets/btn/btnNext.png')
        scene.load.image('btnNextchosen','../assets/btn/btnNextchosen.png')
        scene.load.image('true','../assets/img/true.png')
        scene.load.image('false','../assets/img/false.png')
        scene.load.image('endgame','../assets/img/endgame.png')


    }
    static create(scene){
       

        scene.endgame = scene.add.image(0,0,'endgame').setOrigin(0,0).setVisible(false)
        scene.truepic = scene.add.image(400,300,'true').setDepth(5).setVisible(false)
        scene.falsepic = scene.add.image(400,300,'false').setDepth(5).setVisible(false)
        scene.btnNext = scene.add.image(510,250,'btnNext').setDepth(6).setVisible(false).setInteractive()
        scene.btnNextchosen = scene.add.image(510,250,'btnNextchosen').setDepth(7).setVisible(false)
        scene.btnReturn = scene.add.image(750,550,'btnNext').setDepth(6).setVisible(false).setInteractive()
        scene.btnReturnchosen = scene.add.image(750,550,'btnNextchosen').setDepth(6).setVisible(false)

        scene.btnNext.on('pointerover',()=>{
            scene.btnNextchosen.setVisible(true)
        })
        scene.btnNext.on('pointerout',()=>{
            scene.btnNextchosen.setVisible(false)
        })


        scene.btnReturn.on('pointerover',()=>{
            scene.btnReturnchosen.setVisible(true)
        })
        scene.btnReturn.on('pointerout',()=>{
            scene.btnReturnchosen.setVisible(false)
        })


        scene.btnReturn.on('pointerdown',()=>{
            scene.endThongke.setVisible(false)
            scene.endPoint.setVisible(false)
            scene.endgame.setVisible(false)
          Option.Refund(scene)
        })



        //QA
        scene.question = scene.add.sprite(0,0).setOrigin(0,0)
        scene.ans1 = scene.add.sprite(370,290).setDepth(2).setInteractive()
        scene.ans1chosen = scene.add.sprite(370,290).setDepth(3).setVisible(false)
        scene.ans2 = scene.add.sprite(370,375).setDepth(2).setInteractive()
        scene.ans2chosen = scene.add.sprite(370,375).setDepth(3).setVisible(false)
        scene.ans3 = scene.add.sprite(370,545).setDepth(2).setInteractive()
        scene.ans3chosen = scene.add.sprite(370,545).setDepth(3).setVisible(false)
        scene.anscorrect = scene.add.sprite(370,460).setDepth(2).setInteractive()
        scene.anscorrectchosen = scene.add.sprite(370,460).setDepth(3).setVisible(false)
        
        
        //ans1 event
        scene.ans1.on('pointerover',()=>{
            scene.ans1chosen.setVisible(true)
        })
        scene.ans1.on('pointerout',()=>{
            scene.ans1chosen.setVisible(false)
        })
        scene.ans1.on('pointerdown',()=>{
            scene.falsepic.setVisible(true)
            scene.btnNext.setPosition(530,240).setVisible(true)
            scene.btnNextchosen.setPosition(530,240)
            scene.falsepoint++

        })
        //ans2 event
        scene.ans2.on('pointerover',()=>{
            scene.ans2chosen.setVisible(true)
            
        })
        scene.ans2.on('pointerout',()=>{
            scene.ans2chosen.setVisible(false)
        })
        scene.ans2.on('pointerdown',()=>{
            scene.falsepic.setVisible(true)
            scene.btnNext.setPosition(530,240).setVisible(true)
            scene.btnNextchosen.setPosition(530,240)
            scene.staticObject(true)
            scene.falsepoint++


        })
        //ans3 event
        scene.ans3.on('pointerover',()=>{
            scene.ans3chosen.setVisible(true)
        })
        scene.ans3.on('pointerout',()=>{
            scene.ans3chosen.setVisible(false)
        })
        scene.ans3.on('pointerdown',()=>{
            scene.falsepic.setVisible(true)
            scene.btnNext.setPosition(530,240).setVisible(true)
            scene.btnNextchosen.setPosition(530,240)
            scene.staticObject(true)
            scene.falsepoint++

        })
        //ans correct
        scene.anscorrect.on('pointerover',()=>{
            scene.anscorrectchosen.setVisible(true)
        })
        scene.anscorrect.on('pointerout',()=>{
            scene.anscorrectchosen.setVisible(false)
        })
        scene.anscorrect.on('pointerdown',()=>{
            scene.truepic.setVisible(true)
            scene.btnNext.setPosition(525,240).setVisible(true)
            scene.btnNextchosen.setPosition(525,240)
            scene.staticObject(true)
            scene.correctpoint++

        })
    }
}