import { CheckIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';

import { StepI } from '@/types';

interface StepsProgressI extends HTMLAttributes<HTMLDivElement> {
  steps: StepI[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const StepsProgress = ({
  steps,
  className,
  currentStep,
  setCurrentStep,
  ...rest
}: StepsProgressI) => {
  return (
    <nav aria-label='Progress' className={className}>
      <ol role='list' className='flex items-center'>
        {steps.map((step, stepIdx) => (
          <li
            key={step.id}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pr-8 lg:pr-20' : '',
              'relative',
            )}
          >
            {currentStep > stepIdx ? (
              <>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='h-0.5 w-full bg-primary' />
                </div>
                <a
                  href='#'
                  onClick={() => setCurrentStep(stepIdx)}
                  className='relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary/90'
                >
                  <CheckIcon
                    className='h-5 w-5 text-white'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>{step.id}</span>
                </a>
              </>
            ) : currentStep === stepIdx ? (
              <>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='h-0.5 w-full bg-gray-200' />
                </div>
                <a
                  href='#'
                  className='relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white'
                  aria-current='step'
                >
                  <span
                    className='h-2.5 w-2.5 rounded-full bg-primary'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>{step.id}</span>
                </a>
              </>
            ) : (
              <>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='h-0.5 w-full bg-gray-200' />
                </div>
                <a
                  href='#'
                  className='group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400 cursor-not-allowed'
                >
                  <span
                    className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>{step.id}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default StepsProgress;