import HanumanJi from '../assets/Lord-Hanuman.jpg';

const Posts = () => {
  return (
    <section className="mt-10 mx-auto ">
      <div className="flex justify-center flex-col items-center w-[83%] sm:w-[100%] ml-[3.9rem] md:ml-12 lg:ml-0">
        <div>
          <img
            src={HanumanJi}
            alt=""
            className=" bg-slate-300  md:w-[400px] h-[600px] rounded-md"
          />
          <div className="flex justify-around  bg-slate-100 py-4 ">
            <button type="button">like</button>
            <button type="button">comment</button>
            <button type="button">share</button>
          </div>
        </div>
      </div>
      <hr className="bg-gray-200 h-1 my-10" />
    </section>
  );
};

export default Posts;
