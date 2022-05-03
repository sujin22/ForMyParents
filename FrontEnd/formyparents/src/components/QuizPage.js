import React from "react";
import { Redirect } from "react-router-dom";
import '../css/style.css';
import styled from "styled-components";


class QuizPage extends React.Component{
    state = {
        quizData:[
            {
                "num": 1,
                "quiz": "선물을 드렸을 때,\n 부모님의 반응은?",
                "answer1": "카톡프로필 사진으로 해두거나,\n 단체카톡방에 자랑한다",
                "answer2": "내심 흐뭇해하시고 집에 아껴둔다.",
                "mbtiType": "EI"
            },{
                "num": 2,
                "quiz": "우리 부모님은\n다양한 모임에 참여하시고,\n 그것을 즐긴다.",
                "answer1": "그렇다.",
                "answer2": "아니다.",
                "mbtiType": "EI"
            },{
                "num": 3,
                "quiz": "매우 화가 나는 일이 생겼을 때,\n 우리 부모님은?",
                "answer1": "여기저기 이야기하며 푼다",
                "answer2": "혼자 추스린다",
                "mbtiType": "EI"
            },{
                "num": 4,
                "quiz": "엄마(아빠)!\n 내가 갑자기 바퀴벌레가 되면\n 어떡할거야?",
                "answer1": "너가 왜 바퀴벌레가 돼?",
                "answer2": "내다버려야지",
                "mbtiType": "SN"
            },{
                "num": 5,
                "quiz": "부모님과 진지한 얘기를 할 때\n 주로 듣는 조언은?",
                "answer1": "\"돈은 이렇게 모아야한다\", \"청약 가입해라\" 등 실질적 조언",
                "answer2": "\"현명한 사람이 되어라\", \"네가 베푼 친절은 언젠가 너에게 돌아온다\" 등 경험적 조언",
                "mbtiType": "SN"
            },{
                "num": 6,
                "quiz": "나에게 음식을 권할 때,\n 우리 부모님은?",
                "answer1": "\“식감은 오독오독하고, 맛은..\”\n 음식에 대한 설명을 자세히 한다.",
                "answer2": "\“일단 먹어봐, 맛 없으면 뱉어\”\n 맛있을거라고 확신하며 소개한다.",
                "mbtiType": "SN"
            },{
                "num": 7,
                "quiz": "내가 시험을 망치고 울고 있다\n 부모님의 반응은?",
                "answer1": "너가 못해놓고 왜 울어? 울면 뭐가 해결돼?",
                "answer2": "너무 속상해하지 말고, 다음에 더 잘하면 되지. 기분 전환하러 가자",
                "mbtiType": "TF"
            },{
                "num": 8,
                "quiz": "몸이 찌뿌둥하다고 하실 때,\n 더 좋아하시는 선물은?",
                "answer1": "전신마사지 이용권",
                "answer2": "애정이 담긴 안마",
                "mbtiType": "TF"
            },{
                "num": 9,
                "quiz": "명절에\n 부모님이 더 화를 내시는 상황은?",
                "answer1": "음식 준비를 돕다가 다 부친 전 위에 음료를 쏟아 못 쓰게 되었다.",
                "answer2": "온 가족이 모였는데 내가 핸드폰만 보고있다.",
                "mbtiType": "TF"
            },{
                "num": 10,
                "quiz": "가족 여행을 갈 때,\n숙소, 음식, 관광지 모든 것을\n다 정해놓고 출발한다",
                "answer1": "그렇다.",
                "answer2": "아니다.",
                "mbtiType": "JP"
            },{
                "num": 11,
                "quiz": "우리 부모님의 은퇴 계획은?",
                "answer1": "골프 치러 다니면서 토마토 키우고,,,",
                "answer2": "여유롭게 지내야지~",
                "mbtiType": "JP"
            },{
                "num": 12,
                "quiz": "가족여행에 과일을 싸 가려고 한다.\n 우리 부모님은?",
                "answer1": "\“딸 2개, 아들 1개,,\”\n 구체적으로 챙긴다.",
                "answer2": "\“일단 다 가져가고 남으면 가져오지 뭐\”\n 손에 잡히는 대로 준비한다.",
                "mbtiType": "JP"
            }
        ],
        quizNum: 1,
        EI: 0,
        SN: 0,
        TF: 0,
        JP: 0,
        isFinished: false,
        bgColor1: "",
        bgColor2: ""
    };

    chooseUp = () => {
        const { quizNum, quizData, EI, SN, TF, JP, isFinished} = this.state;
    
        const mbtiTypeUse = quizData[quizNum - 1].mbtiType;
    
        switch(mbtiTypeUse){
            case "EI":
                this.setState({EI: EI+1});
                break;
            case "SN":
                this.setState({SN: SN+1});
                break;
            case "TF":
                this.setState({TF: TF+1});
                break;
            case "JP":
                this.setState({JP: JP+1});
                break;
        }

        this.setState({quizNum: quizNum+1});
        this.setState({isFinished: quizNum-1===quizData.length});

        console.log("mbtiType? "+ mbtiTypeUse);
        console.log("isFinished: "+ isFinished);
      };
      onMouseDown =(num) =>{
          if(num == 1)  this.setState({bgColor1: "#FFC28A"});
          else this.setState({bgColor2: "#FFC28A"});
      }

      onMouseUp = (num) =>{
        if(num == 1){
            this.setState({bgColor1: "white"});
            this.chooseUp();
        }else {
            this.setState({bgColor2: "white"});
            this.chooseDown();
        }
      }
    
    chooseDown = () => {
        const { quizNum, quizData, isFinished } = this.state;
        
        this.setState({quizNum: quizNum+1});
        this.setState({isFinished: quizNum-1===quizData.length});
        console.log("isFinished: "+ isFinished);
    };
    

    render(){
        const {quizData, quizNum, EI, SN, TF, JP} = this.state;
        const totalQuestionCnt = quizData.length;
        const progress = (quizNum/totalQuestionCnt) * 100;
        const isFinished = quizNum-1 === totalQuestionCnt;
        
        console.log("QuizNum: "+quizNum);
        console.log("EI"+ EI);
        console.log("SN"+ SN);
        console.log("TF"+ TF);
        console.log("JP"+ JP);
        console.log("isFinished: "+ isFinished);

        if(isFinished){
            window.localStorage.setItem('resultData', JSON.stringify(this.state));
            return <Redirect to= {'/result'}/>
        }

        return(
            <article className="question container">
                <div className="progressLabel">
                    [{quizNum}/{totalQuestionCnt}]
                </div>
                <ProgressBar>
                    <HighLight width={progress+"%"}></HighLight>
                </ProgressBar>
                <div name='quiz_number' className="question-num">Question {quizNum}</div>

                <h2 id="title" className="question">
                {quizData[quizNum-1].quiz}
                </h2>
                <div className="questionButtons">
                    <button className="button"
                        // onClick={this.chooseUp} 
                        onTouchStart={()=>this.onMouseDown(1)}
                        onTouchEnd={()=>this.onMouseUp(1)}
                        style={{backgroundColor: this.state.bgColor1}}>
                        {quizData[quizNum-1].answer1}
                    </button>
                    <button className="button"
                        // onClick={this.chooseDown} 
                        onTouchStart={()=>this.onMouseDown(2)}
                        onTouchEnd={()=>this.onMouseUp(2)}
                        style={{backgroundColor: this.state.bgColor2}}>
                        {quizData[quizNum-1].answer2}
                    </button>
                </div>
            </article>

        );
    }
}

const ProgressBar = styled.div`
    margin-top: 8px;
    margin-bottom: 30px;
    background-color: #eee;
    width: 100%;
    height: 10px;
    border: 1px solid black;
    border-radius: 15px;
`;


const HighLight = styled.div`
    background-color: #FFC28A;
    transition: 1s;
    width: ${(props) => props.width};
    height: 8px;
    border: 1px solid black;
    border-radius: 15px;
`;
export default QuizPage;