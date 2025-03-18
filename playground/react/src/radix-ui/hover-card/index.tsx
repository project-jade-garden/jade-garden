import * as HoverCard from "@radix-ui/react-hover-card";

function CardContentPlaceholder() {
  return (
    <div style={{ maxWidth: 400, display: "flex", alignItems: "center" }}>
      <div style={{ width: 60, height: 60, backgroundColor: "white", borderRadius: 100 }} />
      <div style={{ marginLeft: 14 }}>
        <div style={{ width: 200, backgroundColor: "white", height: 14, borderRadius: 100 }} />
        <div
          style={{
            width: 150,
            backgroundColor: "white",
            height: 14,
            borderRadius: 100,
            marginTop: 10
          }}
        />
      </div>
    </div>
  );
}

export const Basic = () => {
  return (
    <div style={{ padding: 50, display: "flex", justifyContent: "center" }}>
      <HoverCard.Root>
        <HoverCard.Trigger href="/">trigger</HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content>
            <HoverCard.Arrow />
            <CardContentPlaceholder />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};
