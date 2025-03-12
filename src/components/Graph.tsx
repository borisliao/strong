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

  const data = fromCSV(csv)
    .filter(escape((d: WorkoutData) => d["Exercise Name"] === exerciseName))
    .objects();
  console.log(data);

  return (
    <>
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
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {data.map((entry, index) => (
          <details key={index}>
            <summary>
              Entry {index + 1} - {(entry as WorkoutData).Date}
            </summary>
            <pre>{JSON.stringify(entry, null, 2)}</pre>
          </details>
        ))}
      </div>
    </>
  );
};
