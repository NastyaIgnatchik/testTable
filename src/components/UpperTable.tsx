import React from "react";
import {IUpperTable, IUpperTableData} from "../interfaces/interfaces";



const UpperTable = ({ groupName, studentsNumber, course, semestr }: IUpperTable) => {
  const upperTable = [
    { id: 1, title: "Группа", value: groupName },
    { id: 2, title: "Количество курсантов", value: studentsNumber },
    { id: 3, title: "Курс", value: course },
    { id: 4, title: "Семестр", value: semestr },
  ];
  return (
    <div className=" flex flex-row gap-x-20 flex-wrap pt-2 pb-4">
      {upperTable.map((item: IUpperTableData) => {
        return (
          <div
            className="flex flex-row justify-between w-[80%] md:w-[40%]"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="flex justify-start w-[10%] items-center">
              {item.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpperTable;
