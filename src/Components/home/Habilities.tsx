import { SkillsData } from "@/data/SkillsData";
import { useState } from "react";

export const Habilities = () => {
  const [typeSelected, setTypeSelected] = useState<string>("frontend");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeSelected(e.target.value);
  };

  const filteredSkills = SkillsData.filter(
    (skill) => skill.type === typeSelected
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-15">
        <div>
          <div className="col-span-1">
            <div className="flex justify-center">
              <select
                defaultValue=""
                className="select"
                onChange={handleTypeChange}
              >
                <option value="" disabled>
                  Selecciona un tipo
                </option>
                {[...new Set(SkillsData.map((skill) => skill.type))].map(
                  (type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className="mt-4">
            {filteredSkills.map((skill) => (
              <div className="flex  gap-3 border-2 hover:bg-black hover:text-white border-black my-2 p-3 rounded-full">
                <div >
                  <img
                    className="w-10 h-10  "
                    key={skill.name}
                    src={skill.image}
                    alt={skill.name}
                  />
                </div>

                <div className="my-auto text-center mx-auto">{skill.name} </div>
              </div>
            ))}
          </div>
      
        </div>
        <div className="col-span-2 border-2 p-5">
          hols
        </div>
      </div>
    </>
  );
};
