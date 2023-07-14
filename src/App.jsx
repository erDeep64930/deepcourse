import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      console.log(output);
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong deepak");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-black/20">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
