import { useLoaderData } from "react-router";
import Banner from "../../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  const data = useLoaderData();
  // console.log(data)

  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
