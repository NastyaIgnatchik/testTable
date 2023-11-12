import React from "react";
import TableLessonsAndHoursMobile from "./TableLessonsAndHoursMobile";
import {ITableLessonsTypeAndHours} from "../interfaces/interfaces";

const TableLessonsTypeAndHours = ({
  id,
  addInfo,
  lessonType,
  hours,
}: ITableLessonsTypeAndHours) => {
  return (
    <>
      <div
        className={` hidden border-r-2 border-solid border-gray-300 md:flex md:items-center md:justify-center ${
          addInfo ? "flex-col" : "flex-row"
        }`}
      >
        <p>{lessonType}</p>
        {addInfo && <small>{addInfo}</small>}
      </div>

      <div className=" hidden border-r-2 border-solid border-gray-300 md:flex md:items-center md:justify-center flex-col">
        <p>{hours}</p>
      </div>

      <TableLessonsAndHoursMobile
        id={id}
        addInfo={addInfo}
        lessonType={lessonType}
        hours={hours}
      />
    </>
  );
};

export default TableLessonsTypeAndHours;
