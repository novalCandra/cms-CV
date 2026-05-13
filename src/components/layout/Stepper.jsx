import { STEPS } from "../../constants";

export default function Stepper({ currentStep, setCurrentStep }) {
  return (
    <div className="mb-6">
      <div className="md:hidden">
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`transition-all rounded-full ${currentStep === step.id ? "w-6 h-2.5 bg-indigo-600" : currentStep > step.id ? "w-2.5 h-2.5 bg-green-400" : "w-2.5 h-2.5 bg-slate-200"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mb-3 bg-white rounded-xl px-4 py-2.5 border border-slate-200">
          <span className="text-xl">{STEPS[currentStep - 1].icon}</span>
          <div>
            <p className="text-xs text-slate-400">Langkah {currentStep} dari 7</p>
            <p className="font-semibold text-slate-800 text-sm">{STEPS[currentStep - 1].label}</p>  
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-0 overflow-x-auto pb-1">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center shrink-0">
            <button
              onClick={() => setCurrentStep(step.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium transition-all ${currentStep === step.id ? "bg-indigo-600 text-white" : currentStep > step.id ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}
            >
              <span>{step.icon}</span>
              <span className="hidden lg:inline">{step.label}</span>
              <span className="lg:hidden">{step.id}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`w-4 h-0.5 ${currentStep > step.id ? "bg-green-400" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
