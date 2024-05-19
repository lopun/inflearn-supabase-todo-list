import AddTodoButton from "components/add-todo-button";
import SearchComponent from "components/search-component";
import TodoList from "components/todo-list";

export default function Home() {
  return (
    <main className="w-2/3 flex flex-col items-center mx-auto p-8 gap-4">
      {/* TODO List 제목 */}
      <h1>TODO List</h1>

      {/* TODO List */}

      <TodoList />

      {/* Add TODO 버튼 */}
      <AddTodoButton />
    </main>
  );
}
