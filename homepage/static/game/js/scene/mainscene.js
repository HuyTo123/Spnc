import LoadingQA from "../loading/loadingQA.js"; import LoadingQB from "../loading/loadingQB.js"; import LoadingQC from "../loading/loadingQC.js";
import LoadingNeed from "../loading/loadingNeed.js"
import endDashboard from "../loading/endDashboard.js"
import Option from "../loading/option.js"
export default class Mainscene extends Phaser.Scene{
    constructor(){
        super('Mainscene')
    }
    preload(){
        LoadingQA.preload(this)
        LoadingNeed.preload(this)
        Option.preload(this)
        LoadingQB.preload(this)
        LoadingQC.preload(this)
    }
    create(){
        this.quest = this.add.text(66, 189, "1", { font: "40px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false).setOrigin(0.5,0.5);
        this.questnumber = this.add.text(90, 165, "/20", { font: "40px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false);
        this.timer = this.add.text(741, 44.5, "30", { font: "32px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false).setOrigin(0.5,0.5);
        this.endThongke = this.add.text(260,420,"Bạn đã đạt được ",{font: "25px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false)
        this.endPoint = this.add.text(453,420,"10",{font: "25px Tahoma", fill: "#FFFFF" }).setDepth(3).setOrigin(0,0).setVisible(false)
        
        this.chancepoint = false
        this.checkpoint = ''
        this.checkpointnow = ''
        this.onworking =  false
        this.timevalue = 30
        this.count = 0
        this.checkend = 0 
        this.correctpoint = 0
        this.falsepoint = 0
        this.arrayQuest =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

        LoadingNeed.create(this)
        Option.create(this)

        this.btnNext.on('pointerdown',()=>{
            if(this.checkpointnow == 'A'){
                if(this.arrayQuest.length != 0){
                    LoadingQA.destroy(this)
                    LoadingQA.LoadCDA(this,this.randomQuest())
                    this.timevalue = 30
                    this.timer.text = this.timevalue
                    this.quest.text = this.count
                    this.staticObject(false)
                    
                }
                else {
                    this.endPoint.text = this.correctpoint
                    endDashboard.create(this)
                }


            }
            else if(this.checkpointnow == 'B'){
                if(this.arrayQuest.length != 0){
                    LoadingQB.destroy(this)
                    LoadingQB.LoadCDB(this,this.randomQuest())
                    this.timevalue = 30
                    this.timer.text = this.timevalue

                    this.quest.text = this.count
                    this.staticObject(false)
                    
                }
                else {
                    this.endPoint.text = this.correctpoint
                    endDashboard.create(this)
                }
            }
            else if(this.checkpointnow == 'C'){
                if(this.arrayQuest.length != 0){
                    LoadingQC.destroy(this)
                    LoadingQC.LoadCDC(this,this.randomQuest())
                    this.timevalue = 30
                    this.timer.text = this.timevalue

                    this.quest.text = this.count
                    this.staticObject(false)
                    
                }
                else {
                    this.endPoint.text = this.correctpoint
                    endDashboard.create(this)
                }
            }
           
           
        })
        setInterval(()=> {
            if(this.onworking == true){
                this.timevalue--
                if(this.timevalue < 0){
                    if(this.checkpointnow == 'A'){
                        LoadingQA.destroy(this)
                        LoadingQA.LoadCDA(this,this.randomQuest())
                        this.quest.text = this.count
                        this.timevalue = 30
                        this.timer.text = this.timevalue

                        this.staticObject(false)

                    }
                    else if(this.checkpointnow == 'B'){
                        LoadingQB.destroy(this)
                        LoadingQB.LoadCDB(this,this.randomQuest())
                        this.quest.text = this.count
                        this.timevalue = 30
                        this.timer.text = this.timevalue

                        this.staticObject(false)
                    }
                    else if(this.checkpointnow == 'c'){
                        LoadingQC.destroy(this)
                        LoadingQC.LoadCDC(this,this.randomQuest())
                        this.quest.text = this.count
                        this.timevalue = 30
                        this.timer.text = this.timevalue
                        this.staticObject(false)
                    }
                }
                else {
                    this.timer.text = this.timevalue
                }
            }
        }, 1000);

    }
    randomQuest(){
        let temp = this.arrayQuest[Math.floor(Math.random() * this.arrayQuest.length)];
        for(let k = 0; k < this.arrayQuest.length; k++){
            if(temp == this.arrayQuest[k]){
                this.arrayQuest.splice(k,1)                    
            }
        }
        this.count++
        return temp
    }
    update(){
        if(this.checkpoint == 'A'){
            LoadingQA.LoadCDA(this,this.randomQuest())
            this.quest.text = this.count
            this.checkpoint = ''
        }
        else if(this.checkpoint == 'B'){
            LoadingQB.LoadCDB(this,this.randomQuest())
            this.quest.text = this.count
            this.checkpoint = ''
        }
        else if(this.checkpoint == 'c'){
            LoadingQC.LoadCDC(this,this.randomQuest())
            this.quest.text = this.count
            this.checkpoint = ''
        }
        
    }   
    staticObject(check){
        if(check == true){
            console.log('true')
            this.ans1.disableInteractive()
            this.ans1chosen.setVisible(false)
            this.ans2.disableInteractive()
            this.ans2chosen.setVisible(false)
            this.ans3.disableInteractive()
            this.ans3chosen.setVisible(false)
            this.anscorrect.disableInteractive()
            this.anscorrectchosen.setVisible(false)
            this.btnHelp.disableInteractive()
            this.btnrank.disableInteractive()


        }
        else if(check==false){
            console.log('false')

            this.ans1.setInteractive()
            this.ans2.setInteractive()
            this.ans3.setInteractive()
            this.anscorrect.setInteractive()
            this.btnHelp.setInteractive()
            this.btnrank.setInteractive()
        }
    }
    


}