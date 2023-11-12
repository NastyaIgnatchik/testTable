import React, { useEffect, useState } from "react";
import PodgroupsMobile from "./PodgroupsMobile";
import {ICustomPodgroups, ISelect, ITeachers} from "../interfaces/interfaces";





const Select = ({
  value,
  selectedTeachersForPodgroupsLessons,
  setSelectedTeachersForPodgroupsLessons,
  indx,
  teachers,
  disabled,
  allSelectTeacher,
  isOpenPodgrups,
  setIsOpenPodgrups,
  podgroups,
}: ISelect) => {
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");

  useEffect(() => {
    setSelectedTeacher("");
  }, [isOpenPodgrups]);

  useEffect(() => {
    if (indx == allSelectTeacher.id) setSelectedTeacher(allSelectTeacher.value);
  }, [allSelectTeacher]);

  useEffect(() => {
    if (
      selectedTeachersForPodgroupsLessons?.length != 0 &&
      selectedTeachersForPodgroupsLessons != undefined &&
      isOpenPodgrups &&
      !disabled
    ) {
      const newArray:ICustomPodgroups[] = [...selectedTeachersForPodgroupsLessons];

      const index = newArray.findIndex((item: ICustomPodgroups) => {
        return item.podgroupId === indx;
      });
      if (index !== -1 && value) {
        newArray[index][value] = selectedTeacher;
        setSelectedTeachersForPodgroupsLessons(newArray );
      }
    } else return;
  }, [selectedTeacher]);

  return (
    <div className="  flex flex-col">
      <PodgroupsMobile
        indx={indx}
        isOpenPodgrups={isOpenPodgrups}
        setIsOpenPodgrups={setIsOpenPodgrups}
        podgroups={podgroups}
      />
      <div className="flex flex-row pl-2 gap-2 py-3 border-solid border-r-2 border-gray-300 md:pr-2">
        <select
          className=" h-10 md:w-full w-[80%]  rounded border-solid border-2 border-gray-300"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedTeacher(e.target.value);
          }}
          value={disabled ? "" : selectedTeacher}
          disabled={disabled}
          defaultValue={""}
        >
          <option value={""} disabled selected>
            Вакансия
          </option>
          {teachers?.map((option: ITeachers) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
