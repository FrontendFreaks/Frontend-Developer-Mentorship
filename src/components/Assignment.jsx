const Assignment = ({ number, heading, problem, link, status, onUpdate }) => {
  const updateCheckboxHandler = () => {
    onUpdate(number);
  };
  return (
    <div className="p-4 ">
      <div className="font-bold text-xl md:text-2xl flex flex-row items-start md:items-end justify-between space-x-3 rounded bg-[#0c0f0a] p-3">
        <div className="flex flex-row ">
          <span className="text-2xl text-[#687eff]  font-bold mx-1 ">
            {number}
          </span>
          <h1 className="text-white uppercase text-md md:text-2xl">
            {" "}
            {heading}{" "}
          </h1>
          {link && (
            <div>
              <a
                href={link}
                className="text-[#687eff] text-sm uppercase font-bold mx-3"
                target="_blank"
                rel="noreferrer"
              >
                PREVIEW LINK
              </a>
            </div>
          )}
        </div>

        <div>
          <input
            type="checkbox"
            value={status}
            id={`status ${number}`}
            onChange={updateCheckboxHandler}
            checked={status}
            className="h-5 w-5 text-red-400 p-2 cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-[#252422] px-3 py-5 rounded">
        <p className="text-md text-[#767676]">{problem}</p>
      </div>
    </div>
  );
};

export default Assignment;
