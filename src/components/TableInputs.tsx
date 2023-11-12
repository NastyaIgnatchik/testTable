import React from "react";
import SelectWithButton from "./SelectWithButton";
import {ITableInputs} from "../interfaces/interfaces";
import CountStudents from "./CountStudents";
import Select from "./Select";



const TableInputs = ({
  selectedTeachersForPodgroupsLessons,
  setSelectedTeachersForPodgroupsLessons,
  value,
  countStudents,
  cardDataId,
  index,
  allSelectTeacher,
  setAllSelectTeacher,
  teachers,
  hours,
  isOpenPodgrups,
  setIsOpenPodgrups,
  podgroups,
}: ITableInputs) => {




  return (
    <>
      {cardDataId != 7 &&
        ((cardDataId == 1 && (
          <>
            <SelectWithButton
              setSelectedTeachersForPodgroupsLessons={
                setSelectedTeachersForPodgroupsLessons
              }
              selectedTeachersForPodgroupsLessons={
                selectedTeachersForPodgroupsLessons
              }
              indx={index}
              setAllSelectTeacher={setAllSelectTeacher}
              teachers={teachers}
              disabled={hours == "0" ? true : false}
              isOpenPodgrups={isOpenPodgrups}
              setIsOpenPodgrups={setIsOpenPodgrups}
              podgroups={podgroups}
            />
          </>
        )) ||
          (cardDataId == 6 && (
            <CountStudents
              selectedTeachersForPodgroupsLessons={
                selectedTeachersForPodgroupsLessons
              }
              setSelectedTeachersForPodgroupsLessons={
                setSelectedTeachersForPodgroupsLessons
              }
              count={countStudents}
              disabled={hours == "0" ? true : false}
              isOpenPodgrups={isOpenPodgrups}
              indx={index}
            />
          )) || (
            <>
              <Select
                value={value}
                setSelectedTeachersForPodgroupsLessons={
                  setSelectedTeachersForPodgroupsLessons
                }
                selectedTeachersForPodgroupsLessons={
                  selectedTeachersForPodgroupsLessons
                }
                indx={index}
                allSelectTeacher={allSelectTeacher}
                disabled={hours == "0" ? true : false}
                teachers={teachers}
                isOpenPodgrups={isOpenPodgrups}
                setIsOpenPodgrups={setIsOpenPodgrups}
                podgroups={podgroups}
              />
            </>
          ))}
    </>
  );
};

export default TableInputs;
