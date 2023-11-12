import React from "react";
import PodgroupTitles from "./PodgroupTitles";
import {ITableTitles} from "../interfaces/interfaces";





const TableTitles = ({
  podgroups,
  countPodgroups,
  isOpenPodgrups,
  setIsOpenPodgrups,
}: ITableTitles) => {
  return (
    <div
      className={` hidden md:grid  h-auto  border-b-2  border-solid border-gray-300 min-h-[60px] items-stretch justify-items-stretch text-center border-b-black bg-white ${
        isOpenPodgrups && Number(countPodgroups) > 1
          ? "grid-cols-[2fr_0.5fr_3fr_3fr]"
          : "grid-cols-[2fr_0.5fr_3fr]"
      }`}
    >
      <div className="font-bold border-r-2 border-solid border-gray-300  flex items-center justify-center">
        <p>Занятия</p>
      </div>
      <div className="font-bold border-r-2 border-solid border-gray-300 flex items-center justify-center">
        <p>Часы</p>
      </div>

      <PodgroupTitles
        isOpenPodgrups={isOpenPodgrups}
        setIsOpenPodgrups={setIsOpenPodgrups}
        podgroups={podgroups}
      />
    </div>
  );
};

export default TableTitles;
