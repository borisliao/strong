import { useEffect } from "react";
import { FileTrigger, Button } from "react-aria-components";
import { useCSV } from "../store/useCSV";

export const File = () => {
  const { csv, dateUpdated, setCSV } = useCSV();
  useEffect(() => {}, [csv]);

  return (
    <>
      <FileTrigger
        acceptedFileTypes={[".csv"]}
        onSelect={(file) => {
          if (file && file.length > 0) {
            setCSV(file[0].name);
          }
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      {csv && (
        <p>CSV last updated on {new Date(dateUpdated).toLocaleString()}</p>
      )}
    </>
  );
};
