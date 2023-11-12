export interface IGetData{
  data:IData[]
}


export interface IPodgroups {
  countStudents: string;
  examTeacher: string;
  laboratoryTeacher: string;
  lectureTeacher: string;
  offsetTeacher: string;
  practiceTeacher: string;
  seminarTeacher: string;
}
export interface ICardData {
  additionalInfo: string;
  countPodgroups: string;
  course: string;
  exam: boolean;
  groupName: string;
  laboratoryHours: string;
  lecturesHours: string;
  offset: boolean;
  podgroups: IPodgroups[];
  practicHours: string;
  semestr: string;
  seminarHours: string;
  studentsNumber: string;
  subjectName: string;
  uniqueId: string;

}
export interface IData {
  additionalInfo: string;
  countPodgroups: string;
  course: string;
  exam: boolean;
  groupName: string;
  laboratoryHours: string;
  lecturesHours: string;
  offset: boolean;
  podgroups: IPodgroups[];
  practicHours: string;
  semestr: string;
  seminarHours: string;
  studentsNumber: string;
  subjectName: string;
  uniqueId: string;
  teachers:ITeachers[];
}
export interface ITeachers {
  id: string;
  name: string;
}
export interface ICardsData {
  id: number;
  title: string;
  hours?: string;
  addInfo?: string;
  value?:string;
}
export interface ICustomPodgroups {
  podgroupId: number;
  countStudents: string;
  examTeacher: string;
  laboratoryTeacher: string;
  lectureTeacher: string;
  offsetTeacher: string;
  practiceTeacher: string;
  seminarTeacher: string;
  [key: string]: string | number;
}

export interface ICountStudents {
  indx: number;
  count: string;
  selectedTeachersForPodgroupsLessons: ICustomPodgroups[];
  setSelectedTeachersForPodgroupsLessons: (
      selectedTeachersForPodgroupsLessons: ICustomPodgroups[]
  ) => void;
  isOpenPodgrups: boolean;
  disabled: boolean;
}
export interface IPodgroupsMobile extends IPodgroupTitles{
  indx: number;
}
export interface IPodgroupTitles {
  isOpenPodgrups: boolean;
  setIsOpenPodgrups: (isOpenPodgrups: boolean) => void;
  podgroups: IPodgroups[];
}
export interface ISelect{
  selectedTeachersForPodgroupsLessons:ICustomPodgroups[];
  value?: string;
  setSelectedTeachersForPodgroupsLessons:(selectedTeachersForPodgroupsLessons:ICustomPodgroups[])=>void;
  indx:number
  teachers:ITeachers[];
  disabled:boolean;
  allSelectTeacher:IAllSelectTeacher;
  isOpenPodgrups:boolean;
  setIsOpenPodgrups:(isOpenPodgrups:boolean)=>void;
  podgroups:IPodgroups[];
}

export interface IAllSelectTeacher {
  id: number;
  value: string;
}
export interface ISelectWithButton {
  setIsOpenPodgrups: (isOpenPodgrups: boolean) => void;
  isOpenPodgrups: boolean;
  podgroups: IPodgroups[];
  indx: number;
  teachers: ITeachers[];
  setAllSelectTeacher: (allSelectedTeacher: IAllSelectTeacher) => void;
  disabled: boolean;
  setSelectedTeachersForPodgroupsLessons: (
      selectedTeachersForPodgroupsLessons: ICustomPodgroups[]
  ) => void;
  selectedTeachersForPodgroupsLessons:ICustomPodgroups[];
}
export interface ITableInputs {
  selectedTeachersForPodgroupsLessons: ICustomPodgroups[];
  setSelectedTeachersForPodgroupsLessons: (
      selectedTeachersForPodgroupsLessons: ICustomPodgroups[]
  ) => void;
  value?:string;
  countStudents: string;
  index: number;
  allSelectTeacher: IAllSelectTeacher;
  cardDataId: number;
  setAllSelectTeacher: (allSelectTeacher: IAllSelectTeacher )=>void;
  teachers: ITeachers[];
  hours?: string;
  isOpenPodgrups: boolean;
  setIsOpenPodgrups: (isOpenPodgrups: boolean) => void;
  podgroups: IPodgroups[];
}
export interface ITableLessonsTypeAndHours {
  id: number;
  addInfo?: string;
  lessonType: string;
  hours?: string;
}
export interface ITableTitles extends IPodgroupTitles{
  countPodgroups: string;
}
export interface IUpperTableData {
  id: number;
  title: string;
  value: string;
}

export interface IUpperTable{
  groupName:string;
  studentsNumber:string;
  course:string;
  semestr:string;
}
export interface IDispatch{
  type:string;
  payload:IData[]
}


export interface ICardProps
{
  card:ICardData;
  teachers:ITeachers[];
  countPodgroups:string ;
  podgroups:IPodgroups[];
}




