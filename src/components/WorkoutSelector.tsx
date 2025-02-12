import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

export const WorkoutSelector = () => {
  return (
    <ComboBox>
      <Label>Exercise Name</Label>
      <div>
        <Input />
        <Button>▼</Button>
      </div>
      <Popover>
        <ListBox>
          <ListBoxItem>Chin Up (Assisted)</ListBoxItem>
          <ListBoxItem>Pull Up (Assisted)</ListBoxItem>
          <ListBoxItem>Preacher Curl (Dumbbell)</ListBoxItem>
          <ListBoxItem>Bicep Curl (Machine)</ListBoxItem>
          <ListBoxItem>Pullover (Machine)</ListBoxItem>
          <ListBoxItem>Leg Press</ListBoxItem>
          <ListBoxItem>Squat (Barbell)</ListBoxItem>
          <ListBoxItem>Lying Leg Curl (Machine)</ListBoxItem>
          <ListBoxItem>Leg Extension (Machine)</ListBoxItem>
          <ListBoxItem>Bench Press (Barbell)</ListBoxItem>
          <ListBoxItem>Chest Fly</ListBoxItem>
          <ListBoxItem>Triceps Extension</ListBoxItem>
          <ListBoxItem>Incline Bench Press (Barbell)</ListBoxItem>
          <ListBoxItem>Push Up</ListBoxItem>
          <ListBoxItem>Hip Abductor (Machine)</ListBoxItem>
          <ListBoxItem>Hip Adductor (Machine)</ListBoxItem>
          <ListBoxItem>Shoulder Press (Machine)</ListBoxItem>
          <ListBoxItem>Lat Pulldown (Cable)</ListBoxItem>
          <ListBoxItem>Hammer Curl (Dumbbell)</ListBoxItem>
          <ListBoxItem>Iso-Lateral Row (Machine)</ListBoxItem>
          <ListBoxItem>Bench Press (Dumbbell)</ListBoxItem>
          <ListBoxItem>Overhead Press (Dumbbell)</ListBoxItem>
          <ListBoxItem>Lat Pulldown (Machine)</ListBoxItem>
          <ListBoxItem>Running (Treadmill)</ListBoxItem>
          <ListBoxItem>Iso-Lateral Chest Press (Machine)</ListBoxItem>
          <ListBoxItem>Chest Press (Machine)</ListBoxItem>
          <ListBoxItem>Bicep Curl (Dumbbell)</ListBoxItem>
          <ListBoxItem>Triceps Extension (Cable)</ListBoxItem>
          <ListBoxItem>Back Extension (Machine)</ListBoxItem>
          <ListBoxItem>Preacher Curl (Machine)</ListBoxItem>
          <ListBoxItem>Chest Dip (Assisted)</ListBoxItem>
          <ListBoxItem>Seated Leg Press (Machine)</ListBoxItem>
          <ListBoxItem>Seated Leg Curl (Machine)</ListBoxItem>
          <ListBoxItem>Chest Dip</ListBoxItem>
          <ListBoxItem>Chin Up</ListBoxItem>
          <ListBoxItem>Triceps Pushdown (Cable - Straight Bar)</ListBoxItem>
          <ListBoxItem>Bench Press (Smith Machine)</ListBoxItem>
          <ListBoxItem>Hip Thrust (Barbell)</ListBoxItem>
          <ListBoxItem>Seated Tricep Dip</ListBoxItem>
          <ListBoxItem>Iso-Lateral Front Lat Pulldown</ListBoxItem>
          <ListBoxItem>Chest Fly (Dumbbell)</ListBoxItem>
          <ListBoxItem>Torso Rotation (Machine)</ListBoxItem>
          <ListBoxItem>Bicep Curl (Cable)</ListBoxItem>
          <ListBoxItem>Bicep Curl (Barbell)</ListBoxItem>
          <ListBoxItem>Shoulder Press (Plate Loaded)</ListBoxItem>
          <ListBoxItem>Hanging Leg Raise</ListBoxItem>
          <ListBoxItem>Back Extension</ListBoxItem>
          <ListBoxItem>Seated Overhead Press (Dumbbell)</ListBoxItem>
          <ListBoxItem>Bent Over One Arm Row (Dumbbell)</ListBoxItem>
        </ListBox>
      </Popover>
    </ComboBox>
  );
};
