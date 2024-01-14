export default class LoadingQF{
    static preload(scene){
        //1A
        scene.load.image('question1F','../assets/QuestionF/Quest1F/question1F.png')
        scene.load.image('ans11F','../assets/QuestionF/Quest1F/ans1.png')
        scene.load.image('ans11Fchosen','../assets/QuestionF/Quest1F/ans1chosen.png')
        scene.load.image('ans21F','../assets/QuestionF/Quest1F/ans2.png')
        scene.load.image('ans21Fchosen','../assets/QuestionF/Quest1F/ans2chosen.png')
        scene.load.image('ans31F','../assets/QuestionF/Quest1F/ans3.png')
        scene.load.image('ans31Fchosen','../assets/QuestionF/Quest1F/ans3chosen.png')
        scene.load.image('anscorrect1F','../assets/QuestionF/Quest1F/correctans.png')
        scene.load.image('anscorrectchosen1F','../assets/QuestionF/Quest1F/correctanschosen.png')
        //2A
        scene.load.image('question2F','../assets/QuestionF/Quest2F/question2F.png')
        scene.load.image('ans12F','../assets/QuestionF/Quest2F/ans1.png')
        scene.load.image('ans12Fchosen','../assets/QuestionF/Quest2F/ans1chosen.png')
        scene.load.image('ans22F','../assets/QuestionF/Quest2F/ans2.png')
        scene.load.image('ans22Fchosen','../assets/QuestionF/Quest2F/ans2chosen.png')
        scene.load.image('ans32F','../assets/QuestionF/Quest2F/ans3.png')
        scene.load.image('ans32Fchosen','../assets/QuestionF/Quest2F/ans3chosen.png')
        scene.load.image('anscorrect2F','../assets/QuestionF/Quest2F/correctans.png')
        scene.load.image('anscorrectchosen2F','../assets/QuestionF/Quest2F/correctanschosen.png')
        //3A
        scene.load.image('question3F','../assets/QuestionF/Quest3F/question3F.png')
        scene.load.image('ans13F','../assets/QuestionF/Quest3F/ans1.png')
        scene.load.image('ans13Fchosen','../assets/QuestionF/Quest3F/ans1chosen.png')
        scene.load.image('ans23F','../assets/QuestionF/Quest3F/ans2.png')
        scene.load.image('ans23Fchosen','../assets/QuestionF/Quest3F/ans2chosen.png')
        scene.load.image('ans33F','../assets/QuestionF/Quest3F/ans3.png')
        scene.load.image('ans33Fchosen','../assets/QuestionF/Quest3F/ans3chosen.png')
        scene.load.image('anscorrect3F','../assets/QuestionF/Quest3F/correctans.png')
        scene.load.image('anscorrectchosen3F','../assets/QuestionF/Quest3F/correctanschosen.png')
        //4A
        scene.load.image('question4F','../assets/QuestionF/Quest4F/question4F.png')
        scene.load.image('ans14F','../assets/QuestionF/Quest4F/ans1.png')
        scene.load.image('ans14Fchosen','../assets/QuestionF/Quest4F/ans1chosen.png')
        scene.load.image('ans24F','../assets/QuestionF/Quest4F/ans2.png')
        scene.load.image('ans24Fchosen','../assets/QuestionF/Quest4F/ans2chosen.png')
        scene.load.image('ans34F','../assets/QuestionF/Quest4F/ans3.png')
        scene.load.image('ans34Fchosen','../assets/QuestionF/Quest4F/ans3chosen.png')
        scene.load.image('anscorrect4F','../assets/QuestionF/Quest4F/correctans.png')
        scene.load.image('anscorrectchosen4F','../assets/QuestionF/Quest4F/correctanschosen.png')
        //5A
        scene.load.image('question5F','../assets/QuestionF/Quest5F/question5F.png')
        scene.load.image('ans15E','../assets/QuestionF/Quest5F/ans1.png')
        scene.load.image('ans15Echosen','../assets/QuestionF/Quest5F/ans1chosen.png')
        scene.load.image('ans25F','../assets/QuestionF/Quest5F/ans2.png')
        scene.load.image('ans25Fchosen','../assets/QuestionF/Quest5F/ans2chosen.png')
        scene.load.image('ans35F','../assets/QuestionF/Quest5F/ans3.png')
        scene.load.image('ans35Fchosen','../assets/QuestionF/Quest5F/ans3chosen.png')
        scene.load.image('anscorrect5F','../assets/QuestionF/Quest5F/correctans.png')
        scene.load.image('anscorrectchosen5F','../assets/QuestionF/Quest5F/correctanschosen.png')
       
    }
    
    
    static LoadCDF(scene,numb){
        scene.ans1.setVisible(true)
        scene.ans2.setVisible(true)
        scene.ans3.setVisible(true)

        if(numb >= 1 && numb <= 4){
            scene.question.setTexture('question1F')
            scene.ans1.setTexture('ans11F');scene.ans1chosen.setTexture('ans11Fchosen')
            scene.ans2.setTexture('ans21F'); scene.ans2chosen.setTexture('ans21Fchosen')
            scene.ans3.setTexture('ans31F'); scene.ans3chosen.setTexture('ans31Fchosen')
            scene.anscorrect.setTexture('anscorrect1F'); scene.anscorrectchosen.setTexture('anscorrectchosen1F')
            random(scene)
        }
        else if(numb >=  5 && numb <=8 ){
            scene.question.setTexture('question2F')
            scene.ans1.setTexture('ans12F');scene.ans1chosen.setTexture('ans12Fchosen')
            scene.ans2.setTexture('ans22F'); scene.ans2chosen.setTexture('ans22Fchosen')
            scene.ans3.setTexture('ans32F'); scene.ans3chosen.setTexture('ans32Fchosen')
            scene.anscorrect.setTexture('anscorrect2F'); scene.anscorrectchosen.setTexture('anscorrectchosen2F')
            random(scene)

        }
        else if(numb >= 9 && scene.numb <= 12){
            scene.question.setTexture('question3F')
            scene.ans1.setTexture('ans13F');scene.ans1chosen.setTexture('ans13Fchosen')
            scene.ans2.setTexture('ans23F'); scene.ans2chosen.setTexture('ans23Fchosen')
            scene.ans3.setTexture('ans33F'); scene.ans3chosen.setTexture('ans33Fchosen')
            scene.anscorrect.setTexture('anscorrect3F'); scene.anscorrectchosen.setTexture('anscorrectchosen3F')
            random(scene)

        }
        else if(numb  >= 13 && numb <= 16){
            scene.question.setTexture('question4F')
            scene.ans1.setTexture('ans14F');scene.ans1chosen.setTexture('ans14Fchosen')
            scene.ans2.setTexture('ans24F'); scene.ans2chosen.setTexture('ans24Fchosen')
            scene.ans3.setTexture('ans34F'); scene.ans3chosen.setTexture('ans34Fchosen')
            scene.anscorrect.setTexture('anscorrect4F'); scene.anscorrectchosen.setTexture('anscorrectchosen4F')
            random(scene)

        }
        else if(numb >= 17 && scene.numb <= 20){
            scene.question.setTexture('question5F')
            scene.ans1.setTexture('ans15E');scene.ans1chosen.setTexture('ans15Echosen')
            scene.ans2.setTexture('ans25F'); scene.ans2chosen.setTexture('ans25Fchosen')
            scene.ans3.setTexture('ans35F'); scene.ans3chosen.setTexture('ans35Fchosen')
            scene.anscorrect.setTexture('anscorrect5F'); scene.anscorrectchosen.setTexture('anscorrectchosen5F')
            random(scene)

            
        }
       
       
        
    }

    static destroy(scene){
       
        scene.btnNext.setVisible(false)
        scene.btnNextchosen.setVisible(false)
        scene.truepic.setVisible(false)
        scene.falsepic.setVisible(false)
        
    }
}
function random(scene){
    let  i =[1,2,3,4]
    for(let j = 0; j < 4; j++){
        let temp = i[Math.floor(Math.random() * i.length)];
        for(let k = 0; k < i.length; k++){
            if(temp == i[k]){
                i.splice(k,1)                    
            }
        }
        if(j == 0){
            if(temp == 1){
                scene.ans1.setPosition(370,290); scene.ans1chosen.setPosition(370,290)
            }
            else if(temp == 2){
                scene.ans1.setPosition(370,375); scene.ans1chosen.setPosition(370,375)
            }
            else if(temp == 3){
                scene.ans1.setPosition(370,460); scene.ans1chosen.setPosition(370,460)
            }
            else {
                scene.ans1.setPosition(370,545); scene.ans1chosen.setPosition(370,545)
            }
        }
        else if(j == 1){
            if(temp == 1){
                scene.ans2.setPosition(370,290); scene.ans2chosen.setPosition(370,290)
            }
            else if(temp == 2){
                scene.ans2.setPosition(370,375); scene.ans2chosen.setPosition(370,375)
            }
            else if(temp == 3){
                scene.ans2.setPosition(370,460); scene.ans2chosen.setPosition(370,460)
            }
            else {
                scene.ans2.setPosition(370,545); scene.ans2chosen.setPosition(370,545)
            }
        }
        else if (j == 2){
            if(temp == 1){
                scene.ans3.setPosition(370,290); scene.ans3chosen.setPosition(370,290)
            }
            else if(temp == 2){
                scene.ans3.setPosition(370,375); scene.ans3chosen.setPosition(370,375)
            }
            else if(temp == 3){
                scene.ans3.setPosition(370,460); scene.ans3chosen.setPosition(370,460)
            }
            else {
                scene.ans3.setPosition(370,545); scene.ans3chosen.setPosition(370,545)
            }
        }
        else {
            if(temp == 1){
                scene.anscorrect.setPosition(370,290); scene.anscorrectchosen.setPosition(370,290)
            }
            else if(temp == 2){
                scene.anscorrect.setPosition(370,375); scene.anscorrectchosen.setPosition(370,375)
            }
            else if(temp == 3){
                scene.anscorrect.setPosition(370,460); scene.anscorrectchosen.setPosition(370,460)
            }
            else {
                scene.anscorrect.setPosition(370,545); scene.anscorrectchosen.setPosition(370,545)
            }
        }
    }
}