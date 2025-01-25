import { Select, createListCollection } from "@ark-ui/react/select";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type Theme, getTheme } from "../utils";

interface Inputs {
  framework: string;
}

export const FormLibraryWithDefaultValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.select, park: park.select, shadcn: shadcn.select },
    theme
  );
  const { register, handleSubmit, getValues } = useForm<Inputs>({
    defaultValues: { framework: "React" }
  });

  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });
  const defaultValue = getValues("framework");

  const onSubmit: SubmitHandler<Inputs> = (data) => window.alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select.Root collection={collection} defaultValue={[defaultValue]}>
        <Select.Label>Framework</Select.Label>
        <Select.HiddenSelect {...register("framework")} />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      <button type="submit">Submit</button>
    </form>
  );
};
