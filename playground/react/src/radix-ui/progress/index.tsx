import * as Progress from "@radix-ui/react-progress";
import * as React from "react";

type ProgressRangeProps = { value: ProgressValue; setValue: (val: number) => void; max: number };

function ProgressRange({ value, setValue, max = 100 }: ProgressRangeProps) {
  const previousValueRef = usePreviousValueRef(value);
  return (
    <input
      type="range"
      disabled={value == null}
      value={value == null ? previousValueRef.current : value}
      max={max}
      min={0}
      onChange={(e) => {
        const val = Number(e.target.value);
        if (!Number.isNaN(val)) {
          setValue(val);
        }
      }}
    />
  );
}

type ProgressValue = number | null;
function useProgressValueState(initialState: ProgressValue | (() => ProgressValue), max = 100) {
  const [value, setValue] = React.useState<number | null>(initialState);
  const precentage = value != null ? Math.round((value / max) * 100) : null;
  return [value, precentage, setValue] as const;
}

function useIndeterminateToggle(value: ProgressValue, setValue: React.Dispatch<React.SetStateAction<ProgressValue>>) {
  const previousValueRef = usePreviousValueRef(value);
  const toggleIndeterminate = React.useCallback(
    function setIndeterminate() {
      setValue((val) => {
        if (val == null) {
          return previousValueRef.current;
        }
        return null;
      });
    },
    [previousValueRef, setValue]
  );
  return toggleIndeterminate;
}

function usePreviousValueRef(value: ProgressValue) {
  const previousValueRef = React.useRef<number>(value || 0);
  React.useEffect(() => {
    if (value != null) {
      previousValueRef.current = value;
    }
  });
  return previousValueRef;
}

export const Basic = () => {
  const max = 150;
  const [value, percentage, setValue] = useProgressValueState(0, max);
  const toggleIndeterminate = useIndeterminateToggle(value, setValue);
  return (
    <div>
      <Progress.Root>
        <Progress.Indicator style={{ width: percentage != null ? `${percentage}%` : undefined }} />
      </Progress.Root>
      <hr />
      <button type="button" onClick={toggleIndeterminate}>
        Toggle Indeterminate
      </button>
      <ProgressRange value={value} setValue={setValue} max={max} />
    </div>
  );
};
