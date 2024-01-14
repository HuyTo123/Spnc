export default class LoadingQD{
    static preload(scene){
        //1A
        scene.load.image('question1D','../assets/QuestionD/Quest1D/question1D.png')
        scene.load.image('ans11D','../assets/QuestionD/Quest1D/ans1.png')
        scene.load.image('ans11Dchosen','../assets/QuestionD/Quest1D/ans1chosen.png')
        scene.load.image('ans21D','../assets/QuestionD/Quest1D/ans2.png')
        scene.load.image('ans21Dchosen','../assets/QuestionD/Quest1D/ans2chosen.png')
        scene.load.image('ans31D','../assets/QuestionD/Quest1D/ans3.png')
        scene.load.image('ans31Dchosen','../assets/QuestionD/Quest1D/ans3chosen.png')
        scene.load.image('anscorrect1D','../assets/QuestionD/Quest1D/correctans.png')
        scene.load.image('anscorrectchosen1D','../assets/QuestionD/Quest1D/correctanschosen.png')
        //2A
        scene.load.image('question2D','../assets/QuestionD/Quest2D/question2D.png')
        scene.load.image('ans12D','../assets/QuestionD/Quest2D/ans1.png')
        scene.load.image('ans12Dchosen','../assets/QuestionD/Quest2D/ans1chosen.png')
        scene.load.image('ans22D','../assets/QuestionD/Quest2D/ans2.png')
        scene.load.image('ans22Dchosen','../assets/QuestionD/Quest2D/ans2chosen.png')
        scene.load.image('ans32D','../assets/QuestionD/Quest2D/ans3.png')
        scene.load.image('ans32Dchosen','../assets/QuestionD/Quest2D/ans3chosen.png')
        scene.load.image('anscorrect2D','../assets/QuestionD/Quest2D/correctans.png')
        scene.load.image('anscorrectchosen2D','../assets/QuestionD/Quest2D/correctanschosen.png')
        //3A
        scene.load.image('question3D','../assets/QuestionD/Quest3D/question3D.png')
        scene.load.image('ans13D','../assets/QuestionD/Quest3D/ans1.png')
        scene.load.image('ans13Dchosen','../assets/QuestionD/Quest3D/ans1chosen.png')
        scene.load.image('ans23D','../assets/QuestionD/Quest3D/ans2.png')
        scene.load.image('ans23Dchosen','../assets/QuestionD/Quest3D/ans2chosen.png')
        scene.load.image('ans33D','../assets/QuestionD/Quest3D/ans3.png')
        scene.load.image('ans33Dchosen','../assets/QuestionD/Quest3D/ans3chosen.png')
        scene.load.image('anscorrect3D','../assets/QuestionD/Quest3D/correctans.png')
        scene.load.image('anscorrectchosen3D','../assets/QuestionD/Quest3D/correctanschosen.png')
        //4A
        scene.load.image('question4D','../assets/QuestionD/Quest4D/question4D.png')
        scene.load.image('ans14D','../assets/QuestionD/Quest4D/ans1.png')
        scene.load.image('ans14Dchosen','../assets/QuestionD/Quest4D/ans1chosen.png')
        scene.load.image('ans24D','../assets/QuestionD/Quest4D/ans2.png')
        scene.load.image('ans24Dchosen','../assets/QuestionD/Quest4D/ans2chosen.png')
        scene.load.image('ans34D','../assets/QuestionD/Quest4D/ans3.png')
        scene.load.image('ans34Dchosen','../assets/QuestionD/Quest4D/ans3chosen.png')
        scene.load.image('anscorrect4D','../assets/QuestionD/Quest4D/correctans.png')
        scene.load.image('anscorrectchosen4D','../assets/QuestionD/Quest4D/correctanschosen.png')
        //5A
        scene.load.image('question5D','../assets/QuestionD/Quest5D/question5D.png')
        scene.load.image('ans15D','../assets/QuestionD/Quest5D/ans1.png')
        scene.load.image('ans15Dchosen','../assets/QuestionD/Quest5D/ans1chosen.png')
        scene.load.image('ans25D','../assets/QuestionD/Quest5D/ans2.png')
        scene.load.image('ans25Dchosen','../assets/QuestionD/Quest5D/ans2chosen.png')
        scene.load.image('ans35C','../assets/QuestionD/Quest5D/ans3.png')
        scene.load.image('ans35Cchosen','../assets/QuestionD/Quest5D/ans3chosen.png')
        scene.load.image('anscorrect5D','../assets/QuestionD/Quest5D/correctans.png')
        scene.load.image('anscorrectchosen5D','../assets/QuestionD/Quest5D/correctanschosen.png')
       
    }
    
    
    static LoadCDD(scene,numb){
        scene.ans1.setVisible(true)
        scene.ans2.setVisible(true)
        scene.ans3.setVisible(true)

        if(numb >= 1 && numb <= 4){
            scene.question.setTexture('question1D')
            scene.ans1.setTexture('ans11D');scene.ans1chosen.setTexture('ans11Dchosen')
            scene.ans2.setTexture('ans21D'); scene.ans2chosen.setTexture('ans21Dchosen')
            scene.ans3.setTexture('ans31D'); scene.ans3chosen.setTexture('ans31Dchosen')
            scene.anscorrect.setTexture('anscorrect1D'); scene.anscorrectchosen.setTexture('anscorrectchosen1D')
            random(scene)
        }
        else if(numb >=  5 && numb <=8 ){
            scene.question.setTexture('question2D')
            scene.ans1.setTexture('ans12D');scene.ans1chosen.setTexture('ans12Dchosen')
            scene.ans2.setTexture('ans22D'); scene.ans2chosen.setTexture('ans22Dchosen')
            scene.ans3.setTexture('ans32D'); scene.ans3chosen.setTexture('ans32Dchosen')
            scene.anscorrect.setTexture('anscorrect2D'); scene.anscorrectchosen.setTexture('anscorrectchosen2D')
            random(scene)

        }
        else if(numb >= 9 && scene.numb <= 12){
            scene.question.setTexture('question3D')
            scene.ans1.setTexture('ans13D');scene.ans1chosen.setTexture('ans13Dchosen')
            scene.ans2.setTexture('ans23D'); scene.ans2chosen.setTexture('ans23Dchosen')
            scene.ans3.setTexture('ans33D'); scene.ans3chosen.setTexture('ans33Dchosen')
            scene.anscorrect.setTexture('anscorrect3D'); scene.anscorrectchosen.setTexture('anscorrectchosen3D')
            random(scene)

        }
        else if(numb  >= 13 && numb <= 16){
            scene.question.setTexture('question4D')
            scene.ans1.setTexture('ans14D');scene.ans1chosen.setTexture('ans14Dchosen')
            scene.ans2.setTexture('ans24D'); scene.ans2chosen.setTexture('ans24Dchosen')
            scene.ans3.setTexture('ans34D'); scene.ans3chosen.setTexture('ans34Dchosen')
            scene.anscorrect.setTexture('anscorrect4D'); scene.anscorrectchosen.setTexture('anscorrectchosen4D')
            random(scene)

        }
        else if(numb >= 17 && scene.numb <= 20){
            scene.question.setTexture('question5D')
            scene.ans1.setTexture('ans15D');scene.ans1chosen.setTexture('ans15Dchosen')
            scene.ans2.setTexture('ans25D'); scene.ans2chosen.setTexture('ans25Dchosen')
            scene.ans3.setTexture('ans35C'); scene.ans3chosen.setTexture('ans35Cchosen')
            scene.anscorrect.setTexture('anscorrect5D'); scene.anscorrectchosen.setTexture('anscorrectchosen5D')
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