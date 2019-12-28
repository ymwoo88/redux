1. 수정 항목  
js파일에 아래와 같이 import한 것이 있다  
react1.5이상 부터는 사용법이 바뀌어서 내용을 수정 하였다.  
import React, { Component, PropTypes } from 'react';  

[수정]  
npm install --save prop-types 설치하고  
js파일에 아래와 같이 넣는다  
import PropTypes from 'prop-types';  

---------------------------------
2. 수정 항목
제가 놓친건지 아니면 동영상에 빠져있는지 모르겠지만.. createStore 를 사용하려면  redux 패키지 설치가 필요합니다  
 - npm install redux --save  
 - yarn add redux  
위 두가지방법 중 하나로 패키지를 설치해주셔야 하는데 저같은경우 1번으로 패키지를 설치하면 'fsevents' 관련 소스에서 에러가나서 서버실행이 안되더라구요... 1번 설치 후 소스 복구가안되서 저는 프로젝트 새로팠습니다 ㅠㅠ. redux 패키지 설치후 다른 패키지에 영향이 있거나 old 버전으로 패키지 설치가 되는것 같습니다. 1번이 안되시는분들은 2번으로 redux 패키지를 설치해주시면됩니다. 저는 2번으로 잘 되더라구요.  


위와 마찬가지로 다음강좌에서 'react-redux' 가 필요합니다. 설치해주시고 다음강좌로 넘어가시면 편합니다^^  
