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

export const WorkoutSelector = () => {
  const { exerciseName, setExerciseName } = useWorkoutSelection();

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
          <ListBoxItem id="Chin Up (Assisted)">Chin Up (Assisted)</ListBoxItem>
          <ListBoxItem id="Pull Up (Assisted)">Pull Up (Assisted)</ListBoxItem>
          <ListBoxItem id="Preacher Curl (Dumbbell)">
            Preacher Curl (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Bicep Curl (Machine)">
            Bicep Curl (Machine)
          </ListBoxItem>
          <ListBoxItem id="Pullover (Machine)">Pullover (Machine)</ListBoxItem>
          <ListBoxItem id="Leg Press">Leg Press</ListBoxItem>
          <ListBoxItem id="Squat (Barbell)">Squat (Barbell)</ListBoxItem>
          <ListBoxItem id="Lying Leg Curl (Machine)">
            Lying Leg Curl (Machine)
          </ListBoxItem>
          <ListBoxItem id="Leg Extension (Machine)">
            Leg Extension (Machine)
          </ListBoxItem>
          <ListBoxItem id="Bench Press (Barbell)">
            Bench Press (Barbell)
          </ListBoxItem>
          <ListBoxItem id="Chest Fly">Chest Fly</ListBoxItem>
          <ListBoxItem id="Triceps Extension">Triceps Extension</ListBoxItem>
          <ListBoxItem id="Incline Bench Press (Barbell)">
            Incline Bench Press (Barbell)
          </ListBoxItem>
          <ListBoxItem id="Push Up">Push Up</ListBoxItem>
          <ListBoxItem id="Hip Abductor (Machine)">
            Hip Abductor (Machine)
          </ListBoxItem>
          <ListBoxItem id="Hip Adductor (Machine)">
            Hip Adductor (Machine)
          </ListBoxItem>
          <ListBoxItem id="Shoulder Press (Machine)">
            Shoulder Press (Machine)
          </ListBoxItem>
          <ListBoxItem id="Lat Pulldown (Cable)">
            Lat Pulldown (Cable)
          </ListBoxItem>
          <ListBoxItem id="Hammer Curl (Dumbbell)">
            Hammer Curl (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Iso-Lateral Row (Machine)">
            Iso-Lateral Row (Machine)
          </ListBoxItem>
          <ListBoxItem id="Bench Press (Dumbbell)">
            Bench Press (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Overhead Press (Dumbbell)">
            Overhead Press (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Lat Pulldown (Machine)">
            Lat Pulldown (Machine)
          </ListBoxItem>
          <ListBoxItem id="Running (Treadmill)">
            Running (Treadmill)
          </ListBoxItem>
          <ListBoxItem id="Iso-Lateral Chest Press (Machine)">
            Iso-Lateral Chest Press (Machine)
          </ListBoxItem>
          <ListBoxItem id="Chest Press (Machine)">
            Chest Press (Machine)
          </ListBoxItem>
          <ListBoxItem id="Bicep Curl (Dumbbell)">
            Bicep Curl (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Triceps Extension (Cable)">
            Triceps Extension (Cable)
          </ListBoxItem>
          <ListBoxItem id="Back Extension (Machine)">
            Back Extension (Machine)
          </ListBoxItem>
          <ListBoxItem id="Preacher Curl (Machine)">
            Preacher Curl (Machine)
          </ListBoxItem>
          <ListBoxItem id="Chest Dip (Assisted)">
            Chest Dip (Assisted)
          </ListBoxItem>
          <ListBoxItem id="Seated Leg Press (Machine)">
            Seated Leg Press (Machine)
          </ListBoxItem>
          <ListBoxItem id="Seated Leg Curl (Machine)">
            Seated Leg Curl (Machine)
          </ListBoxItem>
          <ListBoxItem id="Chest Dip">Chest Dip</ListBoxItem>
          <ListBoxItem id="Chin Up">Chin Up</ListBoxItem>
          <ListBoxItem id="Triceps Pushdown (Cable - Straight Bar)">
            Triceps Pushdown (Cable - Straight Bar)
          </ListBoxItem>
          <ListBoxItem id="Bench Press (Smith Machine)">
            Bench Press (Smith Machine)
          </ListBoxItem>
          <ListBoxItem id="Hip Thrust (Barbell)">
            Hip Thrust (Barbell)
          </ListBoxItem>
          <ListBoxItem id="Seated Tricep Dip">Seated Tricep Dip</ListBoxItem>
          <ListBoxItem id="Iso-Lateral Front Lat Pulldown">
            Iso-Lateral Front Lat Pulldown
          </ListBoxItem>
          <ListBoxItem id="Chest Fly (Dumbbell)">
            Chest Fly (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Torso Rotation (Machine)">
            Torso Rotation (Machine)
          </ListBoxItem>
          <ListBoxItem id="Bicep Curl (Cable)">Bicep Curl (Cable)</ListBoxItem>
          <ListBoxItem id="Bicep Curl (Barbell)">
            Bicep Curl (Barbell)
          </ListBoxItem>
          <ListBoxItem id="Shoulder Press (Plate Loaded)">
            Shoulder Press (Plate Loaded)
          </ListBoxItem>
          <ListBoxItem id="Hanging Leg Raise">Hanging Leg Raise</ListBoxItem>
          <ListBoxItem id="Back Extension">Back Extension</ListBoxItem>
          <ListBoxItem id="Seated Overhead Press (Dumbbell)">
            Seated Overhead Press (Dumbbell)
          </ListBoxItem>
          <ListBoxItem id="Bent Over One Arm Row (Dumbbell)">
            Bent Over One Arm Row (Dumbbell)
          </ListBoxItem>
        </ListBox>
      </Popover>
    </ComboBox>
  );
};
