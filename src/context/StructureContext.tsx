import React, { ReactNode, createContext, useContext, useState } from "react";
import { Vector3 } from "three";

type StructureContextType = {
  points: Vector3[];
  setPoints: React.Dispatch<React.SetStateAction<Vector3[]>>;
  };

const StructureContext = createContext<StructureContextType | undefined>(undefined);

export const useStructureContext = () => {
  const context = useContext(StructureContext);
  if (context === undefined) {
    throw new Error(
      "useStructureContext must be used inside of a SupportsContextProvider"
    );
  }
  return context;
};

export const StructureContextProvider = ({ children }: { children: ReactNode }) => {
    const [points, setPoints] = useState<Vector3[]>([]);


  return (
    <StructureContext.Provider value={{
        points,
        setPoints,
      }}>
      {children}
    </StructureContext.Provider>
  );
};