export default class LoadingQC{
    static preload(scene){
        //1A
        scene.load.image('question1C','../assets/questionC/Quest1C/question1C.png')
        scene.load.image('ans11C','../assets/questionC/Quest1C/ans1.png')
        scene.load.image('ans11Cchosen','../assets/questionC/Quest1C/ans1chosen.png')
        scene.load.image('ans21C','../assets/questionC/Quest1C/ans2.png')
        scene.load.image('ans21Cchosen','../assets/questionC/Quest1C/ans2chosen.png')
        scene.load.image('ans31C','../assets/questionC/Quest1C/ans3.png')
        scene.load.image('ans31Cchosen','../assets/questionC/Quest1C/ans3chosen.png')
        scene.load.image('anscorrect1C','../assets/questionC/Quest1C/correctans.png')
        scene.load.image('anscorrectchosen1C','../assets/questionC/Quest1C/correctanschosen.png')
        //2A
        scene.load.image('question2C','../assets/questionC/Quest2C/question2C.png')
        scene.load.image('ans12C','../assets/questionC/Quest2C/ans1.png')
        scene.load.image('ans12Cchosen','../assets/questionC/Quest2C/ans1chosen.png')
        scene.load.image('ans22C','../assets/questionC/Quest2C/ans2.png')
        scene.load.image('ans22Cchosen','../assets/questionC/Quest2C/ans2chosen.png')
        scene.load.image('ans32C','../assets/questionC/Quest2C/ans3.png')
        scene.load.image('ans32Cchosen','../assets/questionC/Quest2C/ans3chosen.png')
        scene.load.image('anscorrect2C','../assets/questionC/Quest2C/correctans.png')
        scene.load.image('anscorrectchosen2C','../assets/questionC/Quest2C/correctanschosen.png')
        //3A
        scene.load.image('question3C','../assets/questionC/Quest3C/question3C.png')
        scene.load.image('ans13C','../assets/questionC/Quest3C/ans1.png')
        scene.load.image('ans13Cchosen','../assets/questionC/Quest3C/ans1chosen.png')
        scene.load.image('ans23C','../assets/questionC/Quest3C/ans2.png')
        scene.load.image('ans23Cchosen','../assets/questionC/Quest3C/ans2chosen.png')
        scene.load.image('ans33C','../assets/questionC/Quest3C/ans3.png')
        scene.load.image('ans33Cchosen','../assets/questionC/Quest3C/ans3chosen.png')
        scene.load.image('anscorrect3C','../assets/questionC/Quest3C/correctans.png')
        scene.load.image('anscorrectchosen3C','../assets/questionC/Quest3C/correctanschosen.png')
        //4A
        scene.load.image('question4C','../assets/questionC/Quest4C/question4C.png')
        scene.load.image('ans14C','../assets/questionC/Quest4C/ans1.png')
        scene.load.image('ans14Cchosen','../assets/questionC/Quest4C/ans1chosen.png')
        scene.load.image('ans24C','../assets/questionC/Quest4C/ans2.png')
        scene.load.image('ans24Cchosen','../assets/questionC/Quest4C/ans2chosen.png')
        scene.load.image('ans34C','../assets/questionC/Quest4C/ans3.png')
        scene.load.image('ans34Cchosen','../assets/questionC/Quest4C/ans3chosen.png')
        scene.load.image('anscorrect4C','../assets/questionC/Quest4C/correctans.png')
        scene.load.image('anscorrectchosen4C','../assets/questionC/Quest4C/correctanschosen.png')
        //5A
        scene.load.image('question5C','../assets/questionC/Quest5C/question5C.png')
        scene.load.image('ans15C','../assets/questionC/Quest5C/ans1.png')
        scene.load.image('ans15Cchosen','../assets/questionC/Quest5C/ans1chosen.png')
        scene.load.image('ans25C','../assets/questionC/Quest5C/ans2.png')
        scene.load.image('ans25Cchosen','../assets/questionC/Quest5C/ans2chosen.png')
        scene.load.image('ans35C','../assets/questionC/Quest5C/ans3.png')
        scene.load.image('ans35Cchosen','../assets/questionC/Quest5C/ans3chosen.png')
        scene.load.image('anscorrect5C','../assets/questionC/Quest5C/correctans.png')
        scene.load.image('anscorrectchosen5C','../assets/questionC/Quest5C/correctanschosen.png')
       
    }
    
    
    static LoadCDC(scene,numb){
        scene.ans1.setVisible(true)
        scene.ans2.setVisible(true)
        scene.ans3.setVisible(true)

        if(numb >= 1 && numb <= 4){
            scene.question.setTexture('question1C')
            scene.ans1.setTexture('ans11C');scene.ans1chosen.setTexture('ans11Cchosen')
            scene.ans2.setTexture('ans21C'); scene.ans2chosen.setTexture('ans21Cchosen')
            scene.ans3.setTexture('ans31C'); scene.ans3chosen.setTexture('ans31Cchosen')
            scene.anscorrect.setTexture('anscorrect1C'); scene.anscorrectchosen.setTexture('anscorrectchosen1C')
            random(scene)
        }
        else if(numb >=  5 && numb <=8 ){
            scene.question.setTexture('question2C')
            scene.ans1.setTexture('ans12C');scene.ans1chosen.setTexture('ans12Cchosen')
            scene.ans2.setTexture('ans22C'); scene.ans2chosen.setTexture('ans22Cchosen')
            scene.ans3.setTexture('ans32C'); scene.ans3chosen.setTexture('ans32Cchosen')
            scene.anscorrect.setTexture('anscorrect2C'); scene.anscorrectchosen.setTexture('anscorrectchosen2C')
            random(scene)

        }
        else if(numb >= 9 && scene.numb <= 12){
            scene.question.setTexture('question3C')
            scene.ans1.setTexture('ans13C');scene.ans1chosen.setTexture('ans13Cchosen')
            scene.ans2.setTexture('ans23C'); scene.ans2chosen.setTexture('ans23Cchosen')
            scene.ans3.setTexture('ans33C'); scene.ans3chosen.setTexture('ans33Cchosen')
            scene.anscorrect.setTexture('anscorrect3C'); scene.anscorrectchosen.setTexture('anscorrectchosen3C')
            random(scene)

        }
        else if(numb  >= 13 && numb <= 16){
            scene.question.setTexture('question4C')
            scene.ans1.setTexture('ans14C');scene.ans1chosen.setTexture('ans14Cchosen')
            scene.ans2.setTexture('ans24C'); scene.ans2chosen.setTexture('ans24Cchosen')
            scene.ans3.setTexture('ans34C'); scene.ans3chosen.setTexture('ans34Cchosen')
            scene.anscorrect.setTexture('anscorrect4C'); scene.anscorrectchosen.setTexture('anscorrectchosen4C')
            random(scene)

        }
        else if(numb >= 17 && scene.numb <= 20){
            scene.question.setTexture('question5C')
            scene.ans1.setTexture('ans15C');scene.ans1chosen.setTexture('ans15Cchosen')
            scene.ans2.setTexture('ans25C'); scene.ans2chosen.setTexture('ans25Cchosen')
            scene.ans3.setTexture('ans35C'); scene.ans3chosen.setTexture('ans35Cchosen')
            scene.anscorrect.setTexture('anscorrect5C'); scene.anscorrectchosen.setTexture('anscorrectchosen5C')
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