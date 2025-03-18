import * as Accordion from "@radix-ui/react-accordion";
import * as React from "react";

export default { title: "Components/Accordion" };

export const Basic = () => {
  const [valueOne, setValueOne] = React.useState("one");

  return (
    <>
      <h1>Uncontrolled</h1>
      <Accordion.Root type="single">
        <Accordion.Item value="one">
          <Accordion.Header>
            <Accordion.Trigger>One</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Per erat orci nostra luctus sociosqu mus risus penatibus, duis elit vulputate viverra integer ullamcorper
            congue curabitur sociis, nisi malesuada scelerisque quam suscipit habitant sed.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="two">
          <Accordion.Header>
            <Accordion.Trigger>Two</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Cursus sed mattis commodo fermentum conubia ipsum pulvinar sagittis, diam eget bibendum porta nascetur ac
            dictum, leo tellus dis integer platea ultrices mi.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="three" disabled>
          <Accordion.Header>
            <Accordion.Trigger>Three (disabled)</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Sociis hac sapien turpis conubia sagittis justo dui, inceptos penatibus feugiat himenaeos euismod magna, nec
            tempor pulvinar eu etiam mattis.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="four">
          <Accordion.Header>
            <Accordion.Trigger>Four</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Odio placerat <a href="#place-holder">quisque</a> sapien sagittis non sociis ligula penatibus dignissim
            vitae, enim vulputate nullam semper potenti etiam volutpat libero.
            <button type="button">Cool</button>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <h1>Controlled</h1>
      <Accordion.Root type="single" value={valueOne} onValueChange={setValueOne}>
        <Accordion.Item value="one">
          <Accordion.Header>
            <Accordion.Trigger>One</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Per erat orci nostra luctus sociosqu mus risus penatibus, duis elit vulputate viverra integer ullamcorper
            congue curabitur sociis, nisi malesuada scelerisque quam suscipit habitant sed.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="two">
          <Accordion.Header>
            <Accordion.Trigger>Two</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Cursus sed mattis commodo fermentum conubia ipsum pulvinar sagittis, diam eget bibendum porta nascetur ac
            dictum, leo tellus dis integer platea ultrices mi.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="three" disabled>
          <Accordion.Header>
            <Accordion.Trigger>Three (disabled)</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Sociis hac sapien turpis conubia sagittis justo dui, inceptos penatibus feugiat himenaeos euismod magna, nec
            tempor pulvinar eu etiam mattis.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="four">
          <Accordion.Header>
            <Accordion.Trigger>Four</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Odio placerat <a href="#place-holder">quisque</a> sapien sagittis non sociis ligula penatibus dignissim
            vitae, enim vulputate nullam semper potenti etiam volutpat libero.
            <button type="button">Cool</button>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <h1>Collapsible</h1>
      <Accordion.Root type="single" defaultValue="one" collapsible>
        <Accordion.Item value="one">
          <Accordion.Header>
            <Accordion.Trigger>One</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Per erat orci nostra luctus sociosqu mus risus penatibus, duis elit vulputate viverra integer ullamcorper
            congue curabitur sociis, nisi malesuada scelerisque quam suscipit habitant sed.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="two">
          <Accordion.Header>
            <Accordion.Trigger>Two</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Cursus sed mattis commodo fermentum conubia ipsum pulvinar sagittis, diam eget bibendum porta nascetur ac
            dictum, leo tellus dis integer platea ultrices mi.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="three" disabled>
          <Accordion.Header>
            <Accordion.Trigger>Three (disabled)</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Sociis hac sapien turpis conubia sagittis justo dui, inceptos penatibus feugiat himenaeos euismod magna, nec
            tempor pulvinar eu etiam mattis.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="four">
          <Accordion.Header>
            <Accordion.Trigger>Four</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Odio placerat <a href="#place-holder">quisque</a> sapien sagittis non sociis ligula penatibus dignissim
            vitae, enim vulputate nullam semper potenti etiam volutpat libero.
            <button type="button">Cool</button>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};
