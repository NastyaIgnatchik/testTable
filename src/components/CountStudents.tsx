import React, { useEffect, useState } from "react";
import {ICountStudents, ICustomPodgroups} from "../interfaces/interfaces";




const CountStudents = ({
  indx,
  count,
  selectedTeachersForPodgroupsLessons,
  setSelectedTeachersForPodgroupsLessons,
  isOpenPodgrups,
  disabled,
}: ICountStudents) => {
  const [countStudent, setCountStudent] = useState<string>(count);

  useEffect(() => {
    if (
      selectedTeachersForPodgroupsLessons?.length != 0 &&
      selectedTeachersForPodgroupsLessons != undefined &&
      isOpenPodgrups &&
      !disabled
    ) {
      const newArray = [...selectedTeachersForPodgroupsLessons];

      const index = newArray.findIndex((item: ICustomPodgroups) => {
        return item.podgroupId === indx;
      });
      if (index !== -1) {
        newArray[index].countStudents = countStudent;
        setSelectedTeachersForPodgroupsLessons(newArray);
      }
    } else return;
  }, [countStudent]);
  return (
    <div className=" md:flex md:justify-center md:border-solid border-gray-300 border-r-2">
      <p className="  md:hidden font-bold">{`Подгруппа ${indx + 1}`}</p>
      <input
        className=" bg-blue-50 text-center w-full"
        value={countStudent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCountStudent(e.target.value)
        }
      />
    </div>
  );
};

export default CountStudents;
