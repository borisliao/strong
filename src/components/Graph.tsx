import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useWorkoutSelection } from "../store/useWorkoutSelection";
import { useCSV } from "../store/useCSV";
import { useStore } from "zustand";
import { fromCSV, escape } from "arquero";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Graph = () => {
  const csv = useCSV((state) => state.csv);
  const { exerciseName } = useStore(useWorkoutSelection);

  if (!exerciseName || !csv) {
    return null;
  }
  interface WorkoutData {
    Date: string;
    "Exercise Name": string;
    Weight: number;
    Reps: number;
  }

  const data: WorkoutData[] = fromCSV(csv)
    .params({ exerciseName: exerciseName })
    .filter((d: WorkoutData) => d["Exercise Name"] === exerciseName)
    .objects();
  console.log(data);

  return (
    <ResponsiveContainer aspect={7.0 / 3.0} height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Legend />
        <Line
          type="monotone"
          dataKey="Weight"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="Reps"
          stroke="#82ca9d"
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
