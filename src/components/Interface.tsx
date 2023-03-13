import { FC } from "react";
import { useCharacterAnimations } from "../context/CharacterAnimationContext";
import {
  CAMERA_MODE,
  COLOR_CUSTOMIZATION,
  useCharacterCustomization,
} from "../context/CharacterCustomizationContext";
import { ColorsControl } from "./ColorsControl";

const COLOR_PALLET = [
  "033270",
  "4091c9",
  "fedfd4",
  "f29479",
  "65010c",
  "e6af2e",
  "ff8c42",
  "fff275",
];

export const Interface: FC<any> = () => {
  const { animations, setAnimationIndex, animationIndex }: any =
    useCharacterAnimations();
  const { cameraMode, setCameraMode, colors, reset }: any =
    useCharacterCustomization();
  return (
    <>
      <div className="absolute flex flex-col gap-2 z-10 top-5 left-5">
        {animations.map((animation: any, index: number) => (
          <div key={animation}>
            <button
              className={`btn ${
                index === animationIndex ? "" : "btn-outline"
              } btn-info w-full`}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </button>
          </div>
        ))}
      </div>
      <div className="absolute top-5 right-5 z-10 gap-2 flex shadow-lg">
        <>
          <div>
            <button
              className={`btn btn-info w-full`}
              onClick={() => reset(COLOR_CUSTOMIZATION)}
            >
              RESET
            </button>
          </div>
          {CAMERA_MODE.map((mode: any, index: number) => (
            <div key={mode}>
              <button
                className={`btn ${
                  index === CAMERA_MODE.indexOf(cameraMode) ? "" : "btn-outline"
                } btn-info w-full`}
                onClick={() => setCameraMode(CAMERA_MODE[index])}
              >
                {mode}
              </button>
            </div>
          ))}
        </>

        {cameraMode === CAMERA_MODE[1] && (
          <div className="absolute top-16 w-full bg-white rounded-md">
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"SKIN"}
              defaultValue={colors.SKIN}
            />
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"HAIR"}
              defaultValue={colors.HAIR}
            />
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"LIPS"}
              defaultValue={colors.LIPS}
            />
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"GLASSES"}
              defaultValue={colors.GLASSES}
            />
          </div>
        )}
        {cameraMode === CAMERA_MODE[2] && (
          <div className="absolute top-16 w-full bg-white rounded-md">
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"SHIRT"}
              defaultValue={colors.SHIRT}
            />
          </div>
        )}
        {cameraMode === CAMERA_MODE[3] && (
          <div className="absolute top-16 w-full bg-white rounded-md">
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"SHOE"}
              defaultValue={colors.SHOE}
            />
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"STRINGS"}
              defaultValue={colors.STRINGS}
            />
            <ColorsControl
              colorPallet={COLOR_PALLET}
              meshName={"SOLE"}
              defaultValue={colors.SOLE}
            />
          </div>
        )}
      </div>
    </>
  );
};
