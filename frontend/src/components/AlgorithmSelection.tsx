import { useState } from 'react'
import { Switch } from '@headlessui/react'

function AlgorithmSelection() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className='flex items-center justify-center space-x-3 font-semibold'>
        <p>BM</p>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-blue-600' : 'bg-green-700'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
        <p>KMP</p>


    </div>
    
  )
}

export default AlgorithmSelection
