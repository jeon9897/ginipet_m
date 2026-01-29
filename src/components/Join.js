import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Join(props) {
  // 1. 변수선언
  const [form, setForm] = useState({
    username:'', //1. 아이디
    password:'', //2. 패스워드
    password2:'', //3. 패스워드2
    email:'', //4. 이메일
    tel:'', //5. 전화번호
  });

  //회원가입이 실패하는 경우가 있다면 에러출력하기
  const [message, setMessage] = useState(''); //메세지 출력
  const [error, setError] = useState(false); //true, false값으로 색상을 구분

  //2. input 입력한 값 저장하기
  const handleChange=(e)=>{
    setForm({
      ...form, //기존 폼데이터에 이어서 저장
      [e.target.name]:e.target.value //사용자가 입력한 데이터를 각각 저장
    });

    //데이터값 없는 경우
    setMessage('');//에러 초기화
    setError(false);
  }

  //3. url 주소 관리 = 페이지 이동
  const navigate = useNavigate();

  //4. 아이디 중복체크 기능
  const checkUsername=()=>{
    axios.post('/check-username', {
      username:form.username
    })
    .then(res=>{
      if(res.data.exists){
        setMessage('이미 사용중이 아이디입니다. ');
        setError(true);
      }else{
        setMessage('사용 가능한 아이디입니다.');
        setError(false);
      }
    });
  };

  //5. 회원가입 버튼 클릭시 해당 값들을 서버측으로 전송함
  const handleSubmit = (e) => {
    //사용자가 입력한 data를 backend서버에 post방식으로 전송
    e.preventDefault(); //새로고침 방지

    //비밀번호, 비밀번호2 일치가 되는지 확인
    if(form.password !== form.password2){
      setMessage('비밀번호가 일치하지 않습니다.');
      setError(true);
      return;
    }

    //비밀번호가 일치하면 서버측으로 내용을 전송
    //비밀번호가 일치하면 서버측으로 내용을 전송
    //axios.post('http://localhost:9070/register', form)
    axios.post('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/register', form)
    .then(()=>{ //전송 성공시
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/login'); // 로그인 페이지 이동
    }) 
    .catch(err=>{ //실패시
      console.log(err); //콘솔모드에 에러출력하고
      setMessage('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류입니다.');
      setError(true);
    });
  };

  return (
    <main>
      <section className="form_wrap">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} >
          <p>
            <label htmlFor="username">아이디 : </label>
            <input 
              type="text" 
              id="username"
              name="username"
              className="input_box"
              placeholder="아이디 입력"
              value={form.username}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={checkUsername} className="btn btn_confirm">아이디 중복확인</button>

          </p>
          {/* 회원가입이 실패할 경우 나오는 문구 */}
          {/* {error&&<p style={{color:'#f00'}}>{error}</p>} */}

          {/* 조건부 렌더링   변수값&&참인값  */}
          {/* 삼항조건연산자  변수값?참인값;거짓인값  */}
          {/* 사용가능한 id는 초록색, 사용불가능한 id는 빨강 */}

          {error?<p style={{color:'#f00',textAlign:'center'}}>{message}</p>:<p style={{color:'rgba(0, 102, 255, 1)',textAlign:'center'}}>{message}</p>}

          <p>
            <label htmlFor="password">패스워드 : </label>
            <input 
              type="password" 
              id="password"
              name="password"
              className="input_box"
              placeholder="패스워드 입력"
              value={form.password}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="password2">패스워드 확인 : </label>
            <input 
              type="password"
              id="password2"
              name="password2"
              className="input_box"
              placeholder="패스워드 확인"
              value={form.password2}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="email">이메일 주소 : </label>
            <input 
              type="email" 
              id="email"
              name="email"
              className="input_box"
              placeholder="id@domain.co.kr or com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="tel">전화번호 : </label>
            <input 
              type="tel" 
              id="tel"
              name="tel"
              className="input_box"
              placeholder="000-0000-0000"
              value={form.tel}
              onChange={handleChange}
              required
            />
          </p>
          <p id="agree_box" >
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.</label>
          </p>
          <p><button type="submit" className="btn btn_submit">회원가입</button></p>
        </form>
      </section>
    </main>
  );
}


export default Join;


