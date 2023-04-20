import "./styles.css";
import useFetchAPIHook from "./customFetchAPIHook";

export default function App() {
  const api = "https://dummyjson.com/products";
  const { products, isLoading, isError } = useFetchAPIHook(api);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {isError && <p>err</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products &&
        products.map((prod) => {
          return <p key={prod.id}>{prod.title}</p>;
        })
      )}
    </div>
  );
}
