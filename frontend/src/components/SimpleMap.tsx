'use client'

import { MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SimpleMap = () => {
  const address = "Via Emanuele Gianturco 92, 80146 Napoli (NA)"
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(address)}`

  return (
    <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-lg relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-blue-300"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        {/* Location Icon */}
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
          <MapPin className="h-8 w-8 text-white" />
        </div>

        {/* Company Info */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            MOBILITY EXPRESS S.R.L.
          </h3>
          <p className="text-gray-700 font-medium mb-1">
            Via Emanuele Gianturco 92
          </p>
          <p className="text-gray-700 font-medium mb-3">
            80146 Napoli (NA)
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
            <span>📞 800 123 456</span>
            <span>•</span>
            <span>📧 info@mobilitysafe.it</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => window.open(googleMapsUrl, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Google Maps
          </Button>
          
          <Button
            onClick={() => window.open(appleMapsUrl, '_blank')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            size="sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Apple Maps
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-xs text-gray-500">
          <p>Orari: Lun-Ven 9:00-18:00</p>
          <p>Parcheggio disponibile</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 left-4 w-1 h-1 bg-blue-500 rounded-full opacity-40"></div>
    </div>
  )
}

export default SimpleMap

