import React, { useEffect, useState } from "react";
import UpperTable from "./UpperTable";
import TableTitles from "./TableTitles";
import TableLessonsTypeAndHours from "./TableLessonsTypeAndHours";
import TableInputs from "./TableInputs";
import axios from "axios";
import {
  IAllSelectTeacher,
   ICardProps,
  ICardsData,
  ICustomPodgroups,
  IPodgroups,
} from "../interfaces/interfaces";




const Card = ({  card, teachers, countPodgroups, podgroups }:ICardProps) => {
  const [isOpenPodgrups, setIsOpenPodgrups] = useState<boolean>(false);

  const [allSelectTeacher, setAllSelectTeacher] = useState<IAllSelectTeacher >({id:0,value:''});

  const [
    selectedTeachersForPodgroupsLessons,
    setSelectedTeachersForPodgroupsLessons,
  ] = useState<ICustomPodgroups[]>([]);

  const data = [
    {
      id: 1,
      title: "Лекции",
      hours: card.lecturesHours,
      value: "lectureTeacher",
    },
    {
      id: 2,
      title: "Лабораторные работы",
      hours: card.laboratoryHours,
      value: "laboratoryTeacher",
    },
    {
      id: 3,
      title: "Практические",
      hours: card.practicHours,
      value: "practiceTeacher",
    },
    {
      id: 4,
      title: "Семинарские",
      hours: card.seminarHours,
      value: "seminarTeacher",
    },
    {
      id: card.exam || card.offset ? 5 : 0,
      title: card.exam ? "Экзамен" : "Зачет",
      value: card.exam ? "examTeacher" : "offsetTeacher",
    },
    {
      id: isOpenPodgrups ? 6 : 0,
      title: "Количество человек",
    },
    {
      id: 7,
      title: "Примечание",
      addInfo: "(для составления расписания)",
    },
  ];



  useEffect(() => {
    setSelectedTeachersForPodgroupsLessons(
      podgroups?.map((podgroup: IPodgroups, index: number) => ({
        ...podgroup,
        podgroupId: index,
      }))
    );
  }, [podgroups, isOpenPodgrups]);

  

  async function pushData() {
 try{
   const customData = {
     ...card,
     podgroups:
         selectedTeachersForPodgroupsLessons.map((item:ICustomPodgroups,ind:number)=> {
           return {
             ...card.podgroups[item.podgroupId],
             examTeacher: item.examTeacher,
             laboratoryTeacher:item.laboratoryTeacher,
             lectureTeacher:item.lectureTeacher,
             countStudents:item.countStudents,
             seminarTeacher:item.seminarTeacher,
             practiceTeacher:item.practiceTeacher,
             offsetTeacher:item.offsetTeacher
           }
         })}

   await axios.post("https://bgaa.by/test_result",
       customData
   );
 }catch (e){
   console.log(e)
 }

  }

  return (
    <div className="w-[90%] m-auto border-solid border-gray-300 border-2 p-4  mb-3.5 ">
      <div className="grid  w-full h-auto  ">
        <h2 className="flex flex-col md:h-10 justify-center h-auto min-h-10 items-center bg-blue-100 text-blue-950 font-bold rounded-t-sm border-b-2 border-solid border-gray-300">
          {card.subjectName}
        </h2>

        <UpperTable
          groupName={card.groupName}
          studentsNumber={card.studentsNumber}
          course={card.course}
          semestr={card.semestr}
        />
      </div>
      <hr className="color-gray-300 w-full  h-4 border-t-2" />

      <div className=" bg-blue-50  border-solid  border-gray-300 border-2 border-b-0 border-r-0 ">
        <TableTitles
          countPodgroups={countPodgroups}
          isOpenPodgrups={isOpenPodgrups}
          setIsOpenPodgrups={setIsOpenPodgrups}
          podgroups={podgroups}
        />

        {data.map((element: ICardsData) => {
          return (
            element.id != 0 && (
              <div
                className={`cardRow  ${
                  Number(countPodgroups) > 1
                    ? isOpenPodgrups && element.id != 7
                      ? `md:grid-cols-[2fr_0.5fr_3fr_3fr]`
                      : `${
                          element.id == 7 && isOpenPodgrups
                            ? "  md:grid-cols-[2fr_0.5fr_6fr]"
                            : "md:grid-cols-[2fr_0.5fr_3fr]"
                        }`
                    : "md:grid-cols-[2fr_0.5fr_3fr]"
                } `}
                key={element.id}
              >
                <TableLessonsTypeAndHours
                  id={element.id}
                  addInfo={element.addInfo}
                  lessonType={element.title}
                  hours={element.hours}
                />

                {element.id == 7 && (
                  <div className="border-r-2 border-solid border-gray-300 flex items-stretch justify-stretch  p-2 gap-x-1">
                    <textarea
                      className={`w-full rounded border-solid border-2 border-gray-300 `}
                    />
                  </div>
                )}

                {(isOpenPodgrups ? podgroups : [1]).map(
                  (item: IPodgroups | any , index: number) => {
                    return (
                      <TableInputs
                        selectedTeachersForPodgroupsLessons={
                          selectedTeachersForPodgroupsLessons
                        }
                        setSelectedTeachersForPodgroupsLessons={
                          setSelectedTeachersForPodgroupsLessons
                        }
                        value={element.value}
                        countStudents={item.countStudents}
                        index={index}
                        allSelectTeacher={allSelectTeacher}
                        cardDataId={element.id}
                        setAllSelectTeacher={setAllSelectTeacher}
                        teachers={teachers}
                        hours={element.hours}
                        isOpenPodgrups={isOpenPodgrups}
                        setIsOpenPodgrups={setIsOpenPodgrups}
                        podgroups={podgroups}
                      />
                    );
                  }
                )}
              </div>
            )
          );
        })}
      </div>
      <button type='submit'onClick={pushData} className="rounded bg-green-700 px-2 py-1 mt-2.5 text-white">
        Сохранить
      </button>
    </div>
  );
};

export default Card;
