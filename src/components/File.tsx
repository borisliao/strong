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
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setCSV(event.target.result as string);
              }
            };

            reader.readAsText(file[0]);
          }
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      <Button
        onPress={async () => {
          const res = await fetch(
            `${import.meta.env.BASE_URL}/strong_example.csv`
          );
          const text = await res.text();
          setCSV(text);
        }}
      >
        Use Example File
      </Button>
      {csv && (
        <p>CSV last updated on {new Date(dateUpdated).toLocaleString()}</p>
      )}
    </>
  );
};
