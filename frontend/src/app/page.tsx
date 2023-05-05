import { SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
        <h1 className='text-5xl font-bold mb-20'>Welcome to GIGAChat</h1>

        <div className='flex space-x-2 text-center'>
          <div>
            <div className='flex flex-col items-center justify-center mb-5'>
              {/* Sun Icon */}
              <SunIcon className="h-6 w-6 text-white"/>

              <h2>Capital City</h2>
            </div>

            <div className='space-y-2'>
              <p className='infoText'>"Apa ibukota Indonesia"</p>
              <p className='infoText'>"Apa ibukota Gambia"</p>
              <p className='infoText'>"Apa ibukota India"</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Sun Icon */}
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Counting</h2>
            </div>

            <div className="space-y-2">
              <p className='infoText'>"Hitung 3*5*7-(1-3)"</p>
              <p className='infoText'>"Hitung 5*4"</p>
              <p className='infoText'>"Hari apa 23/04/2012"</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Sun Icon */}
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Pick</h2>
            </div>

            <div className="space-y-2">
              <p className='infoText'>"Pilih 2 dari 1-155"</p>
              <p className='infoText'>"Pilih 1 dari bubur diaduk, ga diaduk"</p>
              <p className='infoText'>"Pilih 1 dari a, b, c, d"</p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default HomePage