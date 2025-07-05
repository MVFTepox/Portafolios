import { SkillsData } from "@/data/SkillsData";
import { useState } from "react";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

export const Habilities = () => {
  const [typeSelected, setTypeSelected] = useState<string>("frontend");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeSelected(e.target.value);
    setSelectedSkill(null); // Reinicia selección al cambiar tipo
  };

  const filteredSkills = SkillsData.filter(
    (skill) => skill.type === typeSelected
  );

  const selectedSkillData = filteredSkills.find(
    (skill) => skill.name === selectedSkill
  );

  const colorMap: Record<string, string> = {
    frontend: "#3b82f6", // azul
    backend: "#ef4444", // rojo
    database: "#22c55e", // verde
    tools: "#f59e0b", // amarillo
    design: "#fbbf24", // naranja
  };

  const chartData = selectedSkillData
    ? [
        {
          name: selectedSkillData.name,
          level: selectedSkillData.level,
          fill: colorMap[selectedSkillData.type] || "#ff0000"
        }
      ]
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 min-h-[500px]">
      {/* Panel izquierdo */}
      <div className="col-span-1 border-2 p-5 bg-white text-black overflow-y-auto max-h-[500px] rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <select
            defaultValue="frontend"
            className="select border border-black rounded-md px-2 py-1"
            onChange={handleTypeChange}
          >
            {[...new Set(SkillsData.map((skill) => skill.type))].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name)}
              className={`flex gap-3 border-2 my-2 p-3 rounded-full transition-all cursor-pointer
      ${
        selectedSkill === skill.name
          ? "bg-black text-white"
          : "hover:bg-black hover:text-white border-black"
      }
    `}
            >
              <img
                className="w-10 h-10 bg-white rounded-full p-1.5"
                src={skill.image}
                alt={skill.name}
              />
              <div className="my-auto text-center mx-auto">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel derecho con gráfica */}
      <div className="col-span-2 border-2 p-5 rounded-xl shadow-md min-h-[500px]  bg-white text-black flex justify-center items-center">
        <div>
          {selectedSkillData ? (
            <RadialBarChart
              width={400}
              height={400}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="100%"
              barSize={50}
              data={chartData}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                animationDuration={1000}
                animationEasing="ease-in-out"
                startAngle={90}
                dataKey="level"
                cornerRadius={10}
                label={renderCustomLabel}
              />
              <Legend
                iconSize={0}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={{}}
                formatter={() => (
                  <>
                    <div className="flex items-center gap-2 relative top-14 right-0 bg-black rounded-2xl p-2 ">
                      <span className="text-white text-1xl font-mono  ">
                        {selectedSkill}
                      </span>
                    </div>
                  </>
                )}
              />
            </RadialBarChart>
          ) : (
            <p className="text-gray-500">
              Selecciona una habilidad para ver su nivel.
            </p>
          )}
        </div>
        <div>
          <img
            className="w-25 h-25 bg-white rounded-full p-1.5"
            src={selectedSkillData?.image}
            alt={selectedSkillData?.name}
          />
        </div>
      </div>
    </div>
  );
};

const renderCustomLabel = ({
  cx,
  cy,
  value
}: {
  cx: number;
  cy: number;
  value: number;
}) => (
  <text
    className="text-black dark:text-white"
    x={cx}
    y={cy}
    fill="#4B5563" // gris oscuro
    fontSize={28}
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    fontFamily=" 'Roboto', 'Helvetica', 'Arial', sans-serif"
  >
    {`${value}%`}
  </text>
);
