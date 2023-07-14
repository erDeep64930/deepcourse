import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("liked removed deepak");
    } else {
      // pahle se liked ni hai ye course
      // insert karna hai liked course me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty pahle se
        setLikedCourses((prev) => [...prev, course.id]);
        toast.success("Liked successfully");
      }
    }
  };
  return (
    <div className="w-[300px] bg-gray-900 rounded-md overflow-hidden bg-opacity-50 ">
      <div className="relative">
        <img src={course.image.url} />
        <button
          onClick={clickHandler}
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center"
        >
          {likedCourses.includes(course.id) ? (
            <FcLikePlaceholder fontSize="1.75rem" />
          ) : (
            <FcLike fontSize="1.75rem" />
          )}
        </button>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ?(course.description.substr(0, 100) + "...") 
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
