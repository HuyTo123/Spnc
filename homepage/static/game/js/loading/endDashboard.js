export default class endDashboard{
    static preload(scene){
        

    }
    static create(scene){
        scene.onworking =  false
        scene.timevalue = 30
        scene.count = 0
        scene.quest.text = 0
        scene.checkend = 0 
       
        scene.arrayQuest =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        scene.checkpointnow = ''
        scene.staticObject(false)
        scene.question.setVisible(false)
        scene.ans1.setVisible(false);scene.ans1chosen.setVisible(false)
        scene.ans2.setVisible(false); scene.ans2chosen.setVisible(false)
        scene.ans3.setVisible(false); scene.ans3chosen.setVisible(false)
        scene.anscorrect.setVisible(false); scene.anscorrectchosen.setVisible(false)
        scene.truepic.setVisible(false);
        scene.falsepic.setVisible(false);
        scene.btnNext.setVisible(false)
        scene.btnNextchosen.setVisible(false)
        scene.quest.setVisible(false)
        scene.questnumber.setVisible(false)
        scene.timer.setVisible(false)
        scene.endThongke.setVisible(true)
        scene.endPoint.setVisible(true)
        scene.endgame.setVisible(true)
        scene.btnReturn.setVisible(true)
        
        scene.correctpoint = 0
        scene.falsepoint = 0

    }
}