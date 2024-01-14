import Option from "./option.js"
export default class LoadingNeed{
    static preload(scene){
        scene.load.image('btnNext','../assets/btn/btnNext.png')
        scene.load.image('btnNextchosen','../assets/btn/btnNextchosen.png')
        scene.load.image('true','../assets/img/true.png')
        scene.load.image('false','../assets/img/false.png')
        scene.load.image('endgame','../assets/img/endgame.png')
        scene.load.image('help','../assets/btn/help.png')
        scene.load.image('helpchosen','../assets/btn/helpchosen.png')
        scene.load.image('rank','../assets/btn/rank.png')
        scene.load.image('rankchosen','../assets/btn/rankchosen.png')

        scene.load.image('assitance','../assets/img/assitance.png')
        scene.load.image('fadeground','../assets/img/fadeground.png')
        scene.load.image('close','../assets/btn/close.png')
        scene.load.image('closechosen','../assets/btn/closechosen.png')

        scene.load.image('5050','../assets/btn/5050.png')
        scene.load.image('5050chosen','../assets/btn/5050chosen.png')
        scene.load.image('chance','../assets/btn/chance.png')
        scene.load.image('chancechosen','../assets/btn/chancechosen.png')
        scene.load.image('time','../assets/btn/time.png')
        scene.load.image('timechosen','../assets/btn/timechosen.png')

        scene.load.image('markdashboard','../assets/img/markdashboard.png')

    }
    static closevrything(scene){
        scene.fadeground.setVisible(false)
        scene.assitDashboard.setVisible(false)
        scene.endgame.setVisible(false)
        scene.truepic.setVisible(false)
        scene.falsepic.setVisible(false)
        scene.btnNext.setVisible(false); scene.btnNextchosen.setVisible(false)
        scene.btnReturn.setVisible(false); scene.btnReturnchosen.setVisible(false)
        scene.btnHelp.setVisible(false); scene.btnHelpchosen.setVisible(false)
        scene.btnrank.setVisible(false); scene.btnrankchosen.setVisible(false)
        scene.btnClose.setVisible(false); scene.btnClosechosen.setVisible(false)
        scene.btn5050.setVisible(false); scene.btn5050chosen.setVisible(false)
        scene.btnChance.setVisible(false); scene.btnChancechosen.setVisible(false)
        scene.btnTime.setVisible(false); scene.btnTimechosen.setVisible(false)
        scene.markDashboard.setVisible(false)
        scene.text5050.setVisible(false); scene.textChance.setVisible(false)
        scene.textTime.setVisible(false); scene.textcorrect.setVisible(false)
        scene.textleft.setVisible(false)
        scene.ans1.setVisible(false); scene.ans1chosen.setVisible(false)
        scene.ans2.setVisible(false); scene.ans2chosen.setVisible(false)
        scene.ans3.setVisible(false); scene.ans3chosen.setVisible(false)
        scene.anscorrect.setVisible(false); scene.anscorrectchosen.setVisible(false)
        scene.question.setVisible(false)

        scene.quest.setVisible(false)
        scene.questnumber.setVisible(false)
        scene.timer.setVisible(false)
        
    }
    static create(scene){
        scene.fadeground =  scene.add.image(0,0,'fadeground').setOrigin(0,0).setDepth(10).setInteractive().setVisible(false).setAlpha(0.4)
        scene.assitDashboard = scene.add.image(400,300,'assitance').setDepth(11).setVisible(false)
        scene.endgame = scene.add.image(0,0,'endgame').setOrigin(0,0).setVisible(false)
        scene.truepic = scene.add.image(400,300,'true').setDepth(5).setVisible(false)
        scene.falsepic = scene.add.image(400,300,'false').setDepth(5).setVisible(false)
        scene.btnNext = scene.add.image(510,250,'btnNext').setDepth(6).setVisible(false).setInteractive()
        scene.btnNextchosen = scene.add.image(510,250,'btnNextchosen').setDepth(7).setVisible(false)
        scene.btnReturn = scene.add.image(750,550,'btnNext').setDepth(6).setVisible(false).setInteractive()
        scene.btnReturnchosen = scene.add.image(750,550,'btnNextchosen').setDepth(6).setVisible(false)
        scene.btnHelp = scene.add.image(35,35,'help').setDepth(2).setVisible(false).setInteractive().setScale(0.8); scene.btnHelpchosen = scene.add.image(35,35,'helpchosen').setDepth(2.1).setVisible(false).setScale(0.8)
        scene.btnrank = scene.add.image(35,90,'rank').setDepth(2).setVisible(false).setInteractive().setScale(0.8); scene.btnrankchosen = scene.add.image(35,90,'rankchosen').setDepth(2.1).setVisible(false).setScale(0.8)
        scene.btnClose = scene.add.image(570,169,'close').setDepth(11.1).setInteractive().setScale(0.9).setVisible(false); scene.btnClosechosen = scene.add.image(570,169,'closechosen').setDepth(11.2).setVisible(false).setScale(0.9)
        scene.btn5050 = scene.add.image(240,225,'5050').setDepth(11.1).setInteractive().setVisible(false); scene.btn5050chosen = scene.add.image(240,225,'5050chosen').setDepth(11.2).setVisible(false)
        scene.btnChance = scene.add.image(240,310,'chance').setDepth(11.1).setInteractive().setVisible(false);scene.btnChancechosen = scene.add.image(240,310,'chancechosen').setDepth(11.2).setVisible(false) 
        scene.btnTime = scene.add.image(240,395,'time').setDepth(11.1).setInteractive().setVisible(false); scene.btnTimechosen = scene.add.image(240,395,'timechosen').setDepth(11.2).setVisible(false)
        scene.markDashboard = scene.add.image(400,300,'markdashboard').setDepth(11).setInteractive().setVisible(false); scene.btnMarkclose = scene.add.image(650,80,'close').setInteractive().setOrigin(0,0).setDepth(11.1).setVisible(false); scene.btnMarkclosechosen = scene.add.image(650,80,'closechosen').setOrigin(0,0).setDepth(11.2).setVisible(false)
       
        // Chứ trong function 
        scene.text5050 = scene.add.text(285, 215, "Ẩn đi 2 câu trả lời sai.", { font: "25px Tahoma", fill: "#FFFFF" }).setDepth(11.1).setVisible(false);
        scene.textChance = scene.add.text(285, 300, "Được trả lời lại(nếu sai).", { font: "25px Tahoma", fill: "#FFFFF" }).setDepth(11.1).setVisible(false);
        scene.textTime = scene.add.text(285, 385, "Cộng 30 giây.", { font: "25px Tahoma", fill: "#FFFFF" }).setDepth(11.1).setVisible(false);
        scene.textcorrect = scene.add.text(630, 160, scene.correctpoint, { font: "25px Tahoma", fill: "#FFFFF" }).setOrigin(0,0).setDepth(11.1).setVisible(false)
        scene.textleft = scene.add.text(630, 212.5,20, { font: "25px Tahoma", fill: "#FFFFF" }).setOrigin(0,0).setDepth(11.1).setVisible(false)

       
       
       
       
       
       
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

        scene.btnHelp.on('pointerover',()=>{
            scene.btnHelpchosen.setVisible(true)
        })
        scene.btnHelp.on('pointerout',()=>{
            scene.btnHelpchosen.setVisible(false)
        })

        scene.btnrank.on('pointerover',()=>{
            scene.btnrankchosen.setVisible(true)
        })
        scene.btnrank.on('pointerout',()=>{
            scene.btnrankchosen.setVisible(false)
        })
        scene.btnClose.on('pointerover',()=>{
            scene.btnClosechosen.setVisible(true)
        })
        scene.btnClose.on('pointerout',()=>{
            scene.btnClosechosen.setVisible(false)
        })

        scene.btn5050.on('pointerover',()=>{
            scene.btn5050chosen.setVisible(true)
        })
        scene.btn5050.on('pointerout',()=>{
            scene.btn5050chosen.setVisible(false)
        })

        scene.btnChance.on('pointerover',()=>{
            scene.btnChancechosen.setVisible(true)
        })
        scene.btnChance.on('pointerout',()=>{
            scene.btnChancechosen.setVisible(false)
        })

        scene.btnTime.on('pointerover',()=>{
            scene.btnTimechosen.setVisible(true)
        })
        scene.btnTime.on('pointerout',()=>{
            scene.btnTimechosen.setVisible(false)
        })
        scene.btnMarkclose.on('pointerover',()=>{
            scene.btnMarkclosechosen.setVisible(true)
        })
        scene.btnMarkclose.on('pointerout',()=>{
            scene.btnMarkclosechosen.setVisible(false)
        })
        scene.btnrank.on('pointerdown',()=>{
            scene.fadeground.setVisible(true)
            scene.markDashboard.setVisible(true); scene.textcorrect.setVisible(true); scene.textcorrect.text = scene.correctpoint
            scene.btnMarkclose.setVisible(true); scene.textleft.setVisible(true); scene.textleft.text = 20 -  scene.count
        })
        scene.btnMarkclose.on('pointerdown',()=>{
          scene.fadeground.setVisible(false)
          scene.markDashboard.setVisible(false)
          scene.btnMarkclose.setVisible(false); scene.btnMarkclosechosen.setVisible(false) 
          scene.textcorrect.setVisible(false)
          scene.textleft.setVisible(false)
        })
        scene.btnReturn.on('pointerdown',()=>{

            scene.endThongke.setVisible(false)
            scene.endPoint.setVisible(false)
            scene.endgame.setVisible(false)
            scene.btnReturn.setVisible(false); scene.btnReturnchosen.setVisible(false)
            Option.Refund(scene)
        })

        scene.btnHelp.on('pointerdown',()=>{
            scene.onworking = false
            scene.fadeground.setVisible(true)
            scene.assitDashboard.setVisible(true)
            scene.btnClose.setVisible(true)
            scene.btn5050.setVisible(true); scene.text5050.setVisible(true)
            scene.btnChance.setVisible(true); scene.textChance.setVisible(true)
            scene.btnTime.setVisible(true); scene.textTime.setVisible(true)

        })
        scene.btnClose.on('pointerdown',()=>{
           closeAssit()
        })
        scene.btn5050.on('pointerdown',()=>{
            scene.btn5050.disableInteractive()
            closeAssit()
            scene.ans1.setVisible(false); scene.ans2.setVisible(false)
        })
        scene.btnChance.on('pointerdown',()=>{
            scene.btnChance.disableInteractive()
            closeAssit()
            scene.chancepoint = true
        })
        scene.btnTime.on('pointerdown',()=>{
            scene.btnTime.disableInteractive()
            closeAssit()
            scene.timevalue += 30
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
            if(scene.chancepoint == true){
                scene.ans1.setVisible(false); scene.ans1chosen.setVisible(false )
                scene.chancepoint = false
            }
            else {
                scene.falsepic.setVisible(true)
                scene.btnNext.setPosition(530,240).setVisible(true)
                scene.btnNextchosen.setPosition(530,240)
                scene.staticObject(true)
                scene.falsepoint++
            }
         

        })
        //ans2 event
        scene.ans2.on('pointerover',()=>{
            scene.ans2chosen.setVisible(true)
            
        })
        scene.ans2.on('pointerout',()=>{
            scene.ans2chosen.setVisible(false)
        })
        scene.ans2.on('pointerdown',()=>{
            if(scene.chancepoint == true){
                scene.ans2.setVisible(false); scene.ans2chosen.setVisible(false )
                scene.chancepoint = false
            }
            else {
                scene.falsepic.setVisible(true)
                scene.btnNext.setPosition(530,240).setVisible(true)
                scene.btnNextchosen.setPosition(530,240)
                scene.staticObject(true)
                scene.falsepoint++
            }


        })
        //ans3 event
        scene.ans3.on('pointerover',()=>{
            scene.ans3chosen.setVisible(true)
        })
        scene.ans3.on('pointerout',()=>{
            scene.ans3chosen.setVisible(false)
        })
        scene.ans3.on('pointerdown',()=>{
            if(scene.chancepoint == true){
                scene.ans3.setVisible(false); scene.ans3chosen.setVisible(false )
                scene.chancepoint = false
            }
            else {
                scene.falsepic.setVisible(true)
                scene.btnNext.setPosition(530,240).setVisible(true)
                scene.btnNextchosen.setPosition(530,240)
                scene.staticObject(true)
                scene.falsepoint++
            }

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
            if(scene.chancepoint.visible == true){
                scene.chancepoint = false
            }

        })


        function closeAssit(){
            scene.onworking = true
            scene.fadeground.setVisible(false)
            scene.assitDashboard.setVisible(false)
            scene.btnClose.setVisible(false); scene.btnClosechosen.setVisible(false)

            scene.btn5050.setVisible(false); scene.btn5050chosen.setVisible(false); scene.text5050.setVisible(false)
            scene.btnChance.setVisible(false);scene.btnChancechosen.setVisible(false); scene.textChance.setVisible(false)
            scene.btnTime.setVisible(false); scene.btnTimechosen.setVisible(false); scene.textTime.setVisible(false)
        }
    }
}