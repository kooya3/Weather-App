"use client";

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";


function CalloutCard({ message, warning }: Props) {
  return (
    <Callout
    className="mt-4"
    title={message}
    />
  );
}


export default CalloutCard;