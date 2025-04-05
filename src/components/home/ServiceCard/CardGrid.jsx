import { useNavigate } from "react-router-dom";

function CardGrid({ service, id }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/servicies/${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  return (
    <div className="relative flex flex-col items-center rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-500">
      <div className="relative w-full group">
        <img
          src={service.image}
          alt="Service"
          className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer shadow-md"
        />
      </div>

      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full shadow-sm">
        {service.title}
      </p>
    </div>
  );
}

export default CardGrid;
