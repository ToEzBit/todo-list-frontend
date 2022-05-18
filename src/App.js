// import TodoInput from "./components/todo-list/TodoInput";
// import TodoList from "./components/todo-list/TodoList";
// import { TodoContextProvider } from "./contexts/TodoContext";
import Header from "./components/layout/Header";
import Router from "./route/Router";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <div className="container max-w-xs pt-5">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
