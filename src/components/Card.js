import React from 'react'

export const Card = ({exercise}) => {

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4">
  <img class="w-full" src={exercise.gifUrl} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{exercise.name}</div>
    <p class="text-gray-700 text-base">
     {exercise.instructions}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{exercise.target}</span>
    
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gym</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Start Today</span>
  </div>
</div>
  )
}
