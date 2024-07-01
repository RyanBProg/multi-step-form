import { useState } from "react";

export default function FormPage1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">Personal Info</h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        Please provide your name, emial address, and phone number.
      </p>
      <label htmlFor="name" className="text-marineBlue">
        Name
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          required
          className="border rounded-md p-2 pl-3 w-full mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email" className="text-marineBlue block mt-4">
        Email Address
        <input
          type="email"
          id="email"
          placeholder="stephenking@gmail.com"
          required
          className="border rounded-md p-2 pl-3 w-full mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="number" className="text-marineBlue block mt-4">
        Phone Number
        <input
          type="text"
          id="number"
          placeholder="e.g. +1 234 567 890"
          required
          className="border rounded-md p-2 pl-3 w-full mt-1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
    </>
  );
}
