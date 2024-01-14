import LoadingNeed from "./loadingNeed.js"
export default class endDashboard{
    static preload(scene){
        

    }
    static create(scene){

        scene.chancepoint = false
        scene.onworking =  false
        scene.timevalue = 30
        scene.count = 0
        scene.quest.text = 0
        scene.checkend = 0 
        scene.falsepoint = 0
        scene.arrayQuest =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        scene.checkpointnow = ''
        scene.checkpoint = ''
        scene.btn5050.setInteractive()
        scene.btnChance.setInteractive()
        scene.btnTime.setInteractive()
        scene.staticObject(false)
        LoadingNeed.closevrything(scene)
        
        if(scene.correctpoint >= 0 && scene.correctpoint < 3){
            scene.endPoint.text  = 0  + ' điểm'
        }
        else if(scene.correctpoint >= 3 && scene.correctpoint < 5){
            scene.endPoint.text  = 1 + ' điểm'

        }
        else if(scene.correctpoint >= 5 && scene.correctpoint < 10){
            scene.endPoint.text = 3+ ' điểm'
        }
        else if(scene.correctpoint >= 10 && scene.chancepoint < 12){
            scene.endPoint.text  = 5+ ' điểm'

        }
        else if(scene.correctpoint >= 12 && scene.correctpoint < 15){
            scene.endPoint.text  = 7+ ' điểm'

        } else if(scene.correctpoint >= 15 && scene.correctpoint<17){
            scene.endPoint.text  = 8+ ' điểm'

        } else if(scene.correctpoint >= 17 && scene.correctpoint<20){
            scene.endPoint.text  = 9+ ' điểm'

        } else if(scene.correctpoint == 20){
            scene.endPoint.text  = 10+ ' điểm'

        }
        scene.endPoint.setVisible(true); scene.endThongke.setVisible(true)
        scene.endgame.setVisible(true)
        scene.btnReturn.setVisible(true)
        scene.correctpoint = 0

        
       

    }
}