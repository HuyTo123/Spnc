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

        scene.load.image('startbg','../assets/img/startbg.png')
        scene.load.image('btnStart','../assets/btn/start.png')
        scene.load.image('btnStartchosen','../assets/btn/startchosen.png')


    }
    static create(scene){
        scene.dashboardOption = scene.add.image(0,0,'optiondashboard').setOrigin(0,0).setDepth(1)
        scene.cdA = scene.add.image(25,150,'cdA').setOrigin(0,0).setDepth(2).setInteractive();scene.cdAchosen = scene.add.image(25,150,'cdAchosen').setOrigin(0,0).setDepth(2.1).setVisible(false);
        scene.cdB = scene.add.image(275,150,'cdB').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdBchosen = scene.add.image(275,150,'cdBchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdC = scene.add.image(525,150,'cdC').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdCchosen = scene.add.image(525,150,'cdCchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)

        scene.cdD =  scene.add.image(25,280,'cdD').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdDchosen = scene.add.image(25,280,'cdDchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdE =  scene.add.image(275,280,'cdE').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdEchosen = scene.add.image(275,280,'cdEchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        scene.cdF =  scene.add.image(525,280,'cdF').setOrigin(0,0).setDepth(2).setInteractive(); scene.cdFchosen = scene.add.image(525,280,'cdFchosen').setOrigin(0,0).setDepth(2.1).setVisible(false)
        allStaticclose()
        scene.startbg = scene.add.image(0,0,'startbg').setOrigin(0,0).setDepth(2).setInteractive()
        scene.btnStart = scene.add.image(400,275,'btnStart').setDepth(2.1).setInteractive(); scene.btnStartchosen = scene.add.image(400,275,'btnStartchosen').setDepth(2.2).setVisible(false)
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

        scene.btnStart.on('pointerover',()=>{
            scene.btnStartchosen.setVisible(true)
        })
        scene.btnStart.on('pointerout',()=>{
            scene.btnStartchosen.setVisible(false)
        })
        scene.btnStart.on('pointerdown',()=>{
            scene.btnStart.setVisible(false); scene.btnStartchosen.setVisible(false); scene.startbg.setVisible(false)
            allStaticopen()
        })




        scene.cdA.on('pointerdown',()=>{
            allStaticclose()
            allOpen()

            scene.checkpoint = 'A'
            scene.checkpointnow = 'A'
        })
        scene.cdB.on('pointerdown',()=>{
            allStaticclose(); allOpen()
            scene.checkpoint = 'B'
            scene.checkpointnow = 'B'
        })
        scene.cdC.on('pointerdown',()=>{
            allStaticclose(); allOpen()
            scene.checkpoint = 'C'
            scene.checkpointnow = 'C'
        })
        scene.cdD.on('pointerdown',()=>{
            allStaticclose(); allOpen()
            scene.checkpoint = 'D'
            scene.checkpointnow = 'D'
        })
        scene.cdE.on('pointerdown',()=>{
            allStaticclose(); allOpen()
            scene.checkpoint = 'E'
            scene.checkpointnow = 'E'
        })
        scene.cdF.on('pointerdown',()=>{
            allStaticclose(); allOpen()
            scene.checkpoint = 'F'
            scene.checkpointnow = 'F'
        })
        function allOpen(){
            scene.btnReturn.setVisible(false); scene.btnReturnchosen.setVisible(false)
            scene.onworking = true

            scene.question.setVisible(true)
            scene.ans1.setVisible(true)
            scene.ans2.setVisible(true)
            scene.ans3.setVisible(true)
            scene.anscorrect.setVisible(true)
            scene.quest.setVisible(true)
            scene.questnumber.setVisible(true)
            scene.timer.setVisible(true)
            scene.btnrank.setVisible(true); scene.btnHelp.setVisible(true)
        }
        function allStaticclose(){
            scene.dashboardOption.setVisible(false)
            scene.cdA.setVisible(false); scene.cdAchosen.setVisible(false)
            scene.cdB.setVisible(false); scene.cdBchosen.setVisible(false)
            scene.cdC.setVisible(false); scene.cdCchosen.setVisible(false)
            scene.cdD.setVisible(false); scene.cdDchosen.setVisible(false)
            scene.cdE.setVisible(false); scene.cdEchosen.setVisible(false)
            scene.cdF.setVisible(false); scene.cdFchosen.setVisible(false)
    
        }
        function allStaticopen(){
            scene.dashboardOption.setVisible(true)
            scene.cdA.setVisible(true)
            scene.cdB.setVisible(true)
            scene.cdC.setVisible(true)
            scene.cdD.setVisible(true)
            scene.cdE.setVisible(true)
            scene.cdF.setVisible(true)
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
        scene.cdA.setVisible(true)
        scene.cdB.setVisible(true)
        scene.cdC.setVisible(true)
        scene.cdD.setVisible(true)
        scene.cdE.setVisible(true)
        scene.cdF.setVisible(true)

    }
}