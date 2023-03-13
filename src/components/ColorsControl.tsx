import { useCharacterCustomization } from "../context/CharacterCustomizationContext";

type Props = {
  colorPallet: string[];
  meshName: string;
  defaultValue: string;
};

export const ColorsControl = ({
  colorPallet,
  meshName,
  defaultValue,
}: Props) => {
  const { handelColorChange }: any = useCharacterCustomization();
  return (
    <div className="min-h-12 w-full rounded-md bg-opacity-50 my-2 p-3">
      <h1 className="font-semibold text-lg text-black capitalize">
        {meshName.toLowerCase()}:
      </h1>
      <div className="flex justify-between cursor-pointer">
        {colorPallet.map((color) => {
          return (
            <div
              key={color}
              className={`h-6 w-6 rounded-full border-green-400 ${
                defaultValue.slice(1) === color ? "border-2" : ""
              }`}
              style={{
                backgroundColor: `#${color}`,
              }}
              onClick={(e) => {
                handelColorChange(meshName, `#${color}`);
              }}
            />
          );
        })}
      </div>
      <input
        type="color"
        className="w-full mt-4"
        value={defaultValue}
        onChange={(e) => {
          handelColorChange(meshName, e.target.value);
        }}
      />
    </div>
  );
};
