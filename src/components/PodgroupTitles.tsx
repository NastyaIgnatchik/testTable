import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import {IPodgroups, IPodgroupTitles} from "../interfaces/interfaces";



const PodgroupTitles = ({
  isOpenPodgrups,
  setIsOpenPodgrups,
  podgroups,
}: IPodgroupTitles) => {
  return (
    <>
      {!isOpenPodgrups ? (
        <div className="bg-blue-200 md:bg-white  font-bold border-r-2 border-solid border-gray-300 flex items-center justify-center">
          <p>Преподаватель</p>
          <button className="text-lg flex justify-center items-center font-lg cursor-pointer">
            <BsPlusLg onClick={() => setIsOpenPodgrups(true)} />
          </button>
        </div>
      ) : (
        podgroups.map((item: IPodgroups, index: number) => (
          <div
            key={index}
            className="bg-blue-200 md:bg-white font-bold flex items-center justify-center gap-x-1 border-r-2 border-solid border-gray-300"
          >
            <p>Подгруппа</p>
            <button className="text-lg flex justify-center items-center font-lg cursor-pointer">
              {index == podgroups.length - 1 && (
                <AiFillDelete onClick={() => setIsOpenPodgrups(false)} />
              )}
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default PodgroupTitles;
