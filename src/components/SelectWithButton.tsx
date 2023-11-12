import React, { useEffect, useState} from "react";
import { BsFilter } from "react-icons/bs";
import PodgroupsMobile from "./PodgroupsMobile";
import {ICustomPodgroups, ISelectWithButton, ITeachers} from "../interfaces/interfaces";





const SelectWithButton = ({
  setIsOpenPodgrups,
  isOpenPodgrups,
  podgroups,
  indx,
  teachers,
  setAllSelectTeacher,
  disabled,
  setSelectedTeachersForPodgroupsLessons,
  selectedTeachersForPodgroupsLessons,
}: ISelectWithButton) => {
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');

  useEffect(() => {
    setSelectedTeacher("");
  }, [isOpenPodgrups]);

  useEffect(() => {
    if (
      selectedTeachersForPodgroupsLessons?.length != 0 &&
      selectedTeachersForPodgroupsLessons != undefined &&
      isOpenPodgrups &&
      !disabled
    ) {
      const newArray = [...selectedTeachersForPodgroupsLessons];

      const index = newArray?.findIndex((item: ICustomPodgroups) => {
        return item.podgroupId === indx;
      });
      if (index !== -1) {
        newArray[index].lectureTeacher = selectedTeacher;
        setSelectedTeachersForPodgroupsLessons(newArray);
      }
    } else return;
  }, [selectedTeacher]);

  return (
    <div className=" flex flex-col">
      <PodgroupsMobile
        indx={indx}
        isOpenPodgrups={isOpenPodgrups}
        setIsOpenPodgrups={setIsOpenPodgrups}
        podgroups={podgroups}
      />
      <div className="flex flex-row pl-2 gap-2 py-3 border-solid border-r-2 border-gray-300 md:pr-2">
        <select
          className="  h-10 md:w-full  w-[80%] rounded border-solid border-2 border-gray-300"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedTeacher(e.target.value);
          }}
          value={disabled ? "" : selectedTeacher}
          disabled={disabled}
        >
          <option value="" disabled selected>
            Вакансия
          </option>
          {teachers?.map((option:ITeachers) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>

        <button
          className=" bg-blue-800 px-2 rounded text-lg text-white aspect-square flex justify-center items-center"
          onClick={() => {
            setAllSelectTeacher({ id: indx, value: selectedTeacher });
          }}
        >
          <BsFilter />
        </button>
      </div>
    </div>
  );
};

export default SelectWithButton;
