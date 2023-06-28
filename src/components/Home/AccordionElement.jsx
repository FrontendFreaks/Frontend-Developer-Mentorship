import { BiPlus, BiMinus } from "react-icons/bi";
import { useRef } from "react";
import { useEffect } from "react";

const AccordionElement = ({ accordion, onToggle }) => {
  const contentHeight = useRef(null);

  function toggleAcc() {
    onToggle(accordion.id);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAcc();
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (contentHeight.current) {
      contentHeight.current.style.maxHeight = accordion.open
        ? `${contentHeight.current.scrollHeight}px`
        : "0px";
    }
  }, [accordion.open]);

  return (
    <div className="flex flex-col space-x-1 items-start justify-between p-2 w-[300] md:w-[550px] bg-[#161616] rounded">
      <div
        onClick={toggleAcc}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={accordion.open}
        aria-controls={`accordion-content-${accordion.id}`}
        className={`flex flex-row items-center p-1 justify-between w-full text-md min-w-[300px] md:min-w-[550px] h-12 cursor-pointer px-4 py-1 ${accordion.open ? "font-bold" : ""
          }`}
      >
        <p className="text-lg cursor-pointer text-white">
          {accordion.question}
        </p>
        <div>
          {accordion.open ? (
            <BiMinus size={30} color="#687eff" />
          ) : (
            <BiPlus size={30} color="#687eff" />
          )}
        </div>
      </div>
      <div
        className="overflow-hidden transition-height duration-300"
        ref={contentHeight}
      >
        <div className="scale-in-ver-top text-md py-2 px-3 text-white">
          {accordion.answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionElement;
