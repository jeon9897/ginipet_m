import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  // 1. 변수선언과 값 설정하기
  const [form, setForm] = useState({  //값이 여러개일 경우 중괄호
    username:'', //아이디 저장
    password:''  //패스워드 저장
  });

  const [error, setError] = useState('');  //값이 1개일 경우 소괄호로...
  const navigate = useNavigate(); //url주소 이동

  //2. 입력폼에 입력시 실행되는 함수
  const handleChange=(e)=>{ //아이디, 패스워드 입력하면
    setForm({ 
      ...form, //기존 객체에 추가하여 데이터 입력
      [e.target.name]:e.target.value //사용자가 입력한 것을
    });

    setError(''); //에러 초기화
  }

  //3. 로그인버튼 클릭시 실행되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault(); //새로고침 방지

    //백엔드 서버에 url주소 form데이터를 넘긴다.
    //axios.post('http://localhost:9070/login', form)
    axios.post('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/ginipet_login', form)
      .then(res=>{ //성공시 작업
        //JWT 토근 저장
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', form.username); //사용자 아이디 저장

        alert('로그인 성공 메인페이지로 이동합니다.');
        navigate('/'); //메인페이지 경로로 페이지 이동
      })
      .catch(()=>{ //실패시 작업
        setError('로그인 실패 : 아이디 또는 비밀번호를 확인하세요.');
      });
  };

  return (
    <main>
      <section className="form_wrap">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <p className="radio_group">
            <input type="radio" id="member" name="memberGroup" />
            <label htmlFor="member">회원</label>  
            <input type="radio" id="nomember" name="memberGroup" />
            <label htmlFor="nomember">비회원</label>  
          </p>
          <p>
            <label htmlFor="">아이디</label>
            <input 
              type="text"
              id="username"
              name="username"
              className="input_box"
              placeholder="아이디"
              onChange={handleChange}
              value={form.username}
              required  
            />
          </p>
          <p>
            <label htmlFor="password">패스워드</label>
            <input 
              type="password" 
              id="password"
              name="password"
              className="input_box"
              onChange={handleChange}
              value={form.password}
              placeholder="패스워드"
              required
            />
          </p>
          <p id="id_save">
            <input type="checkbox" id="check_id" />
            <label htmlFor="check_id">아이디 저장</label>
          </p>

          <p>
            {/* <input type="submit" value="로그인" /> */}
            <button type="submit" className="btn btn_submit">로그인</button>

            {/* 
              button 회원가입 - 확장 가능한 버튼, 문자, 이미지, 아이콘, html요소 모두 사용이 가능하여 자유롭게 css로 서식이 변경 가능함. 스타일 적용이 쉬워 리액트에서 주로 많이 사용함.

              input type="submit" - 내용을 단순하게 전송하기 위한 목적, 버튼안에 텍스트만 들어가며 아이콘, 이미지, 로딩바 적용이 쉽지 않음
            */}
          </p>
          <p className="btn-group">
            <Link to="/id_search">아이디찾기</Link> &#10072; 
            <Link to="/pw_search">비번찾기</Link> &#10072; 
            <Link to='/join'>회원가입</Link>
          </p>

          {/* 로그인 실패일 경우 조건부 렌더링 공식에 의해 에러 표시되도록 함. */}
          {error&&<p style={{color:'#f00'}}>{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default Login;
