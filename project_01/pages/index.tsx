import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactCard from "../components/ContactCard";
import AddContactForm from "../components/AddContactForm";
import { useState } from "react";

import { PrismaClient, Contact, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts,
    },
  };
}

export async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  // Await for the promise
  return await response.json();
}

export default function Home({ initialContacts }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
          <AddContactForm
            onSubmit={async (data, e) => {
              try {
                await saveContact(data);
                setContacts([...contacts, data]);
                e.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((c: Contact, i) => (
            <div className="mb-3" key={i}>
              <ContactCard contact={c} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
