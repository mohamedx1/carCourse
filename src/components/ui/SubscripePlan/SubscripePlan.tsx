import { Button } from "../button";
import { Card, CardContent } from "../card";
import { cardContainerClass } from "./../../../styles";

export default function SubscripePlan() {
  return (
    <div className=''>
      <h3 className='text-2xl font-semibold text-gray-500 mb-4'>
        Subscribe plan
      </h3>

      <Card className={cardContainerClass}>
        <CardContent className='p-6'>
          {/* Plan Header */}
          <div className='mb-4'>
            <h4 className='text-2xl font-semibold text-primary-700 mb-1'>
              Premium
            </h4>
            <div className='flex justify-between'>
              <p className='text-base font-semibold text-gray-600'>
                Individual plan
              </p>
              <button className='text-sm font-normal text-gray-600 underline  hover:text-gray-800'>
                Change Plan
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div className='mb-4'>
            <div className='flex items-baseline gap-1'>
              <span className='text-[42px] font-bold text-gray-900'>$110</span>
              <span className='text-gray-600 text-base font-normal'>
                per Year
              </span>
            </div>
          </div>

          {/* Description */}
          <p className='text-xl font-normal text-gray-600 mb-4'>
            Basic features for 1 user.
          </p>

          {/* Terms */}
          <button className='text-sm text-gray-600 underline hover:text-gray-800 mb-6'>
            Terms Apply
          </button>

          {/* Action Buttons */}
          <div className='space-y-3'>
            <Button className='w-full flex py-7 bg-primary hover:bg-primary-500 text-white font-bold text-xl  rounded-3xl'>
              Upgrade Plan
            </Button>
            <Button
              variant='ghost'
              className='w-full flex py-7 bg-primary-100 hover:bg-primary-500 text-primary font-bold text-xl  rounded-3xl'
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
