# React-Router-DOM

```plaintext
npm install react-router-dom
```

```
//...index.js

...
import { BrowserRouter } from "react-router-dom";

...
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

- react-router-dom에서 BrowserRouter를 가져와 App을 감싸준다.

```
//...App.js

...
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
    </Routes>
  )
}
```

- react-router-dom에서 Routes와 Route를 가져온다.
  - Route는 반드시 Routes의 자식 컴포넌트로 감싸져 있어야한다.
  - Route의 path는 상대경로, element props에는 경로에 해당하는 컴포너트를 넣어야 한다.

```
import { Link } from "react-router-dom";

function Home() {
  return <Link to="/about">About</Link>
}

export default Home;
```

- React에서는 a 태그 대신 react-router-dom의 Link 혹은 NavLink를 사용한다.
- a 태그는 새로고침을 일으키기에 어울리지 않는다.

```
...
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/about")
  }

  return <button onClick={onClick}>소개로 가기</button>
}
...
```

- Link 대신에 useNavigate 함수를 사용해서 이동할 수 있다.
- useNavigate 함수의 첫 번째 인자는 가려고 하는 경로를 뜻하고 두 번째 인자는 함수의 옵션을 가진다.
  - 만약 뒤로 가고 싶으면 navigate(-1) 을 하면 된다.

```
//App.js
function App() {
  return (
    <Routes>
      <Route path="movie" element={<Movie />}>
      <Route path="movie/:movieId" element={<MovieDetail />} />
    </Routes>
  )
}

---

//MovieDetail.js
...
import { useParams } = "react-router-dom";

function MovieDetail() {
  const params = useParams();
  return (
    <div>{params.movieId}</div>
  )
}
```

- useParams 함수로 url 파라미터 값을 가져와서 활용 할 수 있다.

[React-Complete-Course](https://www.udemy.com/course/best-react/)
