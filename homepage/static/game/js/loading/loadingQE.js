export default class LoadingQE{
    static preload(scene){
        //1A
        scene.load.image('question1E','../assets/QuestionE/Quest1E/question1E.png')
        scene.load.image('ans11E','../assets/QuestionE/Quest1E/ans1.png')
        scene.load.image('ans11Echosen','../assets/QuestionE/Quest1E/ans1chosen.png')
        scene.load.image('ans21E','../assets/QuestionE/Quest1E/ans2.png')
        scene.load.image('ans21Echosen','../assets/QuestionE/Quest1E/ans2chosen.png')
        scene.load.image('ans31E','../assets/QuestionE/Quest1E/ans3.png')
        scene.load.image('ans31Echosen','../assets/QuestionE/Quest1E/ans3chosen.png')
        scene.load.image('anscorrect1E','../assets/QuestionE/Quest1E/correctans.png')
        scene.load.image('anscorrectchosen1E','../assets/QuestionE/Quest1E/correctanschosen.png')
        //2A
        scene.load.image('question2E','../assets/QuestionE/Quest2E/question2E.png')
        scene.load.image('ans12E','../assets/QuestionE/Quest2E/ans1.png')
        scene.load.image('ans12Echosen','../assets/QuestionE/Quest2E/ans1chosen.png')
        scene.load.image('ans22E','../assets/QuestionE/Quest2E/ans2.png')
        scene.load.image('ans22Echosen','../assets/QuestionE/Quest2E/ans2chosen.png')
        scene.load.image('ans32E','../assets/QuestionE/Quest2E/ans3.png')
        scene.load.image('ans32Echosen','../assets/QuestionE/Quest2E/ans3chosen.png')
        scene.load.image('anscorrect2E','../assets/QuestionE/Quest2E/correctans.png')
        scene.load.image('anscorrectchosen2E','../assets/QuestionE/Quest2E/correctanschosen.png')
        //3A
        scene.load.image('question3E','../assets/QuestionE/Quest3E/question3E.png')
        scene.load.image('ans13E','../assets/QuestionE/Quest3E/ans1.png')
        scene.load.image('ans13Echosen','../assets/QuestionE/Quest3E/ans1chosen.png')
        scene.load.image('ans23E','../assets/QuestionE/Quest3E/ans2.png')
        scene.load.image('ans23Echosen','../assets/QuestionE/Quest3E/ans2chosen.png')
        scene.load.image('ans33E','../assets/QuestionE/Quest3E/ans3.png')
        scene.load.image('ans33Echosen','../assets/QuestionE/Quest3E/ans3chosen.png')
        scene.load.image('anscorrect3E','../assets/QuestionE/Quest3E/correctans.png')
        scene.load.image('anscorrectchosen3E','../assets/QuestionE/Quest3E/correctanschosen.png')
        //4A
        scene.load.image('question4E','../assets/QuestionE/Quest4E/question4E.png')
        scene.load.image('ans14E','../assets/QuestionE/Quest4E/ans1.png')
        scene.load.image('ans14Echosen','../assets/QuestionE/Quest4E/ans1chosen.png')
        scene.load.image('ans24E','../assets/QuestionE/Quest4E/ans2.png')
        scene.load.image('ans24Echosen','../assets/QuestionE/Quest4E/ans2chosen.png')
        scene.load.image('ans34E','../assets/QuestionE/Quest4E/ans3.png')
        scene.load.image('ans34Echosen','../assets/QuestionE/Quest4E/ans3chosen.png')
        scene.load.image('anscorrect4E','../assets/QuestionE/Quest4E/correctans.png')
        scene.load.image('anscorrectchosen4E','../assets/QuestionE/Quest4E/correctanschosen.png')
        //5A
        scene.load.image('question5E','../assets/QuestionE/Quest5E/question5E.png')
        scene.load.image('ans15E','../assets/QuestionE/Quest5E/ans1.png')
        scene.load.image('ans15Echosen','../assets/QuestionE/Quest5E/ans1chosen.png')
        scene.load.image('ans25E','../assets/QuestionE/Quest5E/ans2.png')
        scene.load.image('ans25Echosen','../assets/QuestionE/Quest5E/ans2chosen.png')
        scene.load.image('ans35E','../assets/QuestionE/Quest5E/ans3.png')
        scene.load.image('ans35Echosen','../assets/QuestionE/Quest5E/ans3chosen.png')
        scene.load.image('anscorrect5E','../assets/QuestionE/Quest5E/correctans.png')
        scene.load.image('anscorrectchosen5E','../assets/QuestionE/Quest5E/correctanschosen.png')
       
    }
    
    
    static LoadCDE(scene,numb){
        scene.ans1.setVisible(true)
        scene.ans2.setVisible(true)
        scene.ans3.setVisible(true)

        if(numb >= 1 && numb <= 4){
            scene.question.setTexture('question1E')
            scene.ans1.setTexture('ans11E');scene.ans1chosen.setTexture('ans11Echosen')
            scene.ans2.setTexture('ans21E'); scene.ans2chosen.setTexture('ans21Echosen')
            scene.ans3.setTexture('ans31E'); scene.ans3chosen.setTexture('ans31Echosen')
            scene.anscorrect.setTexture('anscorrect1E'); scene.anscorrectchosen.setTexture('anscorrectchosen1E')
            random(scene)
        }
        else if(numb >=  5 && numb <=8 ){
            scene.question.setTexture('question2E')
            scene.ans1.setTexture('ans12E');scene.ans1chosen.setTexture('ans12Echosen')
            scene.ans2.setTexture('ans22E'); scene.ans2chosen.setTexture('ans22Echosen')
            scene.ans3.setTexture('ans32E'); scene.ans3chosen.setTexture('ans32Echosen')
            scene.anscorrect.setTexture('anscorrect2E'); scene.anscorrectchosen.setTexture('anscorrectchosen2E')
            random(scene)

        }
        else if(numb >= 9 && scene.numb <= 12){
            scene.question.setTexture('question3E')
            scene.ans1.setTexture('ans13E');scene.ans1chosen.setTexture('ans13Echosen')
            scene.ans2.setTexture('ans23E'); scene.ans2chosen.setTexture('ans23Echosen')
            scene.ans3.setTexture('ans33E'); scene.ans3chosen.setTexture('ans33Echosen')
            scene.anscorrect.setTexture('anscorrect3E'); scene.anscorrectchosen.setTexture('anscorrectchosen3E')
            random(scene)

        }
        else if(numb  >= 13 && numb <= 16){
            scene.question.setTexture('question4E')
            scene.ans1.setTexture('ans14E');scene.ans1chosen.setTexture('ans14Echosen')
            scene.ans2.setTexture('ans24E'); scene.ans2chosen.setTexture('ans24Echosen')
            scene.ans3.setTexture('ans34E'); scene.ans3chosen.setTexture('ans34Echosen')
            scene.anscorrect.setTexture('anscorrect4E'); scene.anscorrectchosen.setTexture('anscorrectchosen4E')
            random(scene)

        }
        else if(numb >= 17 && scene.numb <= 20){
            scene.question.setTexture('question5E')
            scene.ans1.setTexture('ans15E');scene.ans1chosen.setTexture('ans15Echosen')
            scene.ans2.setTexture('ans25E'); scene.ans2chosen.setTexture('ans25Echosen')
            scene.ans3.setTexture('ans35E'); scene.ans3chosen.setTexture('ans35Echosen')
            scene.anscorrect.setTexture('anscorrect5E'); scene.anscorrectchosen.setTexture('anscorrectchosen5E')
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