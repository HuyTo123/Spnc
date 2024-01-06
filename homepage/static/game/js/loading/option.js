export default class Option {
    static preload(scene){
        scene.load.image('optiondashboard','../assets/img/optiondashboard.png')
        scene.load.image('cdA','../assets/btn/cdA.png')
        scene.load.image('cdAchosen','../assets/btn/cdAchosen.png')

        scene.load.image('cdB','../assets/btn/cdB.png')
        scene.load.image('cdBchosen','../assets/btn/cdBchosen.png')

        scene.load.image('cdC','../assets/btn/cdC.png')
        scene.load.image('cdCchosen','../assets/btn/cdCchosen.png')

        scene.load.image('cdD','../assets/btn/cdD.png')
        scene.load.image('cdDchosen','../assets/btn/cdDchosen.png')

        scene.load.image('cdE','../assets/btn/cdE.png')
        scene.load.image('cdEchosen','../assets/btn/cdEchosen.png')

        scene.load.image('cdF','../assets/btn/cdF.png')
        scene.load.image('cdFchosen','../assets/btn/cdFchosen.png')


    }
    static create(scene){
        scene.dashboardOption = scene.add.image(0,0,'optiondashboard').setOrigin(0,0).setDepth(1)
        scene.cdA = scene.add.image(25,150,'cdA').setOrigin(0,0).setDepth(2).setInteractive();scene.cdAchosen = scene.add.image(25,150,'cdAchosen').setOrigin(0,0).setDepth(2.1).setVisible(false);
        scene.cdB = scene.add.image(275,150,'cdB').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdBchosen = scene.add.image(275,150,'cdBchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdC = scene.add.image(525,150,'cdC').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdCchosen = scene.add.image(525,150,'cdCchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)

        scene.cdD =  scene.add.image(25,280,'cdD').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdDchosen = scene.add.image(25,280,'cdDchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdE =  scene.add.image(275,280,'cdE').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdEchosen = scene.add.image(275,280,'cdEchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdF =  scene.add.image(525,280,'cdF').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdFchosen = scene.add.image(525,280,'cdFchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)

        scene.cdA.on('pointerover',()=>{
            scene.cdAchosen.setVisible(true)
        })
        scene.cdA.on('pointerout',()=>{
            scene.cdAchosen.setVisible(false)
        })

        scene.cdB.on('pointerover',()=>{
            scene.cdBchosen.setVisible(true)
        })
        scene.cdB.on('pointerout',()=>{
            scene.cdBchosen.setVisible(false)
        })

        scene.cdC.on('pointerover',()=>{
            scene.cdCchosen.setVisible(true)
        })
        scene.cdC.on('pointerout',()=>{
            scene.cdCchosen.setVisible(false)
        })
        
        scene.cdD.on('pointerover',()=>{
            scene.cdDchosen.setVisible(true)
        })
        scene.cdD.on('pointerout',()=>{
            scene.cdDchosen.setVisible(false)
        })

        scene.cdE.on('pointerover',()=>{
            scene.cdEchosen.setVisible(true)
        })
        scene.cdE.on('pointerout',()=>{
            scene.cdEchosen.setVisible(false)
        })

        scene.cdF.on('pointerover',()=>{
            scene.cdFchosen.setVisible(true)
        })
        scene.cdF.on('pointerout',()=>{
            scene.cdFchosen.setVisible(false)
        })






        scene.cdA.on('pointerdown',()=>{
            allStaticclose()
          
          

          
            scene.btnReturn.setVisible(false); scene.btnReturnchosen.setVisible(false)
            scene.onworking = true

            scene.question.setVisible(true)
            scene.ans1.setVisible(true);scene.ans1chosen.setVisible(false)
            scene.ans2.setVisible(true); scene.ans2chosen.setVisible(false)
            scene.ans3.setVisible(true); scene.ans3chosen.setVisible(false)
            scene.anscorrect.setVisible(true); scene.anscorrectchosen.setVisible(false)
            scene.quest.setVisible(true)
            scene.questnumber.setVisible(true)
            scene.timer.setVisible(true)


            scene.checkpoint = 'A'
            scene.checkpointnow = 'A'

        })


        function allStaticclose(){
            scene.dashboardOption.setVisible(false)
            scene.cdA.setVisible(false); scene.cdAchosen.setVisible(false)
            scene.cdB.setVisible(false)
            scene.cdC.setVisible(false)
            scene.cdD.setVisible(false)
            scene.cdE.setVisible(false)
            scene.cdF.setVisible(false)
    
        }




    }
    static allClose(){
        scene.cdA.setVisible(false); scene.cdAchosen.setVisible(false)
        scene.cdB.setVisible(false)
        scene.cdC.setVisible(false)
        scene.cdD.setVisible(false)
        scene.cdE.setVisible(false)
        scene.cdF.setVisible(false)


    }

    static Refund(scene){

        scene.dashboardOption.setVisible(true)

        scene.cdA.setVisible(true); scene.cdAchosen.setVisible(false)
        scene.cdB.setVisible(true)
        scene.cdC.setVisible(true)
        scene.cdD.setVisible(true)
        scene.cdE.setVisible(true)
        scene.cdF.setVisible(true)

    }
}