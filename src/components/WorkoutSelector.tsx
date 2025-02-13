import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { useWorkoutSelection } from "../store/useWorkoutSelection";
import { useCSV } from "../store/useCSV";
import { fromCSV } from "arquero";
import { useStore } from "zustand";

export const WorkoutSelector = () => {
  const csv = useCSV((state) => state.csv);
  const exerciseName = useStore(
    useWorkoutSelection,
    (state) => state.exerciseName
  );
  const setExerciseName = useStore(
    useWorkoutSelection,
    (state) => state.setExerciseName
  );

  if (!csv) {
    return null;
  }

  const exercises = fromCSV(csv).select("Exercise Name").dedupe().objects() as {
    "Exercise Name": string;
  }[];

  return (
    <ComboBox
      selectedKey={exerciseName && exerciseName}
      onSelectionChange={(v) => {
        if (v !== exerciseName) {
          setExerciseName(v ? String(v) : ""); // v is a string because i forced it using the id param in ListBoxItem, the react-aria type is wrong...
        }
      }}
    >
      <Label>Exercise Name</Label>
      <div>
        <Input />
        <Button>▼</Button>
      </div>
      <Popover>
        <ListBox>
          {exerciseName && (
            <ListBoxItem key={exerciseName}>{exerciseName}</ListBoxItem>
          )}
          {exercises.map((d) => (
            <ListBoxItem key={d["Exercise Name"]} id={d["Exercise Name"]}>
              {d["Exercise Name"]}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};
