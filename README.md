# Redux-Basics

- npm install react-redux @reduxjs/toolkit

```
// ...index.js

import {Provider} from "react-redux;
import store from "./store/index";

...
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

```

```
// ...src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
...

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice }
});

export default store;
```

- 스토어는 프로젝트 당 하나만 가진다.
- `@reduxjs/toolkit`의 configureStore로 여러 리듀서들을 한번에 컨트롤 할 수 있다.

```
// ...src/store/authSlice.js

import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
```

- createSlice 함수를 redux toolkit에서 사용
- name, initialState, reducers 프로퍼티를 가진다.
- reducers들을 authActions라는 변수에 담음

```
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    ...
    <button onClick={logoutHandler}>Logout</button>
  )
}
```

- react-redux에서 useSelector 함수와 useDispatch 함수를 가져와서 사용함
- useSelector로 state를 읽고 조회함.
- useDispatch로 action을 발생시킨다.

[React Complete Guid with Redux and Typescript](https://www.udemy.com/course/best-react/)
