import React, { useState } from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { columnSelector } from "../../stores/selector";
import { DragDropContext } from "react-beautiful-dnd";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Home() {
  const [listColumn, setListColumn] = useState([]);
  const columns = useSelector(columnSelector);

  useEffect(() => {
    setListColumn(
      columns.map((column) => {
        return {
          column: column.column,
          columnName: column.columnName,
        };
      })
    );
    localStorage.setItem("columns", JSON.stringify(columns));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "columns",
  //     JSON.stringify(
  //       listColumn.map((column) => {
  //         return {
  //           column: column.column,
  //           columnName: column.columnName,
  //         };
  //       })
  //     )
  //   );
  // }, [listColumn]);
  // useEffect(() => {
  //   const columnList = JSON.parse(localStorage.getItem("columns"));
  //   console.log("cll", columnList);
  //   setListColumn(columnList);
  // });

  const handleAddNewColumn = () => {
    const columnNumber = Math.floor(Math.random() * 10000);
    const columnName = "column" + listColumn.length;
    localStorage.setItem(
      "columns",
      JSON.stringify([
        ...listColumn,
        { column: columnNumber, columnName: columnName },
      ])
    );
    const columnsLocal = JSON.parse(localStorage.getItem("columns"));
    setListColumn(columnsLocal);
  };
  const handleDragEnd = (e) => {
    console.log(e);
    const { destination, source } = e;
    if (e.type === "group") {
      const columnList = [...listColumn];
      console.log(columnList[destination.index]);
      //hoán đổi vị trí
      const temp = columnList[destination.index];
      columnList[destination.index] = columnList[source.index];
      columnList[source.index] = temp;
      localStorage.setItem("columns", JSON.stringify(columnList));
      setListColumn([...columnList]);
    } else {
    }
  };
  return (
    <div className="home-wrapper">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="ROOT" type="group" direction={"horizontal"}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="home-wrapper"
            >
              {listColumn.map((column, index) => {
                return (
                  <Draggable
                    draggableId={column.column}
                    key={column.column}
                    index={index}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <Column data={column} provided={provided} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <button className="btnAdd" onClick={handleAddNewColumn}>
          Add new column
        </button>
      </DragDropContext>
    </div>
  );
}
