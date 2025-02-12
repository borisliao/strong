import { useState } from "react";
import { FileTrigger, Button } from "react-aria-components";

export const File = () => {
  let [file, setFile] = useState<string | null>(null);

  return (
    <>
      <FileTrigger
        onSelect={(file) => {
          if (file && file.length > 0) {
            setFile(file[0].name);
          }
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
};
