import React from 'react';
import enfj from '../static/img/mbti/enfj.png'
import enfp from '../static/img/mbti/enfp.png'
import entj from '../static/img/mbti/entj.png'
import entp from '../static/img/mbti/entp.png'
import esfj from '../static/img/mbti/esfj.png'
import esfp from '../static/img/mbti/esfp.png'
import estj from '../static/img/mbti/estj.png'
import estp from '../static/img/mbti/estp.png'
import infj from '../static/img/mbti/infj.png'
import infp from '../static/img/mbti/infp.png'
import intj from '../static/img/mbti/intj.png'
import intp from '../static/img/mbti/intp.png'
import isfj from '../static/img/mbti/isfj.png'
import isfp from '../static/img/mbti/isfp.png'
import istj from '../static/img/mbti/istj.png'
import istp from '../static/img/mbti/istp.png'

function ResultComponent() {
    var mbti = "";
    var storage = JSON.parse(window.localStorage.getItem('resultData'));

    if(storage['EI'] >=  2) mbti = 'e';
    else mbti = 'i';
    if(storage['SN'] >=  2) mbti += 's';
    else mbti += 'n';
    if(storage['TF'] >=  2) mbti += 't';
    else mbti += 'f';
    if(storage['JP'] >=  2) mbti += 'j';
    else mbti += 'p';

    if(mbti == "enfj"){
        return(
            <div  className='resultDiv' >
                <img src={enfj} className="resultImg"/>
            </div>
        ) ;
    } else if(mbti == "enfp"){
        return(
            <div  className='resultDiv' >
                <img src={enfp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "entj"){
        return(
            <div  className='resultDiv' >
                <img src={entj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "entp"){
        return(
            <div  className='resultDiv' >
                <img src={entp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "esfj"){
        return(
            <div  className='resultDiv' >
                <img src={esfj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "esfp"){
        return(
            <div  className='resultDiv' >
                <img src={esfp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "estj"){
        return(
            <div  className='resultDiv' >
                <img src={estj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "estp"){
        return(
            <div  className='resultDiv' >
                <img src={estp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "infj"){
        return(
            <div  className='resultDiv' >
                <img src={infj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "infp"){
        return(
            <div  className='resultDiv' >
                <img src={infp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "intj"){
        return(
            <div  className='resultDiv' >
                <img src={intj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "intp"){
        return(
            <div  className='resultDiv' >
                <img src={intp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "isfj"){
        return(
            <div  className='resultDiv' >
                <img src={isfj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "isfp"){
        return(
            <div  className='resultDiv' >
                <img src={isfp} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "istj"){
        return(
            <div  className='resultDiv' >
                <img src={istj} className="resultImg"/>
            </div>
        ) ;
    }
    else if(mbti == "istp"){
        return(
            <div  className='resultDiv' >
                <img src={istp} className="resultImg"/>
            </div>
        ) ;
    }
}

export default ResultComponent;