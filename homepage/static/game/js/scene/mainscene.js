import LoadingQA from "../loading/loadingQA.js"
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

    }
    create(){
        this.quest = this.add.text(50, 165, "1", { font: "40px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false);
        this.questnumber = this.add.text(85, 165, "/20", { font: "40px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false);
        this.timer = this.add.text(723.5, 26.5, "30", { font: "32px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false);
        this.endThongke = this.add.text(260,420,"TRẢ LỜI ĐÚNG     /20 CÂU",{font: "25px Tahoma", fill: "#FFFFF" }).setDepth(2).setVisible(false)
        this.endPoint = this.add.text(433,420,"10",{font: "25px Tahoma", fill: "#FFFFF" }).setDepth(3).setOrigin(0,0).setVisible(false)
        
        this.checkpoint = ''
        this.checkpointnow = ''
        this.onworking =  false
        this.timevalue = 5
        this.count = 0
        this.checkend = 0 
        this.correctpoint = 0
        this.falsepoint = 0
        this.arrayQuest =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

        LoadingQA.create(this)
        LoadingNeed.create(this)
        Option.create(this)
        
        this.btnNext.on('pointerdown',()=>{
            if(this.checkpointnow == 'A'){
                if(this.arrayQuest.length != 0){
                    LoadingQA.destroy(this)
                    LoadingQA.LoadCDA(this,this.randomQuest())
                    this.timevalue = 30
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
        
    }   
    staticObject(check){
        if(check == true){
            this.ans1.disableInteractive()
            this.ans1chosen.setVisible(false)
            this.ans2.disableInteractive()
            this.ans2chosen.setVisible(false)
            this.ans3.disableInteractive()
            this.ans3chosen.setVisible(false)
            this.anscorrect.disableInteractive()
            this.anscorrectchosen.setVisible(false)


        }
        else {
            this.ans1.setInteractive()
            this.ans2.setInteractive()
            this.ans3.setInteractive()
            this.anscorrect.setInteractive()

        }
    }
    


}