import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import {IPodgroupsMobile} from "../interfaces/interfaces";





const PodgroupsMobile = ({
  isOpenPodgrups,
  podgroups,
  indx,
  setIsOpenPodgrups,
}: IPodgroupsMobile) => {
  return (
    <>
      <div className="  md:hidden bg-blue-200 h-10  font-bold border-r-2 border-solid border-gray-300 flex items-center justify-center">
        <p>{isOpenPodgrups ? `Подгруппа${indx + 1}` : "Преподаватель"}</p>
        <button className="text-lg flex justify-center items-center font-lg cursor-pointer">
          {isOpenPodgrups && indx == podgroups.length - 1 ? (
            <AiFillDelete onClick={() => setIsOpenPodgrups(false)} />
          ) : (
            !isOpenPodgrups && (
              <BsPlusLg onClick={() => setIsOpenPodgrups(true)} />
            )
          )}
        </button>
      </div>
    </>
  );
};

export default PodgroupsMobile;
