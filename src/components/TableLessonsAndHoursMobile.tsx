import React from 'react';
import {ITableLessonsTypeAndHours} from "../interfaces/interfaces";



const TableLessonsAndHoursMobile = ({id, addInfo, lessonType, hours}:ITableLessonsTypeAndHours) => {

    return (
        <div
            className={`md:hidden grid  ${
                id == 6 || id == 7 ? "grid-cols-1" : "grid-cols-[2fr_1fr]"
            } justify-stretch`}
        >
            {id == 7 ? (
                <div
                    className={`border-b-2   border-r-2 border-solid border-gray-300 `}
                >
                    <div className="  h-10 font-bold   border-solid border-gray-300 bg-blue-200 flex items-center justify-center">
                        <p>Примечания</p>
                    </div>

                    {addInfo && <small>{addInfo}</small>}
                </div>
            ) : id == 6 ? (
                <div className="  h-10 font-bold border-b-2  border-solid border-gray-300 bg-blue-200 flex items-center justify-center">
                    <p>Количество человек</p>
                </div>
            ) : (
                <>
                    <div
                        className={`border-b-2   border-r-2 border-solid border-gray-300 `}
                    >
                        <div className="  h-10 font-bold border-b-2  border-solid border-gray-300 bg-blue-200 flex items-center justify-center">
                            <p>Занятия</p>
                        </div>

                        <p className='h-10 leading-10 text-center'>{lessonType}</p>
                        {addInfo && <small>{addInfo}</small>}
                    </div>

                    <div className=" border-b-2  border-r-2 border-solid border-gray-300 ">
                        <div className="h-10 block  font-bold border-b-2  border-solid border-gray-300 bg-blue-200 flex items-center justify-center">
                            <p >Часы</p>
                        </div>
                        <p className='h-10 leading-10 text-center'>{hours}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default TableLessonsAndHoursMobile;