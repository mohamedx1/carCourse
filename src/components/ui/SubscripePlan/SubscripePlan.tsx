import { Button } from "../button";
import { Card, CardContent } from "../card";

export default function SubscripePlan() {
  return (
    <div className=''>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        Subscribe plan
      </h3>

      <Card className='overflow-hidden'>
        <CardContent className='p-6'>
          {/* Plan Header */}
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h4 className='text-lg font-semibold text-purple-600 mb-1'>
                Premium
              </h4>
              <p className='text-sm text-gray-600'>Individual plan</p>
            </div>
            <button className='text-sm text-gray-600 underline hover:text-gray-800'>
              Change Plan
            </button>
          </div>

          {/* Pricing */}
          <div className='mb-4'>
            <div className='flex items-baseline gap-1'>
              <span className='text-3xl font-bold text-gray-900'>$110</span>
              <span className='text-gray-600 text-sm'>per Year</span>
            </div>
          </div>

          {/* Description */}
          <p className='text-sm text-gray-600 mb-4'>
            Basic features for 1 user.
          </p>

          {/* Terms */}
          <button className='text-sm text-gray-600 underline hover:text-gray-800 mb-6'>
            Terms Apply
          </button>

          {/* Action Buttons */}
          <div className='space-y-3'>
            <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg'>
              Upgrade Plan
            </Button>
            <Button
              variant='ghost'
              className='w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 font-medium py-3'
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
