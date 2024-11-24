import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

const FAQCollapse = ({ question, answer }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-gray-200 rounded-lg focus:outline-none focus-visible:ring">
          <span>{question}</span>
          {open ? (
            <ChevronUpIcon className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-primary" />
          )}
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
          {answer}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default FAQCollapse;
