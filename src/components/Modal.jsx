import React from 'react'

export const Modal = ({open, onClose}) => {
    if (!open) return null

  return (
    <div className='w-[100%] h-[100%] bg-slate-200/90 flex fixed top-0 justify-center items-center z-40 left-0 '>
    <div className="w-full max-w-xs ">
        <p onClick={onClose}>X</p>
        <form class="bg-white shadow-md rounded px-5 py-10">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Vehicle Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Vehicle Name" />

            </div>
            <div className='grid grid-cols-2 gap-x-10'>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Vehicle Price
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Vehicle Price" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Vehicle Type
                </label>
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Luxury</option>
                    <option>Two-Wheelers</option>
                    <option>Sports</option>
                    <option>Off-Road</option>
                    <option>Electric</option>
                </select>
            </div>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    AC
                </label>
                <div className='grid grid-cols-2'>
                    <div>
                        <input type="radio" name="AC" />
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">AC</label>
                    </div>
                    <div>
                        <input className='' type="radio" name="AC" />
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">N/A</label>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Transmission Type
                </label>
                <div className='grid grid-cols-2'>
                    <div>
                        <input type="radio" name="AC" />
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Auto</label>
                    </div>
                    <div>
                        <input className='' type="radio" name="AC" />
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manual</label>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Confirm
                </button>

            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
        </p>
    </div>
</div>
)
}

