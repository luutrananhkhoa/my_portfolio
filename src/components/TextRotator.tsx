import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
    I am a Software Developer &
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-primary">Freelancer</li>
          <li className="text-primary">Gamer</li>
          <li className="text-primary">Creator</li>
          <li className="text-primary">Rapper</li>
          <li className="text-primary">Photographer</li>
          <li className="text-primary">Contributor</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator