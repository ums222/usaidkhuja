import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Thermometer, ArrowDown, ArrowUp, RotateCw, Beaker, Container, MoveDown, CircleDot, Waves, Building2, Clock, Users, Rocket, Target } from 'lucide-react';

const DACVisualizer = () => {
  const [activeStep, setActiveStep] = useState({
    solid: 0,
    liquid: 0,
    electro: 0
  });

  const technologies = {
    solid: [
      {
        title: "Air Intake",
        description: "Ambient air is drawn into the system through fans",
        icon: <Wind className="w-12 h-12 text-blue-500" />
      },
      {
        title: "Contact with Sorbent",
        description: "Air flows through solid sorbent material (amine-based)",
        icon: <Beaker className="w-12 h-12 text-purple-500" />
      },
      {
        title: "CO₂ Binding",
        description: "CO₂ molecules bind to the sorbent at room temperature",
        icon: <ArrowDown className="w-12 h-12 text-green-500" />
      },
      {
        title: "Heat Application",
        description: "System is heated to 80-120°C",
        icon: <Thermometer className="w-12 h-12 text-red-500" />
      },
      {
        title: "CO₂ Release",
        description: "Pure CO₂ is released from the sorbent",
        icon: <ArrowUp className="w-12 h-12 text-orange-500" />
      },
      {
        title: "Sorbent Regeneration",
        description: "Sorbent cools down and is ready for reuse",
        icon: <RotateCw className="w-12 h-12 text-blue-500" />
      }
    ],
    liquid: [
      {
        title: "Air Contact",
        description: "Air contacts liquid KOH solution in contactor",
        icon: <Wind className="w-12 h-12 text-blue-500" />
      },
      {
        title: "CO₂ Absorption",
        description: "CO₂ reacts with KOH to form K₂CO₃",
        icon: <Waves className="w-12 h-12 text-blue-500" />
      },
      {
        title: "Causticization",
        description: "Ca(OH)₂ is added to convert K₂CO₃",
        icon: <Beaker className="w-12 h-12 text-purple-500" />
      },
      {
        title: "CaCO₃ Formation",
        description: "Calcium carbonate precipitates out",
        icon: <MoveDown className="w-12 h-12 text-green-500" />
      },
      {
        title: "Calcination",
        description: "CaCO₃ is heated to ~900°C",
        icon: <Thermometer className="w-12 h-12 text-red-500" />
      },
      {
        title: "CO₂ Collection",
        description: "Pure CO₂ is collected and CaO is recycled",
        icon: <RotateCw className="w-12 h-12 text-orange-500" />
      }
    ],
    electro: [
      {
        title: "Cell Setup",
        description: "Air enters electrochemical cell",
        icon: <Container className="w-12 h-12 text-blue-500" />
      },
      {
        title: "Cathode Reaction",
        description: "H₂O is reduced to form OH⁻ ions",
        icon: <CircleDot className="w-12 h-12 text-purple-500" />
      },
      {
        title: "CO₂ Absorption",
        description: "CO₂ forms bicarbonate with OH⁻",
        icon: <Beaker className="w-12 h-12 text-green-500" />
      },
      {
        title: "Ion Transport",
        description: "Ions move through membrane",
        icon: <ArrowDown className="w-12 h-12 text-orange-500" />
      },
      {
        title: "Anode Reaction",
        description: "Oxidation releases pure CO₂",
        icon: <ArrowUp className="w-12 h-12 text-red-500" />
      },
      {
        title: "System Regeneration",
        description: "Cell is ready for next cycle",
        icon: <RotateCw className="w-12 h-12 text-blue-500" />
      }
    ]
  };

  const companies = {
    solid: {
      name: "Climeworks",
      founded: "2009",
      location: "Switzerland",
      scale: "4,000 tons CO₂/year",
      description: "Operates world's largest DAC plant 'Orca' in Iceland",
      keyFeatures: [
        "Modular design for scalable implementation",
        "Proprietary amine-based solid sorbent",
        "Partners with Carbfix for underground storage",
        "Commercial-scale operation"
      ]
    },
    liquid: {
      name: "Carbon Engineering",
      founded: "2009",
      location: "Canada",
      scale: "1M tons CO₂/year (planned)",
      description: "Building 'DAC 1' facility in Texas",
      keyFeatures: [
        "Large-scale facility development",
        "Potassium hydroxide solution process",
        "Acquired by Occidental in 2023",
        "Focus on enhanced oil recovery"
      ]
    },
    electro: {
      name: "Mission Zero Technologies",
      founded: "2020",
      location: "United Kingdom",
      scale: "Pilot phase",
      description: "Pioneering electrochemical DAC technology",
      keyFeatures: [
        "70% less energy consumption",
        "Direct renewable energy integration",
        "Microsoft carbon removal partnership",
        "Novel electrochemical approach"
      ]
    }
  };

  const nextStep = (tech) => {
    setActiveStep(prev => ({
      ...prev,
      [tech]: (prev[tech] + 1) % technologies[tech].length
    }));
  };

  const CompanyCard = ({ company }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-blue-600">{company.name}</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {company.scale}
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-1" />
            {company.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Founded {company.founded}
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{company.description}</p>

      <div className="space-y-3">
        <h4 className="font-semibold flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-500" />
          Key Features
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {company.keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Rocket className="w-4 h-4 mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProcess = (tech, steps) => (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Step {activeStep[tech] + 1} of {steps.length}</h3>
          <button 
            onClick={() => nextStep(tech)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next Step
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-white rounded-full shadow-sm">
            {steps[activeStep[tech]].icon}
          </div>
          <div>
            <h4 className="text-lg font-medium">{steps[activeStep[tech]].title}</h4>
            <p className="text-gray-600">{steps[activeStep[tech]].description}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep[tech] + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className={`p-4 rounded-lg ${idx === activeStep[tech] ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50'}`}
          >
            <div className="flex flex-col items-center text-center">
              {step.icon}
              <span className="text-sm mt-2">{step.title}</span>
            </div>
          </div>
        ))}
      </div>

      <CompanyCard company={companies[tech]} />
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Direct Air Capture Technologies</h2>
      
      <Tabs defaultValue="solid" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="solid">Solid DAC</TabsTrigger>
          <TabsTrigger value="liquid">Liquid DAC</TabsTrigger>
          <TabsTrigger value="electro">Electrochemical DAC</TabsTrigger>
        </TabsList>
        
        <TabsContent value="solid">
          {renderProcess('solid', technologies.solid)}
        </TabsContent>
        
        <TabsContent value="liquid">
          {renderProcess('liquid', technologies.liquid)}
        </TabsContent>
        
        <TabsContent value="electro">
          {renderProcess('electro', technologies.electro)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DACVisualizer;
