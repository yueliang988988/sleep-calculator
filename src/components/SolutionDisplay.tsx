import React from 'react';


type SolutionDisplayProps = {
  solutionArray: string[]
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({solutionArray}) => {
  
  return (
    <div
      className='flex flex-row justify-start items-start gap-4'
    >
      {
        solutionArray.map( time => (
          <div
            className="bg-amber-300"
          >
            {time}
          </div>
        ))
      }
    </div>
  )
}

export default SolutionDisplay