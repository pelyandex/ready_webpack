// @ts-nocheck
import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  MiniMap,
  useReactFlow
} from "react-flow-renderer";

import { useStore } from "@models/index";

import { DataSaver } from "./DataSaver";
import { DataSource } from "./DataSource";
import { Jupiter } from "./Jupiter";
import { ModalWorkflow } from "./Modal";

const initialNodes = [
  {
    id: "data_source",
    type: "data_source",
    position: { x: 900, y: -200 },
    data: { value: 123 }
  },
  {
    id: "jupiter1.1",
    type: "jupiter",
    position: { x: 0, y: 0 },
    data: { value: 124 }
  },
  {
    id: "jupiter1",
    type: "jupiter",
    position: { x: 100, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter2",
    type: "jupiter",
    position: { x: 200, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter3",
    type: "jupiter",
    position: { x: 300, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter4",
    type: "jupiter",
    position: { x: 400, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter5",
    type: "jupiter",
    position: { x: 500, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter6",
    type: "jupiter",
    position: { x: 0, y: 35 },
    parentNode: "group2",
    data: { value: 123 }
  },
  {
    id: "jupiter7",
    type: "jupiter",
    parentNode: "group2",
    position: { x: 100, y: 35 },
    data: { value: 123 }
  },
  {
    id: "jupiter8",
    type: "jupiter",
    position: { x: 800, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter9",
    type: "jupiter",
    position: { x: 900, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter10",
    type: "jupiter",
    position: { x: 1000, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter11",
    type: "jupiter",
    position: { x: 1100, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter12",
    type: "jupiter",
    position: { x: 1200, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter13",
    type: "jupiter",
    position: { x: 1300, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter14",
    type: "jupiter",
    position: { x: 1400, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter15",
    type: "jupiter",
    position: { x: 1500, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter16",
    type: "jupiter",
    position: { x: 1600, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter17",
    type: "jupiter",
    position: { x: 1700, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter18",
    type: "jupiter",
    position: { x: 1800, y: 0 },
    data: { value: 123 }
  },
  {
    id: "jupiter19",
    type: "jupiter",
    position: { x: 0, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter20",
    type: "jupiter",
    position: { x: 100, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter21",
    type: "jupiter",
    position: { x: 200, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter22",
    type: "jupiter",
    position: { x: 300, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter23",
    type: "jupiter",
    position: { x: 400, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter24",
    type: "jupiter",
    position: { x: 500, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter25",
    type: "jupiter",
    position: { x: 600, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter26",
    type: "jupiter",
    position: { x: 700, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter27",
    type: "jupiter",
    position: { x: 800, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter28",
    type: "jupiter",
    position: { x: 900, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter29",
    type: "jupiter",
    position: { x: 1000, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter30",
    type: "jupiter",
    position: { x: 1100, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter31",
    type: "jupiter",
    position: { x: 1200, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter32",
    type: "jupiter",
    position: { x: 1300, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter33",
    type: "jupiter",
    position: { x: 1400, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter34",
    type: "jupiter",
    position: { x: 1500, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter35",
    type: "jupiter",
    position: { x: 1600, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter36",
    type: "jupiter",
    position: { x: 1700, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter37",
    type: "jupiter",
    position: { x: 1800, y: 100 },
    data: { value: 123 }
  },
  {
    id: "jupiter38",
    type: "jupiter",
    position: { x: 0, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter39",
    type: "jupiter",
    position: { x: 100, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter40",
    type: "jupiter",
    position: { x: 200, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter41",
    type: "jupiter",
    position: { x: 300, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter42",
    type: "jupiter",
    position: { x: 400, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter43",
    type: "jupiter",
    position: { x: 500, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter44",
    type: "jupiter",
    position: { x: 600, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter45",
    type: "jupiter",
    position: { x: 700, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter46",
    type: "jupiter",
    position: { x: 800, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter47",
    type: "jupiter",
    position: { x: 900, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter48",
    type: "jupiter",
    position: { x: 1000, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter49",
    type: "jupiter",
    position: { x: 1100, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter50",
    type: "jupiter",
    position: { x: 1200, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter51",
    type: "jupiter",
    position: { x: 1300, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter52",
    type: "jupiter",
    position: { x: 1400, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter53",
    type: "jupiter",
    position: { x: 1500, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter54",
    type: "jupiter",
    position: { x: 1600, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter55",
    type: "jupiter",
    position: { x: 1700, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter56",
    type: "jupiter",
    position: { x: 1800, y: 200 },
    data: { value: 123 }
  },
  {
    id: "jupiter57",
    type: "jupiter",
    position: { x: 0, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter58",
    type: "jupiter",
    position: { x: 100, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter59",
    type: "jupiter",
    position: { x: 200, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter60",
    type: "jupiter",
    position: { x: 300, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter61",
    type: "jupiter",
    position: { x: 400, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter62",
    type: "jupiter",
    position: { x: 500, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter63",
    type: "jupiter",
    position: { x: 600, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter64",
    type: "jupiter",
    position: { x: 700, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter65",
    type: "jupiter",
    position: { x: 800, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter66",
    type: "jupiter",
    position: { x: 900, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter67",
    type: "jupiter",
    position: { x: 1000, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter68",
    type: "jupiter",
    position: { x: 1100, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter69",
    type: "jupiter",
    position: { x: 1200, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter70",
    type: "jupiter",
    position: { x: 1300, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter71",
    type: "jupiter",
    position: { x: 1400, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter72",
    type: "jupiter",
    position: { x: 1500, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter73",
    type: "jupiter",
    position: { x: 1600, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter74",
    type: "jupiter",
    position: { x: 1700, y: 300 },
    data: { value: 123 }
  },
  {
    id: "jupiter75",
    type: "jupiter",
    position: { x: 1800, y: 300 },
    data: { value: 123 }
  },
  {
    id: "data_saver",
    type: "data_saver",
    position: { x: 900, y: 500 },
    data: { value: 123 }
  },
  {
    id: "group1",
    type: "group",
    position: { x: 900, y: -35 },
    data: { label: "asd" },
    style: {
      width: 200,
      height: 140,
      background: "rgba(100, 225, 68, 0.2)",
      "z-index": "-1"
    }
  },
  {
    id: "group2",
    type: "group",
    position: { x: 600, y: -35 },
    data: { label: "asd" },
    style: {
      width: 200,
      height: 140,
      background: "rgba(242, 169, 70, 0.2)"
    }
  }
];

const initialEdges = [
  { id: "edge-1", source: "data_source", target: "jupiter1.1" },
  { id: "edge-2", source: "jupiter1.1", target: "jupiter1" },
  { id: "edge-3", source: "jupiter1", target: "jupiter2" },
  { id: "edge-4", source: "jupiter2", target: "jupiter3" },
  { id: "edge-5", source: "jupiter3", target: "jupiter4" },
  { id: "edge-6", source: "jupiter4", target: "jupiter5" },
  { id: "edge-7", source: "jupiter5", target: "jupiter6" },
  { id: "edge-8", source: "jupiter6", target: "jupiter7" },
  { id: "edge-9", source: "jupiter7", target: "jupiter8" },
  { id: "edge-10", source: "jupiter8", target: "jupiter9" },
  { id: "edge-11", source: "jupiter9", target: "jupiter10" },
  { id: "edge-12", source: "jupiter10", target: "jupiter11" },
  { id: "edge-13", source: "jupiter11", target: "jupiter12" },
  { id: "edge-14", source: "jupiter12", target: "jupiter13" },
  { id: "edge-15", source: "jupiter13", target: "jupiter14" },
  { id: "edge-16", source: "jupiter14", target: "jupiter15" },
  { id: "edge-17", source: "jupiter15", target: "jupiter16" },
  { id: "edge-18", source: "jupiter16", target: "jupiter17" },
  { id: "edge-19", source: "jupiter17", target: "jupiter18" },
  { id: "edge-20", source: "jupiter18", target: "jupiter19" },
  { id: "edge-21", source: "jupiter19", target: "jupiter20" },
  { id: "edge-22", source: "jupiter20", target: "jupiter21" },
  { id: "edge-23", source: "jupiter21", target: "jupiter22" },
  { id: "edge-24", source: "jupiter22", target: "jupiter23" },
  { id: "edge-25", source: "jupiter23", target: "jupiter24" },
  { id: "edge-26", source: "jupiter24", target: "jupiter25" },
  { id: "edge-27", source: "jupiter25", target: "jupiter26" },
  { id: "edge-28", source: "jupiter26", target: "jupiter27" },
  { id: "edge-29", source: "jupiter27", target: "jupiter28" },
  { id: "edge-30", source: "jupiter28", target: "jupiter29" },
  { id: "edge-31", source: "jupiter29", target: "jupiter30" },
  { id: "edge-32", source: "jupiter30", target: "jupiter31" },
  { id: "edge-33", source: "jupiter31", target: "jupiter32" },
  { id: "edge-34", source: "jupiter32", target: "jupiter33" },
  { id: "edge-35", source: "jupiter33", target: "jupiter34" },
  { id: "edge-36", source: "jupiter34", target: "jupiter35" },
  { id: "edge-37", source: "jupiter35", target: "jupiter36" },
  { id: "edge-38", source: "jupiter36", target: "jupiter37" },
  { id: "edge-39", source: "jupiter37", target: "jupiter38" },
  { id: "edge-40", source: "jupiter38", target: "jupiter39" },
  { id: "edge-41", source: "jupiter39", target: "jupiter40" },
  { id: "edge-42", source: "jupiter40", target: "jupiter41" },
  { id: "edge-43", source: "jupiter41", target: "jupiter42" },
  { id: "edge-44", source: "jupiter42", target: "jupiter43" },
  { id: "edge-45", source: "jupiter43", target: "jupiter44" },
  { id: "edge-46", source: "jupiter44", target: "jupiter45" },
  { id: "edge-47", source: "jupiter45", target: "jupiter46" },
  { id: "edge-48", source: "jupiter46", target: "jupiter47" },
  { id: "edge-49", source: "jupiter47", target: "jupiter48" },
  { id: "edge-50", source: "jupiter48", target: "jupiter49" },
  { id: "edge-51", source: "jupiter49", target: "jupiter50" },
  { id: "edge-52", source: "jupiter50", target: "jupiter51" },
  { id: "edge-53", source: "jupiter51", target: "jupiter52" },
  { id: "edge-54", source: "jupiter52", target: "jupiter53" },
  { id: "edge-55", source: "jupiter53", target: "jupiter54" },
  { id: "edge-56", source: "jupiter54", target: "jupiter55" },
  { id: "edge-57", source: "jupiter55", target: "jupiter56" },
  { id: "edge-58", source: "jupiter56", target: "jupiter57" },
  { id: "edge-59", source: "jupiter57", target: "jupiter58" },
  { id: "edge-60", source: "jupiter58", target: "jupiter59" },
  { id: "edge-61", source: "jupiter59", target: "jupiter60" },
  { id: "edge-62", source: "jupiter60", target: "jupiter61" },
  { id: "edge-63", source: "jupiter61", target: "jupiter62" },
  { id: "edge-64", source: "jupiter62", target: "jupiter63" },
  { id: "edge-65", source: "jupiter63", target: "jupiter64" },
  { id: "edge-66", source: "jupiter64", target: "jupiter65" },
  { id: "edge-67", source: "jupiter65", target: "jupiter66" },
  { id: "edge-68", source: "jupiter66", target: "jupiter67" },
  { id: "edge-69", source: "jupiter67", target: "jupiter68" },
  { id: "edge-70", source: "jupiter68", target: "jupiter69" },
  { id: "edge-71", source: "jupiter69", target: "jupiter70" },
  { id: "edge-72", source: "jupiter70", target: "jupiter71" },
  { id: "edge-73", source: "jupiter71", target: "jupiter72" },
  { id: "edge-74", source: "jupiter72", target: "jupiter73" },
  { id: "edge-75", source: "jupiter73", target: "jupiter74" },
  { id: "edge-76", source: "jupiter74", target: "jupiter75" },
  { id: "edge-77", source: "jupiter75", target: "data_saver" }
];

export const Workflow = observer(() => {
  const nodeTypes = useMemo(
    () => ({
      data_source: DataSource,
      data_saver: DataSaver,
      jupiter: Jupiter
    }),
    []
  );

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [modalVisible, setModalVisible] = useState(false);

  const onNodesChange = useCallback(
    (changes: any) => setNodes(nds => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    changes => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    connection => setEdges(eds => addEdge({ ...connection }, eds)),
    [setEdges]
  );

  const { setCenter } = useReactFlow();

  const { projectStatus, setProjectStatus } = useStore();

  useEffect(() => {
    if (projectStatus !== "running") {
      const hasError = nodes.find(el => el.data.isError);
      if (!hasError) return;
      setCenter(hasError.position.x + 50, hasError.position.y + 50, {
        duration: 1000
      });
      return;
    }
    const script = (index = 0) => {
      const isError = index > 10 && Math.random() > 0.5;
      const newNodes = nodes.map((el, ind) => {
        return {
          ...el,
          data: {
            isRunning: ind === index,
            isError: ind === index && isError,
            isSuccess: ind < index
          }
        };
      });

      const newEdges = edges.map((el, ind) => ({
        ...el,
        animated: isError ? false : index === ind
      }));

      setNodes(newNodes);
      setEdges(newEdges);

      if (isError) {
        setProjectStatus("stopped");
        return;
      }

      setTimeout(() => script(index + 1), Math.random() * 1000);
    };
    script();
  }, [projectStatus]);

  const onContextMenu = (e: any) => {
    e.preventDefault();
    setModalVisible(true);
  };

  return (
    <>
      <ReactFlow
        zoomOnDoubleClick={false}
        onContextMenu={onContextMenu}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
      <ModalWorkflow
        setVisible={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
});
