import dynamic from 'next/dynamic';

const StepperComponent = dynamic(() => import('./status-stepper'), {
  ssr: false,
});

export default StepperComponent