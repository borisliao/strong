import { useState } from "react";
import { FileTrigger, Button } from "react-aria-components";

export const File = () => {
  let [file, setFile] = useState<string[] | null>(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
};
