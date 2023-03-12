import { FC } from "react";
import { useCharacterAnimations } from "../context/CharacterAnimationContext";

export const Interface: FC<any> = () => {
  const { animations, setAnimationIndex, animationIndex }: any =
    useCharacterAnimations();

  return (
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
  );
};
