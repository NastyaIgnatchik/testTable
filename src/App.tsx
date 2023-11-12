import React, { useEffect } from "react";
import "../src/index.css";
import { IData } from "./interfaces/interfaces";
import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./store/actionCreator";
import { RootState } from "./store";

function App() {
  const { fetchData } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData() as any);
  }, []);

  return (
    <>
      {fetchData?.data?.data?.map((item: IData) => {
        return (
          <Card
            countPodgroups={item.countPodgroups}
            podgroups={item.podgroups}
            card={item}
            teachers={fetchData.data.teachers}
          />
        );
      })}
    </>
  );
}

export default App;
