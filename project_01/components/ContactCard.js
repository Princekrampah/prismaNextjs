import { Contact } from '@prisma/client';
import Image from 'next/image';



export default function ContactCard(props) {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="my-auto">
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.contact.firstName} {props.contact.lastName}
        </p>
        <p className="text-gray-500">{props.contact.email}</p>
      </div>
    </div>
  );
}